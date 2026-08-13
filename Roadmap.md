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

### Mantine — TAMAMLANDI · 841 bileşen (PLAN-MANTINE.md)
Adım 1 Layout (1004-1057) → Adım 2 Butonlar (1058-1113) → Adım 3 Form (1114-1210) →
Adım 4 Seçim (1211-1298) → Adım 5 Combobox (1299-1340) → Adım 6 Overlay (1341-1385) →
Adım 7 Navigasyon (1386-1425: Tabs/Pagination/Breadcrumbs/NavLink/Stepper/Timeline/FloatingIndicator) →
Adım 8 Veri (1426-1502: Table/Card/Avatar/DataList/EmptyState/List/Text/Title/ThemeIcon/Pill/Image) →
Adım 9 Geri Bildirim (1503-1586: Loader/Progress/RingProgress/Skeleton/Indicator/Alert/Code/Kbd/Highlight/Spoiler/Collapse) →
Adım 10 Takvim (1587-1764: 16 dates element, saf Intl) → Adım 11 Özel (1765-1844: AppShell/ScrollArea/Splitter/Tree/Marquee/FloatingWindow/TableOfContents)

### Stüdyo arayüzü (commit'li)
- Global header + Dashboard/Layoutlar/Bileşenler sekmeleri + breadcrumb
- Bileşenler: üst filtreler (arama + kategori + alt kategori + kaynak + görünüm) **sabit (sticky)** + ▦Kart/☰Tablo + ✕Temizle
- +Yeni sihirbazı (pi SDK köprüsü: `/api/pi` SSE + workbench izolasyonu + kayıt finalize)
- cdp.js: localhost:5800 hedef önceliği + `open` komutu

### Layout Tema Sistemi — Tema 1-8 TAMAMLANDI (GOREV-AKISI-LAYOUT.md)
- **Kaynak:** kullanıcının `Masaüstü/Layouts` (5174, NovaPanel React şablonu: App.jsx + styles.css)
- **Akış:** oku → anla → `tema<N>.tsx` + `tema<N>.css` (scoped `.tema<N>-root`) → `layouts-view.tsx` kutusu → tsc/test/tarayıcı → commit
- **Tema seti (NovaPanel tasarım dili — mavi palet, açık kenarlıklar):**
  - Tema 1 Klasik (NovaPanel, filtreli tablo) · Tema 2 Sekmeli (footer üstü TabBar, her sekme kendi state'i)
  - Tema 3 Dokümantasyon (sol konular + içerik + sağ TOC akordeon) · Tema 4 Chat (konuşmalar + mesaj)
  - Tema 5 Kanban (3 kolon + kart taşı/ekle) · Tema 6 E-ticaret (kategori + ürün + sepet)
  - Tema 7 Mail/Inbox (3 sütun + okundu/yıldız) · Tema 8 Form Sihirbazı (4 adımlı onboarding)
- **Layoutlar sekmesi:** tema seçim kutuları (minyatür thumbnail) → tıkla → tam ekran (hash `#/layoutlar/tema<N>`) → geri (buton/tarayıcı geri/Esc)
- **Plan:** `PLAN-LAYOUT-TEMALARI.md` (Tema 3-8 ✅) · akış: `GOREV-AKISI-LAYOUT.md`
- **Not:** senkron kaynaktan (styles.css) yapılınca Tema 1 kenarlık özelleştirmesi (--border #eef2f8) tekrar uygulanmalı

### GitHub yayını (commit `d3e93be` + `d8731b6`)
- Repo: `yunusozkarakasoglu/component-studio` (PUBLIC) · `gh auth` tamam
- Kullanım: `npm install yunusozkarakasoglu/component-studio` → bileşen dosya yoluyla kopyala

### Stüdyo hata düzeltmeleri (commit `7ac0b05`)
- **Boş beyaz kutu hatası**: `MtFloatingWindow` (#1771) gibi `position:absolute` kullanan bileşenler,
  kart kapsayıcısında `position:relative` olmadığı için viewport köşesine (top:24,left:24) kaçıyordu →
  sol üstte boş beyaz kutu beliriyordu. Kart kapsayıcısı + preview alanına `relative` eklendi;
  artık tüm absolute/fixed elementler (popover/tooltip/modal/floating) kart içine hapsoluyor.

### Performans optimizasyonu (commit `c812a64` + `2f841ff`)
- **Adım 1 — Sanal liste UYGULANDI**: `src/lib/useVirtualGrid.ts` (bağımlılıksız saf React hook).
  Bileşenler sekmesindeki 1754 kartın tamamı tek seferde render edilince DOM 32.371 node'a çıkıyordu.
  Artık yalnızca görünür alan (+ 4 satır tampon) render ediliyor:
  **DOM 32.371 → 1.195 (%96 azalma)** · render kart 1.754 → 60 · scroll'da dinamik yükleme.
  Hook dinamik (`itemCount=filtered.length`) → yeni bileşen eklenince otomatik çalışır.
- **Adım 2-4 beklemede** (`PERFORMANS-OPTIMIZASYON-PLANI.md`): samples.tsx lazy loading,
  React.memo + debounce, Vite manualChunks — production öncesi denetlenecek. Öncelik: Adım 4 > 3 > 2.

### Material UI — TAMAMLANDI · 234 bileşen (PLAN-MATERIALUI.md)
- Adım 1-9: Genel/Butonlar/Alert/Form/Seçim/Combobox/Overlay/Navigasyon/Veri/Yükleme + ek varyantlar
- Kaynak: `Masaüstü/MaterialUI` (silindi — entegrasyon tamam) · id 1845-2078

### Özel bileşenler (source: ozel)
- CascadingSelect (2079) — koşullu İl→İlçe seçim · Miller2 (2080) — dizel motor parça Miller Columns + arama
- HesapMakinesi (2081) — 3 modlu araç (hesap/zaman/döviz) · SaatWidget (2082) — canlı saat

### Widgets sekmesi (commit `8898f4f`)
- Üst navigasyona "🧰 Widgets" eklendi · widgets-view.tsx (kategori bazlı liste + arama)
- İlk widget: SaatWidget (2082, Widgets kategorisi)

### Etiketler (tags) + Favoriler (commit `d4521e2` + `079a6cc`)
- Tags: JSDoc @tags → registry tags · detay sayfası düzenleme + çip · tablo sütunu · arama
- Kayıt sonrası anında merge (rebuild 91sn beklemez) — `mergeSaved` tags+code günceller
- Favoriler: ⭐ sekmesi + detayda yıldız butonu + localStorage kalıcı

### Layout temaları — Tema 3-8 SİLİNDİ (commit `a1d8abf`)
- Kalan: Tema 1 (NovaPanel), Tema 2 (Sekmeli) — kopyalar temizlendi

### Kaynak klasörler silindi
- `Masaüstü/{shadcn,heroui,mantine,Layouts,MaterialUI}` — tümü entegre edildi, ~65MB temizlendi

## 📊 Güncel Durum (son kontrol)

- **1993 bileşen** · heroui 527 · shadcn 387 · **mantine 841** · **mui 234** · özel 4 · 0 çift kayıt
- **2 layout teması** (src/layouts/ — Tema 1, Tema 2) — Tema 3-8 silindi (kopya)
- **Widgets sekmesi** — ayrı görünüm (widgets-view.tsx) + SaatWidget (2082)
- **GitHub:** `yunusozkarakasoglu/component-studio` PUBLIC
- **Performans:** Bileşenler sekmesi sanal liste (DOM %96 azaldı)
- **Etiketler (tags):** detay sayfası + tablo sütunu + arama · kayıt sonrası anında merge
- **Favoriler:** ⭐ sekmesi + yıldız (localStorage)
- **Kaynak klasörler silindi:** Masaüstü/{shadcn,heroui,mantine,Layouts,MaterialUI} — entegrasyon tamam
- tsc ✓ · npm test 15/15 ✓ · `tests/kapsamli-kontrol.py` → **20 OK · 2 uyarı · 0 HATA**
- Son commit: `a1d8abf` (Tema 3-8 silindi) — çalışma dizini temiz

## ⬜ Bekleyen

### Performans optimizasyonu (PERFORMANS-OPTIMIZASYON-PLANI.md) — production öncesi
- **Adım 4** (öncelik) — Vite manualChunks: `icons`/`ui`/`vendor` ayrı chunk + production build analizi
- **Adım 3** — Kart `React.memo` + arama 200ms debounce
- **Adım 2** — samples.tsx lazy loading (3 seçenekli: tam lazy / kısmi lazy / atla — risk analizi plan dosyasında)

### Layout temaları
- Kullanıcı istediğinde yeni tema (Tema 3+) — kaynak: kullanıcının 5174 tasarımı → `GOREV-AKISI-LAYOUT.md` akışı
  (not: Masaüstü/Layouts silindi — kullanıcı yeni tasarım üretirse kaynak yeniden oluşur)

### Stüdyo (SIHIRBAZ-NOT.md)
- Bekleyen kayıt tamamlama akışı (sol panel görünürlüğü — sol panel kaldırıldı, güncellenecek)
- Kütüphane modu tam test (Pi'ye Bağla)

## ⚠️ Önemli Tuzaklar (compact sonrası hatırlatma)

1. **Envanter kırpma tuzağı**: `Bileşen Listesi .txt` güncellerken "**Toplam:**" satırını `rfind` ile BULUP öncesine ekle — `find` ile ilk eşleşme (eski toplam artığı) yanlış yeri keser. Bir kez 260 kayıt silindi (git checkout ile kurtarıldı).
2. **Ad-dosya uyuşmazlığı**: envanterdeki bileşen adı ≠ dosya adı olursa çift kayıt üretir (617, 889, 895, 999, 1212 örnekleri). Envanter adı = dosya adı olmalı.
3. **JSDoc id sıralaması**: çekirdek + örnek id'leri envanter/samples ile birebir aynı sırada olmalı (Adım 6'da hizalandı: çekirdekler 1341-1349, örnekler 1350+).
4. **samples props'suz render**: render-prop çekirdekleri (MtCopyButton, MtFileButton) ve zorunlu prop'lu çekirdekler (MtModal opened) samples'ta props'suz render edildiği için propları opsiyonel yap.
5. **HTML prop çakışması**: `size`/`title`/`onSelect` gibi proplar InputHTMLAttributes/HTMLAttributes ile çakışır → `Omit<..., "size">` gerekir.
6. **CDP sekme kayması**: cdp.js 5800 önceliklidir ama sekme kapalıysa başka sekmeye (Drive vb.) bağlanır → `cdp open "http://localhost:5800/"` ile geri dön.
7. **findRootInfo**: fragment kök (`<>`) bulunamaz → `display:contents` span sarmalayıcı kullan (MtCopyButton örneği).
8. **Offline ilkesi**: uzak görsel/iframe (YouTube, Google Maps, avatar.vercel.sh) → gradient placeholder.
9. **`.ts` içinde JSX OLMAZ**: JSX içeren dosyalar `.tsx` olmalı (builder/schema dersleri).
10. **Tema senkronu**: `styles.css`'ten yeniden kopyalama, tema CSS'ine yapılan özelleştirmeleri (kenarlık açma, override'lar) ezer → GOREV-AKISI'ndeki yeniden uygulama listesine bak.
11. **Tema CSS global kurallar**: `:root/*/body/[data-theme]` stüdyoyu bozar → scoped (`.tema<N>-root`) şart; `grep -E "^(body|html|:root|\*|#root)"` kontrolü YOK olmalı.
12. **Fixed elemanlar (tema)**: `.g-header/.app__body/.g-footer` position:fixed → thumbnail'de static, tam ekranda offset (48/104px) gerekir; yoksa toggle/buton görünmez.
13. **Vite yeni tema dosyalarında çökebilir**: `src/layouts/tema<N>.*` eklenince 5800 düşebilir → `./kutuphane-baslat.sh` ile yeniden başlat.
14. **CDP 5174 kayması**: kullanıcının NovaPanel'i 5174'te — CDP oraya kayarsa `cdp eval "location.href='http://localhost:5800/'"`.
15. **Programatik tıklama**: `el.click()` (native) React onClick'i tetikler; `dispatchEvent(MouseEvent)` bazen çalışmaz. `cdp click` gerçek mouse tıklamasıdır.

## 🔄 Akış (her element)

1. Kaynak oku (`docs/<kat>/<x>.mdx` + `demos/<kat>/<X>/*.tsx`)
2. Saf React çevir (önek + kendi icons + Tailwind)
3. Dosya oluştur + barrel + samples + envanter (tuzağa dikkat!)
4. `cd registry && node build-registry.mjs` → tsc → npm test → kapsamlı kontrol
5. Tarayıcı doğrula (Bileşenler → kaynak filtresi) → **commit** (her adım sonunda)
