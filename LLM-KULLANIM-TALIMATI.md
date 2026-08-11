# Component Studio Kütüphanesi — LLM Entegrasyon Talimatı

> Bu dosyayı, bileşen kütüphanesinden (Component Studio) bileşen entegre edecek LLM'in
> context'ine / proje köküne koyun. Kullanıcı bir bileşen istediğinde aşağıdaki akışı uygula.

## Kütüphane konumu

```
<COMPONENT-STUDIO>/bilesen-kutuphanesi/src/components/ui/
```
Kayıt defteri: `<COMPONENT-STUDIO>/registry/data/registry.json`
(her bileşenin `id`, `name`, `category`, `subcategory`, `file`, `code`, `path` alanları var)

## Kullanıcı "274 takvim ekle" / "008 butonu X alanına entegre et" dediğinde

1. **Kaydı bul:** `registry.json`'da `id` ile ara → `code` ve `path`'i al.
2. **Bağımlılık zincirini çöz** (recursive):
   - Kaynak kodun `import ... from "@/components/ui/<x>"` ifadelerini tara
   - Her `<x>` için registry'den dosyayı bul, onun import'larını da tara (zincir)
   - JSDoc'taki `Gerektirir (ortak çekirdek): <dosya>` notuna bak
   - `icons.tsx` / `icons-brand.tsx` → her bileşen için gerekli (SVG gömülü)
   - `@/lib/utils` → `cn()` util'i (clsx + tailwind-merge)
3. **Hepsini kopyala:** bileşen + bağımlılık dosyalarını projeye taşı —
   **isimleri ve export'ları DEĞİŞTİRME** (aynı dosya adları, aynı import yolları).
4. **Altyapıyı kur:**
   - `@/` import alias'ı → projenin `src/` klasörüne
   - `@/lib/utils` → `cn()` (clsx + tailwind-merge)
   - Tailwind v4 + şablon tema değişkenleri (`index.css`) hazır olduğunu varsay
5. **Entegre et:** kullanıcının belirttiği alana/sayfaya ekle, değişiklikleri açıkla.

## Zorunlu kurallar

- Bileşenler **yalnızca react + tailwind** kullanır — üçüncü parti UI paketi KURMA.
- İkonlar her zaman kendi setimizden: `import { X } from "@/components/ui/icons"` — asla lucide-react.
- Dosya isimleri, export adları, `@id`/`@category` etiketleri değiştirilmez.

## Yeni bileşen ÜRETME isteğinde (kullanıcı "yeni bileşen yap/üret" derse)

**KAYIT YAPMA!** Aşağıdaki akışı izle:

1. Bileşeni üret → **sadece** `src/workbench/current/index.tsx`'e yaz (named export, saf React).
2. Kullanıcıya kısaca açıkla (ne yaptın, props, nasıl test edilir).
3. **Şunlara DOKUNMA:** `src/components/ui/` dosya ekleme · `index.tsx` barrel · `samples.tsx` ·
   `Bileşen Listesi .txt` (envanter) · `registry/` (build-registry) · kategori/alt kategori seçimi · `git commit`.
4. Kullanıcı stüdyoda **önizleyip test ettikten sonra** ad/kategori/alt kategori girer ve
   **"Kaydet" butonuna basar** — kayıt işlemini stüdyo yapar.
5. Detaylı kurallar: kökteki `YENI-BILESEN-SIHIRBAZI-TALIMATI.md` dosyasını oku.

> Not: Bu, "mevcut bileşeni entegre et" akışından FARKLIDIR. Üretim = workbench'e yaz,
> entegrasyon = kayıtlı bileşeni kullanıcının projesine taşı.

## Örnek zincir (274 DateRangePickerControlled)

```
date-range-picker-controlled.tsx
  → date-range-picker.tsx
      → calendar.tsx
      → icons.tsx (kendi set)
  → @/lib/utils → cn()
```

Hepsini kopyala → `@/` + `cn()` hazırsa bileşen çalışır.
