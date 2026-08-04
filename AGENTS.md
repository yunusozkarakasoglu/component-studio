<!-- component-studio:start -->
# Component Studio — Proje Kuralları

Bu klasör, **offline React bileşen kütüphanesi**dir (shadcn + React Aria Components).
pi burada çalışırken aşağıdakileri her zaman bilir. Kullanıcı "element ekle", "bileşen
düzenle", "kütüphaneyi başlat" gibi şeyler söylediğinde kurallara göre davran.

## 🚀 Temel Komutlar

```bash
./kutuphane-baslat.sh      # kütüphaneyi arka planda başlat → http://localhost:5800
./kutuphane-durdur.sh      # durdur
node yollar.mjs            # gerçek yolları basar (dinamik)
cd registry && node build-registry.mjs   # kayıt defterini tazele (yolları günceller)
```

- Port **5800** sabittir (değiştirilmez).
- `bilesen-kutuphanesi` → Vite dev; `registry` → kayıt defteri üretici.

## 📂 Yapı

```
bilesen-kutuphanesi/
├── src/components/ui/*.tsx   ← BİLEŞENLER (her biri TEK dosya)
├── src/layouts/*.tsx         ← sayfa şablonları
├── src/components/ui/index.tsx ← barrel (export * from "./x")
├── src/samples.tsx           ← galeri önizlemeleri
└── vite.config.ts            ← port 5800 + kaydetme/oluşturma API'leri
registry/
├── build-registry.mjs        ← registry.json + .db üretir (path'ler dinamik)
└── data/registry.json        ← bileşen kayıtları (mutlak yollar)
```

## 🧱 Bileşen Kuralları (her bileşen)

- Tek dosya, **named export**, interface dosya başında, bağımsız import.
- Dosya başı JSDoc'ta **zorunlu etiketler**: `@id <numara>` + `@category <kategori>`.
  (build-registry bu etiketlerden kaydı okur; numara = sıradaki boş, 001-087 envanter, 088+ özel.)
- Yeni bileşen eklerken 4 adım:
  1. `src/components/ui/<kebab>.tsx` oluştur (yukarıdaki kurallarla; JSX ise TSX'e çevir)
  2. `index.tsx`'e `export * from "./<kebab>"` ekle
  3. `samples.tsx`'e galeri önizlemesi ekle (`"<id>": <Bileşen />,`)
  4. `cd registry && node build-registry.mjs` (kayıt defterini tazele)
- Mevcut bileşeni güncelle: dosyayı düzenle → build-registry çalıştır.
  (Stüdyodaki 💾 Kaydet + 🔄 DB Yenile aynı işi yapar.)

## 🖥️ Stüdyo (5800)

Sol panel: kategoriler + arama. Galeri: önizlemeler. Bileşene tıkla → canlı önizleme +
kod düzenleme + 📂 Path Kopyala + ✨ Prompt Oluştur (kullanıcı LLM'e verir).

## 🔄 Bileşeni kullanıcının projesine entegre etme

Kullanıcı dosya yolu / numara verince:
1. `read` ile dosyayı oku; isimleri/export'ları değiştirme.
2. Bağımlılıklar: react-aria-components, class-variance-authority, lucide-react, tw-animate-css, sonner (eksikse kur).
3. `@/*` → `src/`; `cn()` util'i sağla. Tailwind v4 + shadcn tema varsay.
4. `<Rac>` ile sarmala (locale="tr-TR"). İkonlar: `@/components/ui/icons`.

## ⚠️ Saf React Standartları (bağımlılıksız)

- Bileşenler yalnızca react + tailwind kullanır; üçüncü parti UI paketi YASAK.
- İkonlar her zaman kendi kütüphanemizden: `import { Search } from "@/components/ui/icons"` (SVG gömülü).
- Heroui çevirisi: `@heroui/react` + `@gravity-ui/icons` + CDN URL asla — saf React + kendi ikonlarımızla.
- A11y attributeleri (aria-expanded/controls/current, role) zorunlu.

Detaylı kılavuz: `component-kutuphane.md` (kullanıcı isterse "oku" der).
<!-- component-studio:end -->
