# Component Kütüphanesi — LLM Kılavuzu

Kullanıcı "component-kutuphane.md oku" dediğinde bu dosyayı oku ve aşağıdakileri uygula.
Bu kılavuz, offline React bileşen kütüphanesinin nasıl açılacağını ve bileşenlerin nasıl
üretileceğini açıklar.

> **DİNAMİK YOL KURALI:** Bu dosya herhangi bir bilgisayara kopyalanabilir.
> **Kütüphane kökü = bu dosyanın bulunduğu klasör.** Aşağıdaki tüm yollar köke göre
> göreli olarak çözülür. Kesin yolları görmek için: `node yollar.mjs`
> (kök klasörde çalıştırılır — her bilgisayarda doğru çıktı verir).

---

## 1) Kütüphane nedir?

Kategorilere ayrılmış, aranabilir, düzenlenebilir, özelleştirilebilir, genişletilebilir bir
**offline React bileşen kütüphanesi** — **saf React** (üçüncü parti UI bağımlılığı YOK).

- Bileşen sayısı: 89+ (87 envanter + özel eklenenler)
- Sayfa şablonları: 10
- Her bileşen: tek dosya, named export, interface dosya başında, bağımsız import
- Her bileşenin dosya başında `@id` ve `@category` etiketleri vardır

## 2) Kütüphaneyi açma (kullanıcı istediğinde)

```bash
cd "<kök>/bilesen-kutuphanesi"
npm install        # ilk kurulumda bir kez (node_modules yoksa)
npm run dev
```

→ Tarayıcıda **http://localhost:5800** adresini aç. (Port sabittir, değişmez.)
Kullanıcı kütüphaneyi görür: sol panelde kategoriler + arama, galeride bileşenler.
Bileşene tıklayınca: canlı önizleme + kod düzenleme + 📂 Path Kopyala + ✨ Prompt Oluştur.

## 3) Klasör yapısı (köke göre)

```
<kök>/
├── component-kutuphane.md      ← bu kılavuz
├── yollar.mjs                  ← dinamik yol çözümleyici (node yollar.mjs)
├── Bileşen Listesi .txt        ← envanter (87 bileşen + numaralar + kategoriler)
├── bilesen-kutuphanesi/
│   ├── src/components/ui/*.tsx ← BİLEŞENLER (her biri tek dosya)
│   ├── src/layouts/*.tsx       ← SAYFA ŞABLONLARI
│   ├── src/samples.tsx         ← galeri önizlemeleri
│   ├── src/components/ui/index.tsx ← çatı (barrel) export
│   └── scripts/generate-missing.mjs
└── registry/
    ├── build-registry.mjs      ← veri tabanı üretici
    └── data/registry.json      ← bileşen + şablon kayıtları (path dahil)
```

## 4) Bileşen numaralandırma

- Numaralar benzersiz kimliklerdir (001-087 envanter, 088+ özel eklemeler)
- Sıralama alfabetiktir (001 Accordion → 087 Tooltip); kategoriler etiket grubudur
- Yeni bileşen → sıradaki boş numara (ör. 090)

## 5) Görev A — Kullanıcının projesine bileşen entegre etme

Kullanıcı bir dosya yolu verdiğinde veya "008 Button'ı projeme ekle" dediğinde:

1. **Dosyayı oku** (`read` ile) — bileşeni olduğu gibi kullan, isimleri/export'ları değiştirme.
2. **Bağımlılık gerekmez** — bileşen saf React'tir (yalnızca react + tailwind + `@/lib/utils` içinde `cn()`).
   İkonlar kendi setimizden: `@/components/ui/icons` (SVG gömülü, paket bağımlılığı yok).
3. **Import düzeni:** `@/*` alias'ı projenin `src/` klasörüne işaret etmeli;
   `@/lib/utils` içinde `cn()` olmalı (yoksa ekle).
4. **Tema:** Tailwind v4 + shadcn tema değişkenleri (`index.css`) hazır olduğunu varsay;
   yoksa shadcn init kurulumunu yap.
5. **Bağımsız çalışır** — sağlayıcı/context sarmalayıcı gerekmez; kopyala → kullan.
6. **İkonlar:** `import { Search } from "@/components/ui/icons"` (lucide-react).
7. Kullanıcının görevine göre bileşeni ilgili sayfaya/dosyaya ekle; değişiklikleri açıkla.

## 6) Görev B — Kütüphaneye yeni bileşen ekleme

Kullanıcı bir bileşen (HTML/JSX/TSX) getirdiğinde:

1. Dosyayı `<kök>/bilesen-kutuphanesi/src/components/ui/<kebab-ad>.tsx` olarak oluştur:
   - Dosya başına JSDoc: `@id <sıradaki boş numara>` + `@category <mevcut veya yeni kategori>`
   - React + TypeScript, named export, interface dosya başında
   - JSX ise TSX'e çevir (class→className, style→object, self-closing...)
2. `src/components/ui/index.tsx` barrel'ine `export * from "./<kebab-ad>"` ekle.
3. `src/samples.tsx` içine galeri önizlemesi ekle (`"<id>": <Bileşen />,`).
4. Kayıt defterini tazele:
   ```bash
   cd "<kök>/registry"
   npm install        # ilk kurulumda bir kez
   node build-registry.mjs
   ```
5. Kütüphane açıksa kullanıcı yenileyince görür (HMR).

## 7) Görev C — Mevcut bileşeni güncelleme

- Kullanıcı kütüphane penceresinden bileşeni açıp kod üzerinde düzenleme yapabilir
  (💾 Kaydet → dosyaya yazar, HMR anında uygular, 🔄 DB Yenile → kayıt defteri tazelenir).
- LLM olarak dosyayı doğrudan düzenleyebilirsin: `src/components/ui/<ad>.tsx`
- Sonrasında `registry/` içinde `node build-registry.mjs` çalıştır.

## 8) Koşullu köklü bileşen ekleme (checklist)

Yeni bir `isLoading ? <Skeleton /> : <Button>…` gibi **koşullu köklü** bileşen eklerken:

1. Bileşeni kütüphaneye ekle (yukarıdaki Görev B).
2. Parser'ı doğrula:
   ```bash
   cd "<kök>/bilesen-kutuphanesi" && npm test
   ```
   `findRootInfo` bu bileşende `isConditional=true` ve doğru dal sayısını (örn. `branches.length=2`)
   vermeli. Görmüyorsan `src/lib/findRootInfo.ts`'i geliştir ve vakayı `tests/findRootInfo.test.ts`'e ekle.
3. Meta kaydı ekle (`src/components-meta/index.ts`):
   ```ts
   "088": { id: "088", preferredTarget: 1, note: "Ana içerik ikinci dalda (<Button>)" }
   ```
   `preferredTarget` = style'ın varsayılan gömüleceği dal indeksi. Meta yoksa `0` (ilk dal) kullanılır.
4. Stüdyoda bileşeni aç — ② paneline **🎯 Style hedefi** seçici gelmeli; seçilen dala style gömülür.
5. Vakayı `tests/findRootInfo.test.ts`'e ekle (ternary/&&/||/nested).

Not: `findRootInfo` string bazlıdır — nested ternary'de yalnızca ilk + ana üçüncü dal bulunur
(orta dallar elle eklenmelidir).

## 8.5) İkon kuralı (ZORUNLU — tüm eklemeler/düzenlemeler)

**Kendi ikon kütüphanemiz:** `src/components/ui/icons.tsx` — 1756 ikon + alias'lar,
lucide-react'ten (MIT) **üretilmiş**, tüm SVG path'leri dosyaya gömülü. Hiçbir dış
pakete referans vermez. Yeniden üretim: `cd bilesen-kutuphanesi && node scripts/generate-icons.mjs`

- İkonlar her zaman kendi kütüphanemizden bulunur ve import edilir:
  `import { Search } from "@/components/ui/icons"`
- Doğrudan `lucide-react`'ten import **yasaktır** (barrel atlanamaz).
- **Yasak dış ikon kaynakları** (Heroui gibi örneklerden çeviri yaparken):
  - `@gravity-ui/icons` gibi üçüncü parti ikon paketleri → kendi setimizden eşdeğer.
  - CDN/URL ikonları (`iconUrl`, `<img src="https://…">`) → asla kullanma.

**LLM doğru ikonu bulmalı (eşleştirme sırası):**
1. **Birebir ad eşleştirmesi** — `CreditCard → CreditCard`, `ShoppingBag → ShoppingBag` (kendi setimizde aynı adla var mı kontrol et).
2. **Anlam eşleştirmesi** — ad birebir yoksa aynı anlamı veren ikon (örn. `BellSmall → Bell`, `Receipt → Receipt`/`FileText`).
3. **Emin değilsen kullanıcıya sor** — keyfi/rastgele ikon koymak YASAK; görsel anlam değişmemeli.
4. Karşılığı gerçekten yoksa: en yakın eşdeğeri kullan ve raporda bildir (kullanıcı onayıyla).

**Yeni ikon gerektiğinde:** kendi setimizde var mı kontrol et (yoksa `node scripts/generate-icons.mjs` ile taze üret — lucide'da varsa setimize girer); lucide'da da yoksa özel SVG bileşenini `icons.tsx`'e ekle.


## 8.6) Ortak çekirdek bileşenler (bağımlılık kuralı)

Bazı bileşenler "ortak çekirdek"tir — üst düzey bileşenler onları import eder.
Kopyalarken çekirdeği de kopyalamanız gerekir (JSDoc'ta "Gerektirir:" notu yazar).

| Çekirdek | Kullanan üst düzey bileşenler |
|---|---|
| `calendar.tsx` | date-picker, date-range-picker + calendar-* örnekleri |
| `color.ts` + color-area/slider/field/swatch | color-picker |
| `checkbox.tsx` | checkbox-group |
| `button.tsx` | button-* örnekleri |
| `avatar.tsx` | avatar-* örnekleri |
| `icons.tsx` / `icons-brand.tsx` | hepsi (SVG gömülü, paket yok) |

Kural: ÖRNEK bileşenler ana bileşeni import edebilir (kullanım gösterimi). ANA
bileşenler çekirdeği import eder ve bağımlılığı JSDoc'ta belirtir. Kod tekrarı
yapılmaz — çekirdek tek yerdedir, bug tek yerde düzeltilir.
## 9) Önemli notlar (saf React standartları)

- Bileşenler **yalnızca** react + tailwind kullanır — üçüncü parti UI paketi YASAK.
- İkonlar `@/components/ui/icons`'ten import edilir (bkz. 8.5 İkon kuralı).
- `cn()` yardımcısı `@/lib/utils` içindedir (clsx + tailwind-merge).
- A11y: butonlar `aria-expanded`/`aria-controls`, navigasyon `aria-current`, paneller `role`/`aria-labelledby` taşır.

---

Kullanıcı çalışırken kütüphaneyi **http://localhost:5800** üzerinden görür; kendi
uygulamasında çalışırken gerektiğinde kütüphane penceresinden **path/prompt kopyalayıp**
LLM'e verir. Bu kılavuzdaki kurallar o entegrasyonu güvenilir kılar.
