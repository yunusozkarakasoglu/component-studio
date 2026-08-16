# 📋 Component Studio — Proje Bilgi Dosyası

> **Amaç:** Bu dosya projeye ait TÜM açıklamaları tek yerde toplar — proje konusu,
> neler yapılır, mimari (kod yapısı, tasarım), kritik noktalar ve önemli bilgiler.
> Yeni bir oturumda (veya compact sonrası) projeyi hızlıca anlamak için bu dosya okunur.
> Güncel durum: `Roadmap.md` · Proje kuralları: `AGENTS.md` · Kullanım kılavuzu: `README.md`

---

## 1. 🎯 Proje Konusu

**Offline, saf React bileşen kütüphanesi + tasarım stüdyosu.**

- **Konum:** `/home/yunus/.pi/Component-studio` (GitHub: `yunusozkarakasoglu/component-studio`, PUBLIC)
- **Çekirdek ilke:** Üçüncü parti UI paketi **YOK** — her bileşen tek dosya, `react + tailwind v4`,
  kendi gömülü ikon setimizle. Tamamen **offline** çalışır (uzak CDN/API yok).
- **Ne için:** Modern frontend arayüzleri için bileşen kütüphanesi + bunları arayıp,
  önizleyip, düzenleyip kullanıcının projesine kopyalayabileceği bir stüdyo arayüzü.
- **Vizyon (atomic design):** Elements → Components → Layouts → Templates → Pages.
  Kütüphane ilk 3 katmanı doldurur; kullanıcı bunlardan sayfa/tema üretir.

---

## 2. 📦 Neler Yapılır / Yetenekler

### Stüdyo (http://localhost:5800) — 5 sekme
| Sekme | İşlev |
|---|---|
| 📊 **Dashboard** | Kütüphane özeti, bileşen sayısı, kategori kısayolları |
| 🧩 **Bileşenler** | **1995 bileşen**: arama + kategori + alt kategori + kaynak filtresi (Tümü/HeroUI/Mantine/shadcn/MUI/Özel) · ▦Kart / ☰Tablo görünüm · tıkla → canlı önizleme + kod düzenleme → 💾 Kaydet · 🏷 etiketler · ⭐ favoriler |
| 📐 **Layoutlar** | Tema 1-2 canlı minyatür kutular → tıkla → tam ekran → geri (hash routing `#/layoutlar/tema<N>`) |
| 🧰 **Widgets** | Widget kategorisi bileşenleri (SaatWidget canlı saat vb.) |
| 🧩 **İkonlar** | **1756 ikon · 23 kategori** · arama · tıkla → kopyala → yanıp sönen toast bildirimi |

### Bileşen kütüphanesi — 1995 bileşen, 5 kaynak
| Kaynak | Sayı | Önek | Örnekler |
|---|---|---|---|
| HeroUI | 527 | (yok) | Modal, Tabs, Table, Toolbar, NumberField, Calendar |
| shadcn/ui | 387 | `Shadcn` | Dialog, DropdownMenu, Combobox, Sidebar, InputOtp |
| Mantine | 841 | `Mt` | MtButton, MtCard, MtCalendar, MtTree, MtFloatingWindow |
| Material UI | 234 | `Mui` | MuiButton, MuiDialog, MuiSlider, MuiGrid, MuiAccordion |
| Özel | 6 | — | CascadingSelect, Miller2, HesapMakinesi, SaatWidget, RichTextEditor, TaskFilterButton |

### Özel bileşenler (source: `ozel`)
- **CascadingSelect (2079)** — koşullu İl→İlçe seçimi
- **Miller2 (2080)** — dizel motor parça yapısı (Miller Columns + arama, 11 sistem/167 parça)
- **HesapMakinesi (2081)** — 3 modlu araç: Standart hesap / Zaman aralığı / Döviz çevirisi
- **SaatWidget (2082)** — canlı saat + tarih (Widgets kategorisi)
- **RichTextEditor (2083)** — WYSIWYG zengin metin editörü (komut tabanlı, taiga/wiki)
- **TaskFilterButton (2084)** — görev filtresi popover (6 alan + VE/VEYA + `applyFilters` yardımcısı)

### Ek sistemler
- **Etiketler (tags):** JSDoc `@tags` → registry `tags: string[]` · detay sayfası düzenleme (çipler) · tablo sütunu · aramada dahil
- **Favoriler:** ⭐ sekmesi + detayda yıldız butonu · localStorage (`fav-components`) kalıcı
- **Bileşen Sihirbazı (+ Yeni):** pi SDK köprüsü — `/api/pi` SSE + workbench izolasyonu + kayıt finalize
- **CDP entegrasyonu:** `cdp open "http://localhost:5800/"` ile tarayıcı doğrulama

---

## 3. 🏗️ Mimari

### 3.1 Dizin Yapısı

```
Component-studio/
├── bilesen-kutuphanesi/              ← Vite dev uygulaması (port 5800)
│   ├── src/
│   │   ├── components/ui/*.tsx       ← BİLEŞENLER (her biri TEK dosya)
│   │   │   ├── icons.tsx             ← 1756 ikon (SVG gömülü, paket yok, 936KB)
│   │   │   ├── icons-brand.tsx       ← marka ikonları (Google/GitHub/Apple)
│   │   │   ├── color.ts              ← ortak renk çekirdeği (bileşen değil)
│   │   │   └── index.tsx             ← barrel (export * from "./x")
│   │   ├── App.tsx                   ← stüdyo ana bileşeni (5 sekme)
│   │   ├── dashboard-view.tsx        ← Dashboard sekmesi
│   │   ├── icons-view.tsx            ← İkonlar sekmesi
│   │   ├── widgets-view.tsx          ← Widgets sekmesi
│   │   ├── layouts-view.tsx          ← Layoutlar sekmesi
│   │   ├── samples.tsx               ← galeri önizlemeleri (SAMPLES[id] = JSX)
│   │   ├── layouts/tema1-2.tsx+.css  ← layout temaları (CSS scoped .temaN-root)
│   │   └── lib/
│   │       ├── utils.ts              ← cn() (clsx + tailwind-merge)
│   │       ├── useVirtualGrid.ts     ← sanal liste hook'u (DOM %96 azaltma)
│   │       ├── findRootInfo.ts       ← JSX kök bulucu (testlerin kalbi)
│   │       ├── iconNames.ts          ← 1756 ikon adı (otomatik üretildi)
│   │       └── iconCategories.ts     ← 23 kategori grubu (otomatik üretildi)
│   ├── tests/findRootInfo.test.ts    ← 15 birim testi
│   └── vite.config.ts                ← port 5800 + kaydetme/oluşturma API'leri
├── registry/
│   ├── build-registry.mjs            ← registry.json + .db üretir (91 sn — SQLite I/O)
│   └── data/registry.json            ← bileşen kayıtları (mutlak yollar, code, tags)
├── tests/kapsamli-kontrol.py         ← 20 kontrol · 2 uyarı · 0 HATA hedefi
├── "Bileşen Listesi .txt"            ← ENVANTER (kategori/alt kategori tek kaynağı)
├── kutuphane-baslat.sh / durdur.sh   ← 5800'ü arka planda başlat/durdur
└── *.md                              ← plan/hafıza dokümanları (Roadmap, AGENTS…)
```

### 3.2 Veri Akışı (kayıt)

```
Yeni bileşen (TSX, JSDoc: @id @category @subcategory @source @tags)
   ↓
1. src/components/ui/<kebab>.tsx  (tek dosya, named export)
2. index.tsx barrel: export * from "./<kebab>"
3. samples.tsx galeri: "<id>": <Bileşen />
4. "Bileşen Listesi .txt" envanter: ### Kategori > #### Alt Kategori > - `id` Ad
5. cd registry && node build-registry.mjs  (91 sn — kayıt defteri)
6. tsc → npm test → kapsamlı kontrol → tarayıcı → commit
```

### 3.3 Kaydetme Akışı (stüdyoda düzenleme)

- 💾 Kaydet → `/api/save-component` → **API işlenmiş kodu döndürür (`code: out`)**
- `mergeSaved(id, tags, code)` → state'e **anında merge** (tags + code)
- Rebuild **arka planda fire-and-forget** (91 sn beklenmez)
- Etiket alanı DOM'dan okunur (`getElementById("comp-tags").value`)

### 3.4 İkon Sistemi

- 1756 ikon, `function Ad(props: IconProps)` formatında, `export { Ad }` ile barrel
- `IconProps = SVGProps<SVGSVGElement>` — boyut Tailwind `size-*` class ile
- Kullanım: `import { Search } from "@/components/ui/icons"`
- Kategoriler: `lib/iconCategories.ts` — camelCase ayrıştırma + word boundary regex
  (ör. "BrainCircuit" → "brain circuit" → Sağlık; "rain" alt kelimesi Hava'ya çekmez)
- İkonlar zaten bundle'da (345+ bileşen import ediyor) → İkonlar sekmesi sıfır ekstra yük

### 3.5 Tasarım Sistemi

- **Tailwind v4** — tek stil sistemi; bileşenler className ile
- **Tema CSS scoped:** layout temaları `:root`/`*`/`body` → `.tema<N>-root` (stüdyoyu bozmaz)
- Renk çekirdeği: `color.ts` (bileşenler arası ortak palet)
- İkonlar: kendi setimiz (lucide uyumlu adlar, SVG gömülü)

---

## 4. 🧪 Doğrulama Standartları

```bash
npx tsc --noEmit -p tsconfig.app.json   # 0 hata
cd bilesen-kutuphanesi && npm test      # 15/15 (findRootInfo)
python3 tests/kapsamli-kontrol.py       # 20 OK · 2 uyarı · 0 HATA (G1-G7 grupları)
```

Kapsamlı kontrol grupları: G1 envanter/registry tutarlılığı · G2 dosya etiketleri + ikon adları ·
G3 export + samples önizlemeleri · G4 slug eşleşmesi · G5 derleme (tsc + test) · G7 bağımlılık zinciri.

Her görev sonunda: **tsc ✓ · test 15/15 ✓ · 20 OK ✓ · CDP tarayıcı doğrulama · commit + push**.

---

## 5. ⚠️ Kritik Noktalar & Önemli Bilgiler

### 5.1 Tuzaklar (en kritikler)

1. **Envanter kırpma**: `Bileşen Listesi .txt` güncellerken "**Toplam:**" satırını `rfind` ile bul —
   `find` ilk eşleşmeyi alır, yanlış yeri keser (bir kez 260 kayıt silindi).
2. **`### Widgets` envanterde EN SONDA olmalı** — ortaya konursa sonraki tüm kayıtlar Widgets'e atanır.
3. **Ad-dosya uyumu**: envanter adı = dosya adı (tireli ad build-registry regex `[A-Za-z0-9]+` ile kesilir →
   `Miller-2` → `miller2.tsx` + ad `Miller2`).
4. **JSDoc id sırası**: `@id` envanter/samples ile birebir aynı sırada; id = sıradaki boş (son id: 2084).
5. **findRootInfo**: kök koşulsuz tek element; `{ return }` kısa formu `{` sayılmaz → `return;` kullan;
   string içindeki `<br>` JSX sanılabilir (erken return'ler `return;` yapılır).
6. **`.ts` içinde JSX OLMAZ** — JSX dosyaları `.tsx`.
7. **Rebuild 91 sn** — save akışı rebuild'i beklemez (arka planda fire-and-forget).
8. **CDP:** programatik `value` set React onChange tetiklemez → native setter + `input` event;
   `cdp type` gerçek klavye tetikler. Vite config değişikliği → restart gerekir.
9. **Detached HEAD**: uzun cherry-pick sonrası push öncesi `git branch --show-current` kontrolü.
10. **Örnek/çekirdek propları opsiyonel yap** (render-prop ve zorunlu proplu çekirdekler samples'ta props'suz render edilir).
11. **HTML prop çakışması**: `size`/`title`/`onSelect` → `Omit<..., "size">`.
12. **Tema senkronu**: styles.css'ten yeniden kopyalama özelleştirmeleri ezer.

### 5.2 Performans

- **Sanal liste** (`useVirtualGrid`): Bileşenler sekmesi DOM 32.371 → 1.195 (%96 azalma)
- İkonlar sekmesi: ilk 200 kart render, "Daha fazla göster" ile genişler
- Bekleyen (production öncesi): Adım 4 → Vite manualChunks (icons/ui/vendor ayrı chunk) ·
  Adım 3 → React.memo + debounce · Adım 2 → samples lazy loading

### 5.3 Kısıtlar & Kararlar

- **Offline ilkesi:** uzak görsel/iframe/CDN → gradient placeholder (TEK İSTİSNA: HesapMakinesi döviz modu — kullanıcı isteğiyle uzak API korundu)
- **İkon eşleme:** setimizde yoksa yakın karşılık (Email→Mail, Favorite→Heart, Person→CircleUser, FileCopy→Copy)
- **GravityUI (Heroui çevirileri):** adı setimizdeki eşdeğeriyle eşleştir; emin değilsen kullanıcıya sor
- **A11y zorunlu:** aria-expanded/controls/current, role
- **JSDoc'ta üçüncü parti adı yok** ("HeroUI örneği" gibi ibareler kaldırılır)

### 5.4 Git / Yayın

- Repo: `yunusozkarakasoglu/component-studio` (PUBLIC) · tek kaynak: `~/.pi/Component-studio`
- Kaynak klasörler silindi (Masaüstü/{shadcn,heroui,mantine,Layouts,MaterialUI}) — entegrasyon tamam
- Commit disiplini: planla → uygula → test → onayla → commit → push (her görev sonunda)

### 5.5 Komutlar

```bash
./kutuphane-baslat.sh            # 5800'ü başlat
./kutuphane-durdur.sh            # durdur
cd registry && node build-registry.mjs   # kayıt defteri (91 sn)
cd bilesen-kutuphanesi && npm test       # 15 birim test
python3 tests/kapsamli-kontrol.py        # 20 OK hedef
cdp open "http://localhost:5800/"        # tarayıcı doğrulama
```

---

## 6. 📌 Durum Özeti (son kontrol)

- **1995 bileşen** · heroui 527 · shadcn 387 · mantine 841 · mui 234 · özel 6
- **5 sekme** (Dashboard/Bileşenler/Layoutlar/Widgets/İkonlar) · **2 layout teması** (Tema 1-2)
- **1756 ikon · 23 kategori** · tags + favoriler sistemleri çalışır durumda
- tsc ✓ · test 15/15 ✓ · kapsamlı kontrol 20 OK · GitHub senkron
- Son id: **2084** · Son commit: `fcbe23c`
