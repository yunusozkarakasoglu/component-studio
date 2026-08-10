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

- **1755+ bileşen** — 3 kaynaktan saf React'e çevrilmiş:
  | Kaynak | Sayı | Örnekler |
  |---|---|---|
  | HeroUI | 527 | Modal, Tabs, Table, Toolbar, NumberField… |
  | shadcn/ui | 387 | Dialog, DropdownMenu, Combobox, Sidebar… |
  | Mantine | 841 | MtButton, MtCard, MtCalendar, MtStepper, MtTree… |
- **Saf React + Tailwind v4** — üçüncü parti UI paketi **YOK**
- **Kendi ikon seti** — 1756 ikon (`@/components/ui/icons`), SVG gömülü, uzak bağımlılık yok
- **8 Layout Teması** — NovaPanel tasarım diliyle hazır sayfa iskeletleri
- **Tasarım Stüdyosu** — canlı önizleme, kod düzenleme, kaydetme, kayıt yenileme

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
| **🧩 Bileşenler** | 1755 bileşeni ara / filtrele (kaynak: Tümü/HeroUI/Mantine/shadcn/Özel · kategori · alt kategori) · ▦Kart / ☰Tablo görünüm · tıkla → canlı önizleme + kod düzenleme → 💾 Kaydet |
| **📐 Layoutlar** | Tema 1-8 canlı minyatür kutular → tıkla → tam ekran → geri |
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
| **Tema 3 — Dokümantasyon** | Sol konular + içerik (kod blokları) + sağ TOC akordeon |
| **Tema 4 — Chat** | Konuşma listesi + mesaj paneli + yazma çubuğu |
| **Tema 5 — Kanban** | 3 kolon + kart taşıma/ekleme |
| **Tema 6 — E-ticaret** | Kategori + ürün grid + sepet |
| **Tema 7 — Mail/Inbox** | Klasörler + liste + okuma (okundu/yıldız) |
| **Tema 8 — Form Sihirbazı** | 4 adımlı onboarding (stepper + form) |

---

## 🗂️ Mimari

```
src/
├── components/ui/   ← BİLEŞENLER (her biri TEK dosya)
│   ├── icons.tsx    ← 1756 ikon (kendi setimiz, SVG gömülü)
│   ├── icons-brand.tsx ← marka ikonları (Google/GitHub/Apple)
│   ├── index.tsx    ← barrel (export * from "./x")
│   ├── mt-*.tsx     ← Mantine · shadcn-*.tsx ← shadcn · *.tsx ← HeroUI
│   └── ozel-*.tsx   ← kullanıcı/özel bileşenler
├── layouts/         ← Layout temaları (tema1-8.tsx + tema1-8.css, scoped)
├── App.tsx          ← Stüdyo (Dashboard/Bileşenler/Layoutlar)
├── samples.tsx      ← Galeri önizlemeleri (SAMPLES[id] = JSX)
└── lib/             ← cn() yardımcıları
```

## 🧪 Testler & Doğrulama

```bash
npm test          # findRootInfo birim testleri (15)
npm run build     # tsc -b && vite build (tip kontrolü + derleme)
```

Kalite hedefi: **tsc 0 hata · test 15/15 · 20 kontrol OK · 0 çift kayıt**.

## 📄 Lisans

MIT — kopyala, kullan, uyarla. Bileşenler tek dosya olduğu için kendi projene taşıman serbest.
