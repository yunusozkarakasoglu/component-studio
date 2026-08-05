# "+ Yeni Bileşen" Ekleme Akışı — Plan v3 (2 sütunlu sihirbaz)

> Karar: 2 sütunlu düzen — SOL: terminal (pi sohbet + canlı akış) · SAĞ: önizleme
> + alt alan (pencere/dosya seçenekleri). Ayrı route. Pi SDK köprüsü (terminalde gerçek pi).

## Yerleşim (2 sütun)

```
┌────────────────────────┬───────────────────────────┐
│  SOL — TERMİNAL        │  SAĞ — ÖNİZLEME           │
│  pi sohbet             │  canlı render (workbench) │
│  (konuşma balonları)   │                           │
│  pi'nin canlı akışı:   ├───────────────────────────┤
│  araç çağrıları,       │  ALT — PENCERE & DOSYA    │
│  komut çıktıları       │  Bileşen adı · kategori    │
│  dosya yazımları       │  Hedef dosya (önizleme)   │
│                        │  [Test Et] [Doğrula]      │
│                        │  [Kaydet] [Vazgeç]        │
└────────────────────────┴───────────────────────────┘
```

## Kararlar (benim belirlediklerim)

- **Kayıt konumu:** `src/components/ui/<kebab>.tsx` (tek dosya) — otomatik JSDoc @id/@category
- **Test Et:** tsc (workbench) + yasak import/ikon/slug kontrolü (kapsamlı kontrol kuralları) → rapor
- **Doğrula:** render kontrolü + bağımlılık zinciri dosyaları var mı + envanter tutarlılığı
- **Kayıt:** iki aşama — önce dosya yazılır, sonra "Registry'ye ekle?" onayı; "Sonra" → Bekleyen rozeti
- **Terminal:** pi SDK köprüsü (vite /api/pi + SSE), cwd=Component-studio, tembel başlatma

---
**ESKİ PLAN (v2) — referans:**

> Amaç: **Adımlı sihirbaz** — mevcut stüdyo arayüzünden **ayrı, farklı bir ekran**.
> Kullanıcı her adımda seçimlerle ilerler. Temiz çalışma ortamı prensibi.
> Kararlar: kütüphane seçimi = kendi bileşenlerimiz · kayıt = iki aşamalı (onaylı).

---

## 0) Sihirbaz Arayüzü (ayrı ekran)

- Stüdyonun üstünde/ayrı route'ta tam ekran sihirbaz (galeri görünümünden bağımsız)
- Üstte **adım göstergesi**: `1 Mod → 2 Giriş → 3 Geliştir → 4 Test → 5 Kategori → 6 Kayıt`
- Her adımda yalnızca ilgili seçimler görünür; "İleri / Geri / Vazgeç" düğmeleri
- Mevcut stüdyo (galeri/detay) bu akış sırasında arka planda değişmez

## 1) Adım 1 — Giriş Modu (kart seçimi)

| Kart | Açıklama |
|---|---|
| **Kopyala-Düzenle** | Kendi kodunuzu yapıştırın, kod alanında düzenleyin |
| **LLM Tanım** | Doğal dil tanım verin, yapay zeka kodu üretsin |
| **Kütüphaneden Çağır** | Mevcut bileşenleri seçin, yapay zeka birleştirsin |

## 2) Adım 2 — Giriş (moda göre)

- **Kopyala**: textarea + "Koda Aktar"
- **LLM Tanım**: tanım textarea + (varsayılan) "Prompt Oluştur" → kendi LLM'inizde üretin
  → "Koda Uygula" ile yapıştırın · *(opsiyonel: ayarlardan API anahtarı girilirse canlı sohbet)*
- **Kütüphane**: arama + çoklu seçim paneli (**kendi Select/ListBox bileşenlerimizle**)
  → seçilen bileşenlerin kodu + bağımlılık zinciri LLM bağlamına eklenir

## 3) Adım 3 — Geliştir (3 bölmeli çalışma alanı)

```
┌───────────────┬───────────────────┬──────────────────┐
│  KOD ALANI    │   ÖNİZLEME        │  LLM SOHBET      │
│  (editör)     │   (canlı render)  │  tanım + yanıt   │
│               │                   │  [Koda Uygula]   │
└───────────────┴───────────────────┴──────────────────┘
            Alt bar: [Önizle] [Test Et →] [Vazgeç]
```

- "Önizle" → workbench'e yazar → vite dev render → önizleme paneli
- Döngü: kod düzenle ↔ önizle ↔ LLM ("Koda Uygula")

## 4) Adım 4 — Test Et (otomatik kontrol)

- tsc (workbench dosyası) · yasak import/ikon/adlandırma (kapsamlı kontrol kuralları)
- render kontrolü (önizleme hatasız mı) · slug kuralı · bağımlılık dosyaları var mı
- Sonuç: ✓ geçti / ✗ hatalar listesi → düzelt veya "Yine de İleri"

## 5) Adım 5 — Kategori Seç

- Mevcut **19 kategoriden** dropdown + alt kategori (opsiyonel) + **"Yeni kategori"** alanı
- Önizleme: bileşen adı otomatik önerilir (düzenlenebilir)

## 6) Adım 6 — Kayıt (iki aşamalı, onaylı)

**Aşama 1 — Özet & Onay:**
- Özet: isim · id (sıradaki boş) · kategori/alt kategori · bağımlılık zinciri · hedef dosya
- [Kaydet] → `workbench/.../index.tsx` → `src/components/ui/<kebab>.tsx`
  (JSDoc `@id`/`@category`/`@subcategory` otomatik; gerekliyse deps zinciriyle)

**Aşama 2 — Registry Onayı:**
- "Dosya kaydedildi. Kayıt defterine ekle?" → [Evet] barrel + samples + envanter +
  build-registry otomatik · [Sonra] dosya durur, kayıt defteri sonra eklenebilir
- Her iki durumda da workbench oturumu silinir (temiz)

## 7) Temiz Çalışma Ortamı (her zaman)

- Geçici dosyalar **yalnızca** `src/workbench/<oturum>/` — başka yere yazılmaz
- Yazma disiplini: UI yalnızca workbench + kayıt hedefi (`src/components/ui/`) yazar;
  barrel/samples/envanter/registry yalnızca kayıt onayında otomatik
- **Kaydet / Vazgeç / pencere kapat** → workbench her durumda silinir (artık dosya yok)
- Kaydetmeden pencere kapatma → `beforeunload` uyarısı + onay

## 8) LLM Bağlantısı (varsayılan + opsiyonel)

- **Varsayılan:** Stüdyo prompt üretir (ANA DOSYA + BAĞIMLILIK DOSYALARI tam yollar,
  mevcut `buildPrompt` altyapısı) → kullanıcı kendi LLM'inde üretir → "Koda Uygula"
- **Opsiyonel:** Ayarlar bölümünden API endpoint + anahtar girilirse sohbet alanı canlı
  çağrı yapar (sonraki sürüm — plan kapsamında mimari hazır, UI ayrı)

## 9) Test & Doğrulama

- Kayıt sonrası `tests/kapsamli-kontrol.py` çalıştırılabilir (bütünlük)
- Yeni bileşen: tsc + render + envanter tutarlılığı + slug (mevcut kurallar)

---

## Açık noktalar (implementasyon öncesi son kontrol)
- [ ] Sihirbaz ekranı: ayrı route mu, tam ekran modal mı? (öneri: tam ekran modal — stüdyo state'i korunur)
- [ ] Önizleme: workbench import'u vite dev'de otomatik mi, "Önizle" butonuyla mı? (öneri: butonla)
- [ ] Kayıt aşama 2 "Sonra" seçilirse: bekleyen kayıtlar nerede listelenir? (öneri: sol panelde "Bekleyen" rozeti)
