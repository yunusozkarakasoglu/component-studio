# Performans Optimizasyon Planı

> Durum: **Adım 1 uygulandı** (sanal liste). Adım 2-4 production öncesi denetlenecek.

## 📊 İlk teşhis ölçümleri (CDP, 1755 bileşen)

| Metrik | Önce | Hedef | Durum |
|---|---|---|---|
| DOM node (Bileşenler sekmesi) | 32.371 | ~1.200 | ✅ **1.195** (Adım 1) |
| Render kart | 1.754 | ~60 | ✅ **60** (Adım 1) |
| İlk yüklemede script (dev) | 11.5 MB / 250 modül | azalacak | ⏳ Adım 2/4 |
| Arama render (tuş vuruşu) | 175ms | <50ms | ⏳ Adım 3 |
| Kart memoization | yok | React.memo | ⏳ Adım 3 |

---

## ✅ ADIM 1 — Sanal liste (UYGULANDI)

**Commit:** `c812a64`

**Dosya:** `src/lib/useVirtualGrid.ts` (yeni, bağımlılıksız)

**Sonuç (CDP doğrulama):**
- DOM node: 32.371 → **1.195** (%96 azalma)
- render kart: 1.754 → **60** (görünür + 4 satır tampon)
- scroll alt/üst: dinamik kart yükleme ✓
- arama/filtre: çalışır ✓
- hook dinamik: `itemCount=filtered.length` → yeni bileşen eklenince otomatik

**Notlar:**
- Yalnızca Bileşenler sekmesinde. Layoutlar sekmesi (8 tema) küçük, gerek yok.
- Kart yüksekliği sabit 145px (başlık 28 + preview 96 + etiket 21).
- `main` element scroll container olarak kullanılıyor; sticky filtre bar `main` içinde sabit.

---

## ⏳ ADIM 2 — samples.tsx lazy loading (BEKLEMEDE — production öncesi)

**Sorun:** `import * as U from "@/components/ui"` tüm 1759 bileşeni eager yüklüyor.
samples.tsx 1787 yerde `U.Bilesen` kullanıyor, hepsi oluşturulmuş JSX element.

**Seçenekler (karar bekliyor):**

1. **Tam lazy refactor** (yüksek risk)
   - 1754 sample'ı her biri ayrı dosyaya böl
   - `React.lazy(() => import("./samples/246"))` her biri
   - En yüksek first-load kazancı
   - Risk: 1754 dosya, 1787 referans, dev bakım zorlaşır
   - `React.lazy` oluşturulmuş element için değil component için çalışır → sample'ları component wrapper'a çevirmek gerekir

2. **Kısmi lazy** (orta yol)
   - Sadece ağır/bağımsız bileşenleri (calendar, table, tree, charts) lazy yap
   - Basit olanları eager bırak
   - Düşük risk, orta kazanç

3. **Atla** — Adım 4 (Vite chunking) bunu çözer

---

## ⏳ ADIM 3 — Kart memoization + arama debounce (BEKLEMEDE)

**Sorun:** Her filter değişiminde tüm kart elementleri yeniden üretiliyor (memoization yok).

**Çözüm:**
- Kart component'i `React.memo` ile sar (props: `rec`, `sample`)
- SAMPLES lookup'ı memoize et
- Arama input'una 200ms debounce ekle (tuş vuruşu gecikmesi kaybolsun)

**Risk:** Düşük. Adım 1 sonrası zaten 60 kart render olduğu için etki sınırlı.

---

## ⏳ ADIM 4 — Vite build optimizasyonu (BEKLEMEDE — production öncesi)

**Sorun:** Dev modunda 250 ayrı modül isteği. Production build'de Vite tree-shake yapar ama chunking ayarlanmamış.

**Çözüm:**
- `vite.config.ts`'e `build.rollupOptions.output.manualChunks` ekle
  - `icons` ayrı chunk (büyük SVG seti)
  - `ui` ayrı chunk (1759 bileşen)
  - `vendor` (react, react-dom)
- Production build dene, bundle analizi yap
- `vite-plugin-visualizer` ile boyut raporu (opsiyonel)

**Beklenti:** İlk yüklemede JS boyutu ciddi düşer, cache hit artar.

---

## Denetim noktası (production öncesi)

Şunları tekrar ölç ve gerekirse Adım 2-4'ü uygula:
1. `performance.getEntriesByType("navigation")` — TTFB, DOMContentLoaded
2. `performance.getEntriesByType("resource")` — toplam transfer, en büyük chunk'lar
3. Bileşenler sekmesi açılış süresi (CDP timing)
4. Arama tuş vuruşu gecikmesi

**Öncelik sırası (production öncesi):** Adım 4 > Adım 3 > Adım 2
