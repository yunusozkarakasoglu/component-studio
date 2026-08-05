# Kapsamlı Kontrol Planı — Bileşen Kütüphanesi (527 bileşen · 20 kategori)

> Amaç: Kütüphanenin bütünlüğünü statik + derleme + çalışma zamanı olarak doğrulamak.
> Araç: `tests/kapsamli-kontrol.py` (Python 3, bağımlılıksız) + CDP tarayıcı doğrulaması.
> Çalıştırma: `python3 tests/kapsamli-kontrol.py` (sırayla, her grup raporlanır).

## Grup 1 — Envanter & Registry Tutarlılığı
- [x] G1.1 `registry.json` geçerli JSON; `components[]` + `categories[]` mevcut
- [x] G1.2 Bileşen `id`'leri benzersiz; sayısal ve pozitif
- [x] G1.3 `id`'ler 001'den başlayıp kesintisiz mi (boşluk var mı) → rapor (uyarı)
- [x] G1.4 Her kaydın `name/category/file/path` alanları dolu; `path` dosya sisteminde VAR
- [x] G1.5 Envanter (`Bileşen Listesi .txt`) ile registry eşleşmesi: txt'deki her `id Ad` kaydının registry'de karşılığı var; tersi de doğru (registry'de txt'de olmayan kayıt → uyarı)
- [x] G1.6 Kategori adları: txt `### ` başlıkları ↔ registry `categories[]` ↔ bileşen `category` değerleri tutarlı

## Grup 2 — Kaynak Dosya Doğrulaması
- [x] G2.1 Her `.tsx` bileşen dosyasında `@id` + `@category` zorunlu; `@subcategory` varsa registry ile aynı
- [x] G2.2 `@id` değeri registry ile eşleşiyor; JSDoc ilk satırı (açıklama) registry `description` ile aynı
- [x] G2.3 **Yasak bağımlılık taraması**: `@heroui/react`, `@gravity-ui`, `lucide-react`, `@iconify`, `react-aria-components`, `class-variance-authority`, `sonner`, `tw-animate-css` import'u → HATA
- [x] G2.4 **Yasak URL/ikon taraması**: `https://` görsel kaynağı (CDN), `iconUrl`, `img.heroui` → HATA (kendi placeholder'larımız hariç)
- [x] G2.5 **İkon kuralı**: `import {...} from "@/components/ui/icons"` dışında ikon kaynağı yok; kullanılan her ikon adı `icons.tsx`'te tanımlı
- [x] G2.6 `@/` alias import'larının hedefi dosya sisteminde VAR (kırık import yok)

## Grup 3 — Barrel / Samples / Registry Senkronu
- [x] G3.1 `index.tsx`'teki her `export * from "./x"` için `x.tsx` dosyası VAR
- [x] G3.2 `ui/` klasöründeki her bileşen dosyası barrel'de export edilmiş (eksik → uyarı)
- [x] G3.3 `samples.tsx`'teki her `"<id>": <Ad />` için registry'de id + `U.Ad` export'u VAR
- [x] G3.4 Registry'deki her bileşen için samples önizlemesi VAR (eksik → uyarı)

## Grup 4 — Slug & Dosya Adı Kuralları
- [x] G4.1 Bileşen adından türetilen slug (build-registry kuralı: TextArea→textarea, OTP ayrımı) ↔ gerçek dosya adı eşleşiyor (çift kayıt riski yok)
- [x] G4.2 Aynı `file` değerine sahip birden çok kayıt yok

## Grup 5 — Derleme & Birim Testleri
- [x] G5.1 `npx tsc --noEmit` hatasız çalışıyor (TypeScript derleme)
- [x] G5.2 `npm test` (findRootInfo) tümü geçiyor

## Grup 6 — Çalışma Zamanı (CDP tarayıcı)
- [x] G6.1 Sayfa yükleniyor; kayıt defteri geliyor (sol panel kategori sayısı = registry categories)
- [x] G6.2 Konsol hataları YOK (cdp logs — React hataları/uyarıları)
- [x] G6.3 Her kategori açılıp önizlemeler render ediliyor (her kategoride bileşen sayısı eşleşmesi)
- [x] G6.4 Örnek etkileşimler: buton/tab/select/checkbox/drawer aç-kapa (spot kontrol)
- [x] G6.5 Network hataları YOK (404/kırık kaynak)

## Grup 7 — Bağımlılık Zinciri (entegrasyon kalitesi)
- [x] G7.1 `resolveDeps` benzetimi: örnek üst düzey bileşen (DateRangePickerControlled vb.) için import zinciri çözülüyor; her bağımlılık dosyası VAR
- [x] G7.2 Prompt üretiminde ANA DOSYA + BAĞIMLILIK DOSYALARI tam yolları mevcut (App.tsx kuralı)
- [x] G7.3 Ortak çekirdek notları: calendar/color/checkbox/button kullanan dosyalarda `Gerektirir` notu veya import zinciri tutarlı

## Grup 8 — Rapor
- [x] G8.1 Sonuç özeti: geçen/uyarı/hata sayıları, başarısız olanların listesi
- [x] G8.2 Exit code: hata varsa 1 (CI uyumu)

---
**Yürütme sırası:** Grup 1-4 (statik, hızlı) → Grup 5 (derleme) → Grup 6 (tarayıcı, CDP) → Grup 7 → Grup 8 (rapor). Her grup sonucu ayrı raporlanır; hata varsa durulur ve düzeltilir (kullanıcıya bildirilir), sonra devam.
