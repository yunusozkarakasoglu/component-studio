# 🧩 Component Studio — Saf React Bileşen Kütüphanesi & Tasarım Stüdyosu

> **Ne işe yarar?** Modern frontend arayüzleri için **offline, bağımlılıksız React bileşen kütüphanesi**
> + bunları yönetip önizlediğin bir **tasarım stüdyosu**. Üçüncü parti UI paketi yok —
> her bileşen tek dosya, kendi ikon setimizle, `react + tailwind` ile yazılmıştır.

---

## 🎯 Vizyon — Kademeli Arayüz Üretimi

Atomic design mantığıyla, en küçük parçadan en büyük sayfaya:

```
Elements (Atom) → Components (Molekül) → Layouts (Organizm) → Templates → Pages
  Buton/Input         Kart/Form          Sayfa iskeleti        +içerik     tam sayfa
```

Kütüphane **Elements + Components + Layouts** katmanlarını doldurur; sen bunlardan
sayfa/tema/maket üretirsin.

---

## ✨ Özellikler

- **1995+ bileşen** — 4 kaynaktan saf React'e çevrilmiş:
  | Kaynak | Sayı | Örnekler |
  |---|---|---|
  | HeroUI | 527 | Modal, Tabs, Table, Toolbar, NumberField… |
  | shadcn/ui | 387 | Dialog, DropdownMenu, Combobox, Sidebar… |
  | Mantine | 841 | MtButton, MtCard, MtCalendar, MtStepper, MtTree… |
  | Material UI | 234 | MuiButton, MuiDialog, MuiSlider, MuiGrid… |
  | Özel | 6 | CascadingSelect, Miller2, HesapMakinesi, SaatWidget, RichTextEditor, TaskFilterButton |
- **Saf React + Tailwind v4** — üçüncü parti UI paketi **YOK**
- **Kendi ikon seti** — 1756 ikon (`@/components/ui/icons`), SVG gömülü, uzak bağımlılık yok
- **2 Layout Teması** — NovaPanel tasarım diliyle hazır sayfa iskeletleri (Tema 1-2)
- **Tasarım Stüdyosu** — 5 sekme: Dashboard · Bileşenler · Layoutlar · Widgets · İkonlar
  (canlı önizleme, kod düzenleme, kaydetme, kayıt yenileme, etiketler, favoriler)

---

## 🔄 Nasıl Çalışır? (Akış)

### 1) Bileşen üretim akışı (kaynak → kütüphane)
```
Kaynak (HeroUI/shadcn/Mantine dosyaları)
   ↓  saf React'e çevir (TSX, kendi ikonlar, Tailwind)
src/components/ui/<bileşen>.tsx   (tek dosya, named export)
   ↓  JSDoc etiketleri: @id + @category + @subcategory + @source
Barrel (index.tsx) + Galeri (samples) + Envanter ("Bileşen Listesi .txt")
   ↓
registry/build-registry.mjs → registry.json   (stüdyonun veri kaynağı)
   ↓
Stüdyoda görünür → tıkla → önizle/düzenle → kaydet
```

### 2) Layout tema akışı (tasarım → tema)
```
Sen 5174'te (veya herhangi bir yerde) sayfa tasarlarsın
   ↓
Kaynağı oku (App.jsx / HTML / styles.css)
   ↓  anla → TSX'e çevir (ikonlar setimizden, CSS scoped)
src/layouts/tema<N>.tsx + tema<N>.css
   ↓
Layoutlar sekmesi → tema kutusu (minyatür önizleme)
   ↓  kutuya tıkla → tam ekran → geri (buton / tarayıcı geri / Esc)
```

### 3) Senin projene entegrasyon akışı
```
1. src/components/ui/<bileşen>.tsx dosyasını projenize kopyala
2. Bağımlılıkları çöz:
   - @/components/ui/icons → ikon seti (gerekirse birlikte kopyala)
   - @/lib/utils → cn() (clsx + tailwind-merge)
   - @/* yol eşlemesi → src/
3. Tailwind v4 kurulu olmalı → kullan
```

---

## 🚀 Kurulum & Kullanım

```bash
git clone https://github.com/yunusozkarakasoglu/component-studio.git
cd component-studio
npm install
npm run dev
```

Stüdyo → **http://localhost:5800**

### 📊 Stüdyo sekmeleri

| Sekme | Ne işe yarar |
|---|---|
| **📊 Dashboard** | Kütüphane özeti, bileşen sayısı, kısayollar |
| **🧩 Bileşenler** | 1995 bileşeni ara / filtrele (kaynak: Tümü/HeroUI/Mantine/shadcn/MUI/Özel · kategori · alt kategori) · ▦Kart/☰Tablo görünüm · tıkla → canlı önizleme + kod düzenleme → 💾 Kaydet · etiketler · ⭐ favoriler |
| **📐 Layoutlar** | Tema 1-2 canlı minyatür kutular → tıkla → tam ekran → geri |
| **🧰 Widgets** | Widget kategorisindeki bileşenler (ör. SaatWidget canlı saat) |
| **🧩 İkonlar** | 1756 ikon · 23 kategori (İletişim/Kişiler/…) · arama · tıkla → kopyala → yanıp sönen bildirim |
| **+ Yeni** | Bileşen sihirbazı (pi'ye bağlı üretim) |

---

## 📦 Bileşen Örneği

```tsx
import { MtButton } from "@/components/ui/mt-button"
import { MtCard } from "@/components/ui/mt-card"

function Demo() {
  return (
    <MtCard withBorder padding="lg">
      <MtButton onClick={() => alert("Merhaba!")}>Başla</MtButton>
    </MtCard>
  )
}
```

## 📐 Layout Temaları (NovaPanel tasarım dili)

| Tema | Yapı |
|---|---|
| **Tema 1 — Klasik** | Header + açılır/kapanır panel + filtreli veri tablosu |
| **Tema 2 — Sekmeli** | Footer üstü sekmeler — her sekme **kendi state'ine** sahip |

*(Tema 3-8 aynı sistemin kopyalarıydı — silindi; yeni tema istenirse 5174 tasarımıyla eklenir, `GOREV-AKISI-LAYOUT.md`)*

---

## 🗂️ Mimari

```
src/
├── components/ui/   ← BİLEŞENLER (her biri TEK dosya)
│   ├── icons.tsx    ← 1756 ikon (kendi setimiz, SVG gömülü)
│   ├── icons-brand.tsx ← marka ikonları (Google/GitHub/Apple)
│   ├── index.tsx    ← barrel (export * from "./x")
│   ├── mt-*.tsx     ← Mantine · shadcn-*.tsx ← shadcn · mui-*.tsx ← MUI
│   └── *.tsx        ← HeroUI · özel/araç bileşenleri (source: ozel)
├── layouts/         ← Layout temaları (tema1-2.tsx + tema1-2.css, scoped)
├── App.tsx          ← Stüdyo (5 sekme)
├── icons-view.tsx   ← İkonlar sekmesi (kategori + arama + kopyalama)
├── widgets-view.tsx ← Widgets sekmesi
├── layouts-view.tsx ← Layoutlar sekmesi (tema kutuları)
├── samples.tsx      ← Galeri önizlemeleri (SAMPLES[id] = JSX)
└── lib/             ← cn() yardımcıları + useVirtualGrid + iconNames/iconCategories
```

## 🧪 Testler & Doğrulama

```bash
npm test          # findRootInfo birim testleri (15)
npm run build     # tsc -b && vite build (tip kontrolü + derleme)
```

Kalite hedefi: **tsc 0 hata · test 15/15 · 20 kontrol OK · 0 çift kayıt**.

## 📄 Lisans

MIT — kopyala, kullan, uyarla. Bileşenler tek dosya olduğu için kendi projene taşıman serbest.
