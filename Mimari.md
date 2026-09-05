# 🏗️ Mimari — Yazılım Mimarisi & Kodlama Kuralları

> Bu dosya proje içindeki yazılım mimarisini açıklar: uygulama yapısı, veri akışı,
> API'ler, bağımlılıklar, kodlama kuralları ve kritik bilgiler.
> Proje geneli: `project_info.md` · İlerleme: `Roadmap.md` · Görev takibi: `Tasks.md`

---

## 1. Genel Bakış

**Offline, saf React bileşen kütüphanesi + tasarım stüdyosu** (Vite dev uygulaması, port **5800**).
- **Frontend:** React + Tailwind v4 (Vite) — tek uygulama, backend yok.
- **Veri:** `registry/data/registry.json` (build-registry.mjs üretir) + envanter `Bileşen Listesi .txt` (tek kaynak).
- **API:** Vite middleware (yalnızca dev/stüdyo içi — `vite.config.ts`).
- **Depo:** GitHub `yunusozkarakasoglu/component-studio` (PUBLIC) · yerel kök `~/.pi/Component-studio`.

---

## 2. Uygulama Yapısı (stüdyo — 5 sekme)

```
bilesen-kutuphanesi/src/
├── App.tsx               ← stüdyo ana bileşeni — 5 sekme yönlendirmesi
│                          (dashboard | bilesenler | layoutlar | widgets | ikonlar)
├── dashboard-view.tsx    ← 📊 Dashboard (özet + kategori kısayolları)
├── widgets-view.tsx      ← 🧰 Widgets (kategori "Widgets" filtreli liste)
├── layouts-view.tsx      ← 📐 Layoutlar (tema kutuları → tam ekran, hash route)
├── icons-view.tsx        ← 🧩 İkonlar (arama + 23 kategori + tıkla kopyala + toast)
├── samples.tsx           ← SAMPLES[id] = galeri önizleme JSX'i
├── layouts/tema1-2.tsx   ← layout temaları (tema1-2.css — scoped `.temaN-root`)
├── lib/
│   ├── utils.ts          ← cn() (clsx + tailwind-merge)
│   ├── useVirtualGrid.ts ← sanal liste hook'u (DOM %96 azaltma)
│   ├── findRootInfo.ts   ← JSX kök bulucu + style enjeksiyonu (testlerin kalbi)
│   ├── iconNames.ts      ← 1756 ikon adı (otomatik üretildi)
│   └── iconCategories.ts ← 23 kategori grubu (otomatik üretildi)
└── components/ui/*.tsx   ← BİLEŞENLER (her biri TEK dosya — bkz. §3)
```

**Bileşen kütüphanesi katmanı** (`components/ui/`):
```
├── icons.tsx          ← 1756 ikon (SVG gömülü, paket yok, ~936KB) — lucide'dan ÜRETİLMİŞ
├── icons-brand.tsx    ← marka ikonları (Google/GitHub/Apple)
├── color.ts           ← ortak renk çekirdeği (bileşen değil)
├── index.tsx          ← barrel (export * from "./x")
└── <bileşen>.tsx      ← tek dosya, named export, interface başta, JSDoc etiketli
```

---

## 3. Bileşen Kuralları (HER bileşen)

- Tek dosya, **named export**, interface dosya başında.
- Dosya başı JSDoc **zorunlu etiketler**: `@id <numara>` · `@category <kategori>` · (gerekirse)
  `@subcategory <alt>` · `@source <heroui|shadcn|mantine|mui|ozel>` · `@tags virgül,ayrımlı`.
- Üst düzey bileşen çekirdek import ediyorsa: `Gerektirir (ortak çekirdek): <dosya>` JSDoc notu.
- **Numaralandırma:** `@id` = sıradaki boş (son id: **2086**). Envanter + samples ile birebir aynı sırada.
- **Saf React standartları:** yalnızca react + tailwind; üçüncü parti UI paketi YASAK.
- A11y zorunlu: `aria-expanded`/`aria-controls`/`aria-current`, `role`/`aria-labelledby`.
- `.ts` içinde JSX OLMAZ (JSX → `.tsx`).
- JSDoc'ta üçüncü parti adı yok ("HeroUI örneği" gibi ibareler kaldırılır).

### İsimlendirme
| Kaynak | Önek | Örnek |
|---|---|---|
| HeroUI | — | Button, Modal, Calendar |
| shadcn/ui | `Shadcn` | ShadcnDialog, ShadcnTabs |
| Mantine | `Mt` | MtButton, MtTable |
| Material UI | `Mui` | MuiButton, MuiSlider |
| Özel | — | UyeListesi, HesapMakinesi, RichTextEditorPlus |

### Ortak çekirdekler (bağımlılık — kopyalarken çekirdeği de al)
| Çekirdek | Kullananlar |
|---|---|
| `calendar.tsx` | date-picker, range-calendar, calendar-* |
| `color.ts` + color-* | color-picker |
| `checkbox.tsx` | checkbox-group |
| `button.tsx` | button-* örnekleri |
| `icons.tsx` / `icons-brand.tsx` | hepsi (SVG gömülü) |

Kural: ÖRNEK bileşen ana bileşeni import edebilir; ANA bileşen çekirdeği import eder
ve JSDoc'ta belirtir. Kod tekrarı yapılmaz — çekirdek tek yerdedir.

---

## 4. Veri Akışları

### 4.1 Yeni bileşen kaydı (LLM akışı — Görev B)
```
1. src/components/ui/<kebab>.tsx  oluştur (JSDoc @id/@category/@source/@tags)
2. index.tsx barrel:  export * from "./<kebab>"
3. samples.tsx galeri: "<id>": <Bileşen />  (zorunlu prop'lar için örnek içerik ver)
4. "Bileşen Listesi .txt" envanter: ### Kategori > #### Alt Kategori > - `id` Ad
5. cd registry && node build-registry.mjs   (91 sn)
6. tsc → npm test → kapsamlı kontrol → CDP tarayıcı → commit + push
```

### 4.2 Kullanıcının projesine entegrasyon (Görev A)
1. Kaynağı `read`; isimleri/export'ları DEĞİŞTİRME.
2. **Bağımlılık zincirini çöz** (import'lardan recursive + "Gerektirir:" notu):
   çekirdek + icons.tsx/icons-brand.tsx + `@/lib/utils` (cn) hep birlikte kopyalanır.
3. `@/*` → projenin `src/`; `cn()` sağla; Tailwind v4 varsay.
4. Kullanıcı görevini uygula, değişiklikleri açıkla.

### 4.3 Stüdyoda düzenleme/kaydetme
- 💾 Kaydet → `POST /api/save-component {file, code}` → dosyaya yazar,
  **işlenmiş kodu döndürür (`code: out`)** → `mergeSaved(id, tags, code)` state'e anında merge.
- 🔄 DB Yenile → `/api/rebuild-registry` (91 sn) — save akışı rebuild'i beklemez (arka planda).
- Etiketler DOM'dan okunur (`getElementById("comp-tags").value`).

---

## 5. Stüdyo API'leri (vite.config.ts — Vite middleware)

| API | Yöntem | İşlev |
|---|---|---|
| `/api/workbench/start|save|read|clear` | POST/GET | Sihirbaz workbench oturumu |
| `/api/test-component` | GET | Test bileşeni (yasak import + named export kontrolü) |
| `/api/pi` | POST | **Pi köprüsü** — SSE akışı (sihirbazda LLM çağrısı; global npm'den require) |
| `/api/finalize-component` | POST | workbench → ui/<kebab>.tsx + barrel + samples (JSDoc @id/@category stüdyo ekler) |
| `/api/create-component` | POST | Yeni bileşen (JSDoc + dosya) |
| `/api/save-component` | POST | Dosyaya kod yazar + işlenmiş kodu döndürür |
| `/api/rebuild-registry` | GET | build-registry.mjs (91 sn) |

### Sihirbaz akışı
- Route: `#/yeni-bilesen` · UI: `src/components/ui/new-component-wizard.tsx` (2 sütun: SOL terminal + SAĞ önizleme)
- **Kural (KRİTİK):** Sihirbazdaki LLM yalnızca `src/workbench/current/index.tsx`'e YAZAR —
  KAYIT YAPMAZ (barrel/samples/envanter/registry/commit YASAK). Kayıt kullanıcının "Kaydet" butonuyla.
  Tam talimat: `YENI-BILESEN-SIHIRBAZI-TALIMATI.md` (vite.config system prompt'u bunu okur — SİLME!)
- Bekleyen rozeti: localStorage `wb-pending`.

---

## 6. Layout Tema Entegrasyonu (kullanıcı yeni tema istediğinde)

Kaynak: kullanıcının 5174'teki React şablonu (Masaüstü/Layouts silindi — yeni tasarım gelince yeniden oluşur).

1. **Oku:** `App.jsx` (state/davranış — öncelik 1) → `styles.css` (tasarım sistemi) → varsa HTML (görünüm referansı)
2. **Anla:** bölümler (header/sidebar/footer/içerik), state'ler, ikonlar (kendi setimizle eşle — eksikse sor), CSS değişkenleri
3. **Ekle:**
   - `src/layouts/tema<N>.tsx` — TSX, kendi ikonlar, kök: `data-theme` + `className="tema<N>-root"`, `export { Tema<N> }`
   - `src/layouts/tema<N>.css` — **scoped**: `:root`→`.tema<N>-root`, `*` reset → `.tema<N>-root *`, `body`→`.tema<N>-root`;
     doğrulama `grep -E "^(body|html|:root|\*|#root)" tema<N>.css` → YOK olmalı
   - Thumbnail override: `.tema-thumb .tema<N>-root { height:100% !important; }`
   - Tam ekran override: `.tema-fullscreen .tema<N>-root { height: calc(100vh - 48px) !important; }` (fixed header için `top:48px`)
4. **Layoutlar sekmesi:** `layouts-view.tsx` `temas` listesine kart (hash: `#/layoutlar/tema<N>`)
5. **Doğrula:** tsc ✓ · test 15/15 ✓ · kapsamlı kontrol ✓ · CDP kutu→tam ekran→geri
6. **Commit:** `Layout: Tema <N> (<ad>) entegrasyonu` — kütüphane kaydı (envanter/registry) DEĞİŞMEZ

> Tema CSS'i kullanıcının CSS'idir (Tailwind'e çevrilmez — görünüm %100 korunur).
> Tema1 kenarlık özelleştirmesi: `--border:#eef2f8`, `--border-soft:#f5f8fc` — styles.css'ten senkron sonrası tekrar uygulanır.

---

## 7. İkon Sistemi

- **Kaynak:** `components/ui/icons.tsx` — 1756 ikon, lucide-react'ten (MIT) üretilmiş, SVG gömülü.
  Yeniden üretim: `cd bilesen-kutuphanesi && node scripts/generate-icons.mjs`
- Kullanım: `import { Search } from "@/components/ui/icons"` — **lucide-react'ten doğrudan import YASAK**.
- Yasak dış kaynaklar: `@gravity-ui/icons`, CDN/URL ikonları, `<img src="https://…">`.
- **Eşleştirme sırası:** (1) birebir ad (2) anlam eşleşmesi (Email→Mail, Favorite→Heart)
  (3) emin değilsen kullanıcıya SOR — keyfi ikon YASAK.
- Boyut: `IconProps = SVGProps` → Tailwind `size-*` (`<Search className="size-4" />`).
- Kategoriler: `lib/iconCategories.ts` — camelCase ayrıştırma + word boundary regex
  ("BrainCircuit"→"brain circuit"→Sağlık; "rain" Hava'ya çekmez). Yeni ikon eklenirse
  `iconNames.ts` + `iconCategories.ts` yeniden üretilir.

---

## 8. Doğrulama

```bash
cd bilesen-kutuphanesi && npx tsc --noEmit -p tsconfig.app.json   # 0 hata
cd bilesen-kutuphanesi && npm test        # 15/15 (findRootInfo birim testleri)
python3 tests/kapsamli-kontrol.py         # 20 OK · 2 uyarı · 0 HATA (G1-G7)
cdp open "http://localhost:5800/"         # CDP tarayıcı doğrulama (önce open!)
```

- **findRootInfo kuralı:** kök koşulsuz tek element; JSX kökü ternary `?` ile başlamaz
  (return öncesi hesapla); `if (x) return` erken return'leri `return;` yazılır (blok `{` sayılmaz).
  Regex/string içi parantezler naive sayaçta dengesizlik yaratır → `\(` yerine `\x28`, yorum `1)` → `1.`
- Vite yeni dosya eklenince düşebilir → `./kutuphane-durdur.sh && rm -rf node_modules/.vite && ./kutuphane-baslat.sh`

---

## 9. Bağımlılıklar

| Paket | Rol |
|---|---|
| react, react-dom | UI |
| tailwindcss v4 | stil |
| vite + @vitejs/plugin-react | dev/build |
| clsx + tailwind-merge | cn() |
| typescript | tipler |
| (pi coding agent — global npm) | sihirbaz `/api/pi` köprüsü |

Üçüncü parti **UI** paketi yoktur. `lucide-react` YALNIZCA ikon üretim kaynağıdır (runtime yok).

---

## 10. Kritik Bilgiler & Tuzaklar

1. **Envanter kırpma:** `Bileşen Listesi .txt`'te "**Toplam:**" satırını `rfind` ile bul (`find` yanlış keser).
2. **`### Widgets` envanterde EN SONDA** — ortada olursa sonraki tüm kayıtlar Widgets'e atanır.
3. **Ad-dosya uyumu:** envanter adı = dosya adı; tireli ad regex `[A-Za-z0-9]+` ile kesilir → `miller2.tsx`.
4. **Rebuild 91 sn** — save bekletmez; envanter tek kaynaktır (registry ondan üretilir).
5. **CDP:** programatik `value` set React onChange tetiklemez → native setter + `input` event;
   Vite config değişikliği → restart gerekir. Sekme kaymasına karşı `cdp open` kullan.
6. **Detached HEAD:** push öncesi `git branch --show-current` kontrolü.
7. **Örnek/çekirdek propları opsiyonel yap** (samples props'suz render edilir) veya örnek içerik ver.
8. **HTML prop çakışması:** `size`/`title`/`onSelect` → `Omit<..., "size">`.
9. **Offline ilkesi:** uzak görsel/iframe/CDN → gradient placeholder (TEK İSTİSNA: HesapMakinesi döviz — kullanıcı isteği).
10. **Tema CSS scoped:** `:root`/`*`/`body` → `.tema<N>-root` (stüdyoyu bozar).
