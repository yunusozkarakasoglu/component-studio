# 🗺️ Component-Studio Yol Haritası & Durum

> Bu dosya compact sonrası tek kaynaktır. Detaylı adım planları: `PLAN-MANTINE.md`, `PLAN-SHADCN.md`, `PLAN-ILERLEME.md`.

## 🎯 Hedef (vizyon)

Modern frontend arayüz dünyasının atomic design mantığıyla kategorize edilmiş
**offline saf React bileşen kütüphanesi** — her bileşen tek dosya, bağımsız,
yalnızca `react + tailwind` (üçüncü parti UI paketi YASAK; ikonlar kendi 1756'lık setimizden).

```
Elements (Atoms) → Components (Molecules) → Layouts (Organisms) → Templates → Pages
Design system (tokens/tema) · State & Data
```

## 🏗️ Mimari

```
Component-studio/
├── bilesen-kutuphanesi/            ← Vite dev uygulaması (port 5800)
│   └── src/components/ui/*.tsx     ← BİLEŞENLER (her biri TEK dosya)
│       ├── icons.tsx               ← 1756 ikon (kendi setimiz)
│       └── index.tsx               ← barrel (export * from "./x")
├── registry/                       ← build-registry.mjs → registry.json (+ .db)
├── tests/kapsamli-kontrol.py       ← 20 OK · 2 uyarı · 0 HATA hedefi
└── PLAN-*.md, Roadmap.md           ← plan/hafıza dokümanları
```

**Kaynak kategorileri (4):** `heroui` · `mantine` · `shadcn` · `ozel` — JSDoc `@source` etiketi, registry `source` alanı, üst barda filtre butonları (Tümü/HeroUI/Mantine/shadcn/Özel).

**İsimlendirme:** Heroui kendi adıyla (Button) · shadcn `Shadcn` öneki · Mantine `Mt` öneki · sihirbaz/şablon `ozel`.

**JSDoc zorunlu:** `@id` (sıradaki boş) + `@category` + `@subcategory` + `@source`.

**Kaynak klasörler (Masaüstü):**
- `heroui-components-setup/` — 66 md (tamamlandı, entegre)
- `shadcn-components-setup/` — 63 md (tamamlandı, entegre)
- `mantine-components-setup/` — `docs/` (134 mdx) + `demos/` (1266 tsx), sparse clone'dan

## ✅ Tamamlanan

### Heroui — 56 aile · 527 bileşen (PLAN-ILERLEME.md)
Tüm elementler saf React'e çevrildi (Form, Seçim, Overlay, Navigasyon, Veri, Yükleme, Genel…).

### shadcn/ui — 7 adım · ~390 bileşen (PLAN-SHADCN.md)
Adım 1 Form (84) → Adım 2 Seçim (42) → Adım 3 Buton+Kart (31) → Adım 4 Overlay (52) →
Adım 5 Navigasyon (29) → Adım 6 Akordeon/Uyarı/Takvim (63) → Adım 7 Veri/Yükleme/Genel (90).
Üçüncü parti yerine yazılan çekirdekler: Calendar (react-day-picker), Combobox (base-ui), Command (cmdk), Resizable (react-resizable-panels).

### Mantine — Adım 0-6 · 382 bileşen (PLAN-MANTINE.md)
- Adım 0 ✅ Kaynak altyapı (sparse clone + PLAN + @source)
- Adım 1 ✅ Layout (1004-1057): Box/Group/Stack/Center/Container/Paper/Space/Flex/Divider/AspectRatio/SimpleGrid/Grid
- Adım 2 ✅ Butonlar (1058-1113): Button/ActionIcon/CloseButton/CopyButton/FileButton/Burger/Anchor/Menu/Menubar
- Adım 3 ✅ Form (1114-1210): Input/TextInput/Textarea/NumberInput/PasswordInput/JsonInput/MaskInput/NativeSelect/Fieldset
- Adım 4 ✅ Seçim (1211-1298): Checkbox/Radio/Switch/Chip/SegmentedControl/Slider/RangeSlider/Rating/PinInput/ColorInput/PillsInput
- Adım 5 ✅ Combobox (1299-1340): Select/MultiSelect/Autocomplete/TagsInput/Combobox/TreeSelect
- Adım 6 ✅ Overlay (1341-1385): Modal/Drawer/Dialog/Tooltip/Popover/HoverCard/Affix/LoadingOverlay/Notification

### Stüdyo arayüzü (commit'li)
- Global header + Dashboard/Layoutlar/Bileşenler sekmeleri + breadcrumb
- Bileşenler: üst filtreler (arama + kategori + alt kategori + kaynak + görünüm) **sabit (sticky)** + ▦Kart/☰Tablo + ✕Temizle
- +Yeni sihirbazı (pi SDK köprüsü: `/api/pi` SSE + workbench izolasyonu + kayıt finalize)
- cdp.js: localhost:5800 hedef önceliği + `open` komutu

## 📊 Güncel Durum (son kontrol)

- **1296 bileşen** · heroui 527 · shadcn 387 · **mantine 382** · 0 çift kayıt
- tsc ✓ · npm test 15/15 ✓ · `tests/kapsamli-kontrol.py` → **20 OK · 2 uyarı · 0 HATA**
- Son commit: `153638b` (Mantine Adım 6) — çalışma dizini temiz

## ⬜ Bekleyen

### Mantine (PLAN-MANTINE.md — sıradaki)
- **Adım 7** Navigasyon: Tabs, Pagination, Breadcrumbs, NavLink, Stepper, Timeline, FloatingIndicator
- **Adım 8** Veri: Table, Card, Avatar, DataList, EmptyState, List, Text, Title, ThemeIcon, Pill, Image
- **Adım 9** Geri Bildirim: Loader, Progress, RingProgress, Skeleton, Indicator, Alert, Code, Kbd, Blockquote, Spoiler, Collapse
- **Adım 10** Takvim: Calendar, DateInput, DatePicker, TimeInput, MonthPicker (16 dates element)
- **Adım 11** Özel: AppShell, ScrollArea, Splitter, Tree, Marquee, FloatingWindow, TableOfContents

### Stüdyo (SIHIRBAZ-NOT.md)
- Layout/Sayfa sihirbazı ("hazırlanıyor" alert → gerçek akış, Tema 1/2 layout tasarımları)
- Bekleyen kayıt tamamlama akışı (sol panel görünürlüğü — sol panel kaldırıldı, güncellenecek)
- Kütüphane modu tam test (Pi'ye Bağla)

### Mantine sonrası
- Mantine kalan adımlar bitince kütüphane 1500+ bileşene ulaşır → Layout/Template üretimi

## ⚠️ Önemli Tuzaklar (compact sonrası hatırlatma)

1. **Envanter kırpma tuzağı**: `Bileşen Listesi .txt` güncellerken "**Toplam:**" satırını `rfind` ile BULUP öncesine ekle — `find` ile ilk eşleşme (eski toplam artığı) yanlış yeri keser. Bir kez 260 kayıt silindi (git checkout ile kurtarıldı).
2. **Ad-dosya uyuşmazlığı**: envanterdeki bileşen adı ≠ dosya adı olursa çift kayıt üretir (617, 889, 895, 999, 1212 örnekleri). Envanter adı = dosya adı olmalı.
3. **JSDoc id sıralaması**: çekirdek + örnek id'leri envanter/samples ile birebir aynı sırada olmalı (Adım 6'da hizalandı: çekirdekler 1341-1349, örnekler 1350+).
4. **samples props'suz render**: render-prop çekirdekleri (MtCopyButton, MtFileButton) ve zorunlu prop'lu çekirdekler (MtModal opened) samples'ta props'suz render edildiği için propları opsiyonel yap.
5. **HTML prop çakışması**: `size`/`title`/`onSelect` gibi proplar InputHTMLAttributes/HTMLAttributes ile çakışır → `Omit<..., "size">` gerekir.
6. **CDP sekme kayması**: cdp.js 5800 önceliklidir ama sekme kapalıysa başka sekmeye (Drive vb.) bağlanır → `cdp open "http://localhost:5800/"` ile geri dön.
7. **findRootInfo**: fragment kök (`<>`) bulunamaz → `display:contents` span sarmalayıcı kullan (MtCopyButton örneği).
8. **Offline ilkesi**: uzak görsel/iframe (YouTube, Google Maps, avatar.vercel.sh) → gradient placeholder.

## 🔄 Akış (her element)

1. Kaynak oku (`docs/<kat>/<x>.mdx` + `demos/<kat>/<X>/*.tsx`)
2. Saf React çevir (önek + kendi icons + Tailwind)
3. Dosya oluştur + barrel + samples + envanter (tuzağa dikkat!)
4. `cd registry && node build-registry.mjs` → tsc → npm test → kapsamlı kontrol
5. Tarayıcı doğrula (Bileşenler → kaynak filtresi) → **commit** (her adım sonunda)
