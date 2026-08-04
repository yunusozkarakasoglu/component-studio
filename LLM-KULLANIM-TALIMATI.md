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

## Örnek zincir (274 DateRangePickerControlled)

```
date-range-picker-controlled.tsx
  → date-range-picker.tsx
      → calendar.tsx
      → icons.tsx (kendi set)
  → @/lib/utils → cn()
```

Hepsini kopyala → `@/` + `cn()` hazırsa bileşen çalışır.
