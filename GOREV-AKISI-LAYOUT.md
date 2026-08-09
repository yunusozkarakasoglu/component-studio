# Görev Akışı — Layout Tema Entegrasyonu

> Kullanıcı `Masaüstü/Layouts` klasöründe (localhost:5174) sayfa tasarımları üretir.
> Bu doküman: kaynağı **oku → anla → yeni layout tema olarak sisteme ekle** akışını tanımlar.
> Yeni tema geldiğinde bu akış aynen uygulanır. (v1)

---

## 1) KAYNAĞI OKU

Kaynak klasör: `/home/yunus/Masaüstü/Layouts`

| Dosya | Rolü | Öncelik |
|---|---|---|
| `src/App.jsx` | React ana şablon — **state/davranışların asıl kaynağı** | 1 |
| `src/styles.css` | Tasarım sistemi (değişkenler + sınıflar + dark theme) | 2 |
| `<ad>.html` | Kullanıcının ürettiği statik görünümler (örn. `arayuz.html`) | 3 (görünüm referansı) |
| `index.html`, `vite.config.js` | Port (5174), font bağlantısı | bilgi |

**Okuma sırası:** önce `App.jsx` (yapı + state), sonra `styles.css` (görünüm sistemi),
varsa HTML (hangi varyant — yeni tema mı yoksa mevcut mu).

> Kullanıcı akışı: "ben ilerledikçe sen son halden **ayrı tema** olarak eklersin" →
> 5174'teki güncel tasarım her seferinde **yeni tema numarası** (Tema 2, 3, …) olur.

---

## 2) ANLA

Çıkarılacaklar:
1. **Bölümler** — GlobalHeader, Sidebar, PageHeader, içerik (tablo/kart), Footer — hangileri var?
2. **State/davranışlar** — sidebar collapse, dark mode, filtre seçimleri, alt menüler, sekmeler… (React'te `useState` ile korunur)
3. **İkonlar** — inline SVG adları (lucide tarzı) → kendi setimizle eşle:
   `menu→Menu, search→Search, filter→Filter, bell→Bell, calendar→CalendarDays, user→User, chevron*→Chevron*, check→Check, moon→Moon, sun→Sun, sort→ArrowUpDown, eye→Eye, dots→MoreHorizontal, grid→LayoutGrid, chart→BarChart3, users→Users, layers→Layers, settings→Settings`
   (Kontrol: `grep "export.*\bAd\b" src/components/ui/icons.tsx` — eşleşmeyen için kullanıcıya sor)
4. **CSS** — `:root` değişkenleri, global reset, `body` kuralları, `[data-theme='dark']` — **tümü scoped edilmeli** (stüdyoyu etkilememesi için)

---

## 3) SİSTEME EKLE (entegrasyon)

### 3.1 Dosyalar
- `bilesen-kutuphanesi/src/layouts/tema<N>.tsx` — TSX çeviri
  - JSX → TSX: tipler ekle (`useState<...>`, props interface), `class`→`className`, `style`→object
  - İkonlar kendi setimizden: `import { Bell, … } from "@/components/ui/icons"` — boyut `style={{width,height}}`
  - Kök: `ref` + `data-theme="light"` + `className="tema<N>-root app"` (dark state köke yazılır, `documentElement`'e DEĞİL)
  - Named export: `export { Tema<N> }`
- `bilesen-kutuphanesi/src/layouts/tema<N>.css` — kullanıcının styles.css kopyası, **scoped**:
  - `:root` → `.tema<N>-root`
  - `*` reset → `.tema<N>-root *, .tema<N>-root *::before, ::after`
  - `body` kuralları → `.tema<N>-root`
  - `html[data-theme='dark']` → `.tema<N>-root[data-theme='dark']`
  - `.app { height: 100vh }` → `.tema<N>-root { height: 100vh }`
  - font: uzak font (Google Fonts) → sistem fontu (offline ilkesi)
  - Doğrulama: `grep -E "^(body|html|:root|\*|#root)" tema<N>.css` → **YOK** olmalı
  - Thumbnail override ekle: `.tema-thumb .tema<N>-root { height: 100% !important; width: 100%; }`
  - **Tam ekran override ekle** (tema header'ı geri bar'ının altından başlasın):
    ```css
    .tema-fullscreen .tema<N>-root { height: calc(100vh - 48px) !important; }
    .tema-fullscreen .tema<N>-root .g-header { top: 48px !important; }
    ```

### 3.2 Layoutlar sekmesi (`bilesen-kutuphanesi/src/layouts-view.tsx`)
- `temas` listesine kart ekle: `{ id: "tema<N>", title: "Tema <N>", desc: "...", node: <Tema<N> />, ready: true }`
- `import { Tema<N> } from "./layouts/tema<N>"`
- Kutu → tam ekran → geri akışı hazır (TemaThumb + fullscreen)

### 3.3 Doğrulama
```bash
cd bilesen-kutuphanesi && npx tsc --noEmit -p tsconfig.app.json   # 0 hata
npm test                                                          # 15/15
cd .. && python3 tests/kapsamli-kontrol.py                        # 20 OK · 0 HATA
```
Tarayıcı (CDP, localhost:5800):
1. `cdp click "📐 Layoutlar"` → yeni tema kutusu görünmeli (minyatür)
2. Kutuya tıkla → tema tam sayfa açılır (`.fixed.inset-0 .tema<N>-root` var)
3. "← Layoutlara Dön" → kutulara dönüş

### 3.4 Commit
`git add -A && git commit -m "Layout: Tema <N> (<ad>) entegrasyonu"` — her tema ayrı commit.
Kütüphane kaydı (envanter/registry) DEĞİŞMEZ — tema'lar `src/layouts/` + Layoutlar sekmesi kaydıdır.

---

## 4) KURALLAR / DİKKAT

- **Saf React + Tailwind değil, kullanıcının CSS'i**: tema'lar kendi scoped CSS'iyle taşınır (görünüm %100 korunur; Tailwind'e çevirme — görünüm bozulur).
- **Üçüncü parti UI paketi YASAK**; ikonlar her zaman kendi setimizden.
- **Uzak görsel/font YASAK** → gradient placeholder / sistem fontu.
- `.ts` içinde JSX OLMAZ — JSX içeren dosyalar `.tsx` olmalı (builder/schema dersleri).
- Global CSS kuralları stüdyoyu bozar → **scoped şart**.
- `cdp click` gerçek mouse tıklaması (React onClick tetikler); programatik için **`el.click()`** (native — React onClick'i tetikler) en güvenilir; `dispatchEvent(MouseEvent)` bazen çalışmaz.
- CDP sekmesi 5174'e (kullanıcının projesi) kayabilir — stüdyoya dönmek için `cdp eval "location.href='http://localhost:5800/'"`.
- 5800 düşerse: `./kutuphane-baslat.sh` (durdur: `./kutuphane-durdur.sh`).

---

## 5) HIZLI KONTROL LİSTESİ (yeni tema)
- [ ] App.jsx/HTML okundu, bölümler + state çıkarıldı
- [ ] İkonlar setimizle eşlendi (eksikse soruldu)
- [ ] `tema<N>.tsx` + `tema<N>.css` oluşturuldu, CSS scoped (`grep` kontrolü YOK)
- [ ] Tam ekran + thumbnail override eklendi (fixed elemanlar: g-header/app__body/footer)
- [ ] `layouts-view.tsx`'e kart eklendi (hash URL: `#/layoutlar/tema<N>`)
- [ ] tsc ✓ · test 15/15 ✓ · kapsamlı kontrol 20 OK ✓
- [ ] Tarayıcı: kutu → tam ekran → geri ✓
- [ ] Commit alındı
