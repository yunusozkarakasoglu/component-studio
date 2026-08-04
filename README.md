# Component Studio — Offline React Bileşen Kütüphanesi

Kategorilere ayrılmış, aranabilir, düzenlenebilir, özelleştirilebilir, genişletilebilir
**offline React bileşen kütüphanesi** — **saf React** (üçüncü parti UI bağımlılığı YOK).

> 📍 **Dinamik yapı:** Bu klasör herhangi bir bilgisayara kopyalanabilir.
> Tüm yollar bu klasöre göre çözülür. Gerçek yollar: `node yollar.mjs`

## 🚀 İlk kurulum (bir kez)

```bash
cd bilesen-kutuphanesi && npm install
cd ../registry && npm install
cd ../registry && node build-registry.mjs   # kayıt defterini üretir
```

## 🖥️ Çalıştırma

```bash
cd bilesen-kutuphanesi && npm run dev   # → http://localhost:5800
```

## 📦 Kütüphane

- **187 bileşen · 18 kategori · alt kategori ağacı** (sol panelde `Kategori ▸ Alt Kategori ▸ Bileşen`)
- **Bağımlılıklar:** yalnızca `react`, `react-dom`, `clsx`, `tailwind-merge` (dev: vite, tailwind, typescript)
- **Kendi ikon seti:** `@/components/ui/icons` — 1756 ikon, SVG gömülü (paket bağımlılığı yok)
- Marka ikonları: `@/components/ui/icons-brand` (Google/GitHub/Apple — gömülü SVG)

## 📂 Yapı

```
Component-studio/
├── component-kutuphane.md   ← LLM kılavuzu (entegrasyon + bileşen ekleme kuralları)
├── yollar.mjs               ← dinamik yol çözümleyici
├── Bileşen Listesi .txt     ← envanter kaynağı (kategori + alt kategori + bileşenler)
├── bilesen-kutuphanesi/     ← stüdyo + bileşenler (port 5800)
│   ├── src/components/ui/*.tsx  ← bileşenler (tek dosya, @id + @category + @subcategory)
│   ├── src/App.tsx              ← stüdyo arayüzü (tree view sol panel)
│   └── scripts/generate-icons.mjs ← ikon seti üretici
└── registry/                ← kayıt defteri üretici (build-registry.mjs)
```

## 🔄 İş akışı

1. **Stüdyoyu aç:** `./kutuphane-baslat.sh` → http://localhost:5800
2. **Sol panel:** kategori ağacı — boş kategoriler dahil görünür; alt kategoriler ayrı başlıklarda
3. **Bileşene tıkla:** düzenleme ekranı — ① orijinal kod + önizleme, ② özelleştirme (stil → tam kod), **🔗 Bağımlılıklar** bilgi çubuğu
4. **📂 Path Kopyala / ✨ Prompt Oluştur:** prompt, **bağımlılık dosyalarının tam yollarını** içerir — LLM'е yapıştırın, LLM hepsini kopyalar/uyarlar
5. **💾 Kaydet** → HMR · **🔄 DB Yenile** → registry güncellenir

## 🧱 Ortak çekirdek bileşenler

Üst düzey bileşenler çekirdeği import eder — kopyalarken çekirdeği de alın (JSDoc'ta "Gerektirir:" notu):

| Çekirdek | Kullananlar |
|---|---|
| `calendar.tsx` | date-picker, date-range-picker, calendar-* örnekleri |
| `color.ts` + color-* | color-picker |
| `checkbox.tsx` | checkbox-group |
| `button.tsx` | button-* örnekleri |
| `icons.tsx` / `icons-brand.tsx` | tümü (gömülü SVG) |

## 🧪 Test

```bash
cd bilesen-kutuphanesi && npm test    # findRootInfo birim testleri (15)
```

## 📌 Notlar

- Port **5800** sabittir (vite.config.ts)
- MCP gerekmez — bileşenler dosya yoluyla LLM'e verilir
- Kategori/alt kategori tek kaynak: `Bileşen Listesi .txt` (`### Kategori`, `#### Alt Kategori`)
