# Bileşen Kütüphanesi + Katalog Arayüzü

Vite + React + TypeScript + Tailwind v4 + shadcn (React Aria Components) tabanlı
**87 bileşenlik** kütüphane ve **aranabilir katalog** arayüzü.

## Çalıştırma

```bash
npm install
npm run dev       # katalog arayüzü → http://localhost:5173
npm run build     # üretim derlemesi
```

## Yapı

```
src/
├── components/ui/    ← 87 envanter bileşeni (tek dosya, bağımsız import)
│   ├── index.tsx     ← çatı (import { Button } from "@/components/ui")
│   └── icons.tsx     ← lucide ikonlar (import { Search } from "@/components/ui/icons")
├── layouts/          ← 10 sayfa şablonu (layouts.json manifest)
└── App.tsx           ← katalog: arama + tablo + kod modalı
public/registry.json  ← veri tabanı çıktısı (katalog bunu okur)
scripts/generate-missing.mjs ← shadcn'de olmayan bileşenleri RAC üzerine üretir
```

## Veri tabanını güncelleme

Bileşen/şablon değişikliğinden sonra:

```bash
cd ../registry && node build-registry.mjs
```

(registry.json'u hem `registry/data/` hem `bilesen-kutuphanesi/public/`'a yazar.)

## Önemli RAC notları

- **TagGroup**: `<Tag>` doğrudan değil `<TagList>` içinde kullanılır
- Fieldset, ProgressCircle, Dropdown, ScrollShadow, SwitchGroup RAC'te yoktur —
  bağımsız implementasyon (dosya içinde açıklama var)
- Uygulama `<Rac>` sağlayıcısı ile sarmalanmalıdır
