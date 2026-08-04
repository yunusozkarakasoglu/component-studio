<!-- component-studio:start -->
# Component Studio — Proje Kuralları

Bu klasör, **offline React bileşen kütüphanesi**dir (**saf React** — üçüncü parti UI bağımlılığı YOK).
pi burada çalışırken aşağıdakileri her zaman bilir. Kullanıcı "element ekle", "bileşen
düzenle", "kütüphaneyi başlat" gibi şeyler söylediğinde kurallara göre davran.

## 🚀 Temel Komutlar

```bash
./kutuphane-baslat.sh      # kütüphaneyi arka planda başlat → http://localhost:5800
./kutuphane-durdur.sh      # durdur
node yollar.mjs            # gerçek yolları basar (dinamik)
cd registry && node build-registry.mjs   # kayıt defterini tazele
cd bilesen-kutuphanesi && npm test       # findRootInfo birim testleri (15)
```

- Port **5800** sabittir (değiştirilmez).
- `bilesen-kutuphanesi` → Vite dev; `registry` → kayıt defteri üretici.

## 📂 Yapı

```
bilesen-kutuphanesi/
├── src/components/ui/*.tsx   ← BİLEŞENLER (her biri TEK dosya)
│   ├── icons.tsx             ← KENDİ ikon setimiz (1756 ikon, SVG gömülü, paket yok)
│   ├── icons-brand.tsx       ← marka ikonları (Google/GitHub/Apple — gömülü SVG)
│   ├── color.ts              ← ortak renk çekirdeği (bileşen değil)
│   └── index.tsx             ← barrel (export * from "./x")
├── src/App.tsx               ← stüdyo (sol panel: TREE VIEW — Kategori ▸ Alt Kategori ▸ Bileşen)
├── src/samples.tsx           ← galeri önizlemeleri (SAMPLES[id] = örnek JSX)
└── vite.config.ts            ← port 5800 + kaydetme/oluşturma API'leri
registry/
├── build-registry.mjs        ← registry.json + .db üretir (kategori + alt kategori)
└── data/registry.json        ← bileşen kayıtları (mutlak yollar, code, subcategory)
```

## 🧱 Bileşen Kuralları (her bileşen)

- Tek dosya, **named export**, interface dosya başında.
- Dosya başı JSDoc'ta **zorunlu etiketler**: `@id <numara>` + `@category <kategori>` + (gerekirse) `@subcategory <alt kategori>`.
  build-registry bu etiketlerden kaydı okur; numara = sıradaki boş.
- **Bağımlılık notu:** üst düzey bileşen çekirdeği import ediyorsa JSDoc'a `Gerektirir (ortak çekirdek): <dosya>` yaz.
- Yeni bileşen eklerken 4 adım:
  1. `src/components/ui/<kebab>.tsx` oluştur (kurallarla; JSX ise TSX'e çevir — class→className, style→object)
  2. `index.tsx`'e `export * from "./<kebab>"` ekle
  3. `samples.tsx`'e galeri önizlemesi ekle (`"<id>": <Bileşen />,`)
  4. `cd registry && node build-registry.mjs` (kayıt defterini tazele)
- Kategori/alt kategori tek kaynak: `Bileşen Listesi .txt` (`### Kategori`, `#### Alt Kategori`).
- Mevcut bileşeni güncelle: dosyayı düzenle → build-registry çalıştır.
  (Stüdyodaki 💾 Kaydet + 🔄 DB Yenile aynı işi yapar.)

## 🖥️ Stüdyo (5800)

Sol panel: **tree view** — kategoriler (boş olanlar dahil) + alt kategoriler + arama.
Galeri: önizlemeler. Bileşene tıkla → canlı önizleme + kod düzenleme +
**🔗 Bağımlılıklar** bilgi çubuğu + 📂 Path Kopyala + ✨ Prompt Oluştur.

## 🔄 Bileşeni kullanıcının projesine entegre etme

Kullanıcı dosya yolu / numara verince:
1. Kaynak dosyayı `read` ile oku; isimleri/export'ları değiştirme.
2. **Bağımlılık zincirini çöz** — import'lardan (`@/components/ui/x`) recursive takip;
   JSDoc "Gerektirir:" notuna bak. Bağımlılık dosyalarını da kopyala:
   - üst düzey bileşenler (date-picker vb.) → çekirdeği de al (calendar, color.ts...)
   - icons.tsx/icons-brand.tsx → her zaman gerekli (SVG gömülü)
   - `@/lib/utils` → `cn()` util'i (clsx + tailwind-merge)
3. `@/*` → `src/`; `cn()` sağla. Tailwind v4 + şablon tema değişkenleri varsay.
4. Kullanıcı görevini uygula, değişiklikleri açıkla.

## ⚠️ Saf React Standartları (bağımlılıksız)

- Bileşenler yalnızca react + tailwind kullanır; üçüncü parti UI paketi YASAK.
- İkonlar her zaman kendi kütüphanemizden: `import { Search } from "@/components/ui/icons"` (SVG gömülü).
- Çeviri (Heroui örneklerinden): `@heroui/react` + `@gravity-ui/icons` + CDN URL asla —
  saf React + kendi ikonlarımızla. GravityUI ikon adını setimizdeki eşdeğeriyle eşleştir
  (birebir ad → anlam → emin değilsen kullanıcıya sor).
- A11y attributeleri (aria-expanded/controls/current, role) zorunlu.
- JSDoc'ta üçüncü parti adı yok ("HeroUI örneği" gibi ibareler kaldırıldı).

Detaylı kılavuz: `component-kutuphane.md` (kullanıcı isterse "oku" der).
<!-- component-studio:end -->
