# "+ Yeni Bileşen" Sihirbazı — İlerleme Notu

> Tarih: oturum sonu · Durum: ilk sürüm büyük ölçüde tamam, uç testler + kayıt onayı kaldı

## 🎯 Hedef
Stüdyo içinden yeni bileşen oluşturma sihirbazı: **2 sütunlu** — SOL terminal
(pi SDK köprüsüyle gerçek pi sohbeti + canlı araç akışı), SAĞ önizleme + alt
pencere/dosya seçenekleri. Akış: giriş modu → geliştir → test → kategori → kayıt
(iki aşamalı). Temiz çalışma: workbench izolasyonu, her çıkışta silme,
beforeunload uyarısı.

## ✅ Yapılanlar (bu oturumda)

### Sihirbaz (NewComponentWizard)
- Ayrı route: `#/yeni-bilesen` — App.tsx'te hash kontrolü + "+ Yeni Bileşen" butonu
- 3 giriş modu: **Kopyala-Düzenle** (textArea) · **LLM Tanım** (sohbet) · **Kütüphaneden** (kendi bileşenleri, seçim → pi'ye bağlam)
- SOL terminal: koyu tema, kullanıcı/pi/tool/sistem mesajları, SSE canlı akış, "pi çalışıyor…"
- SAĞ önizleme: `src/workbench/current/index.tsx` dinamik import (göreli yol + `?wb=` query cache-bypass) + HMR accept (full-reload engeli)
- ALT bar: bileşen adı (PascalCase) · kategori (19 + yeni) · alt kategori · hedef dosya önizleme · [Önizle][Test Et][Kaydet][Vazgeç] · **Bekleyen rozeti** (localStorage `wb-pending`)
- Kayıt iki aşamalı: (1) `/api/finalize-component` → ui/<kebab>.tsx + JSDoc @id/@category + barrel + samples · (2) "Kayıt defterine ekle" → rebuild-registry; "Sonra" → bekleyen listesi
- beforeunload uyarısı **yalnızca gerçek çalışma varken** (code/msgs/saved)

### Pi SDK köprüsü (vite.config.ts)
- `POST /api/pi` → SSE akışı: pi'yi **global npm'den** require (taşınabilir),
  `createAgentSession` (cwd=Component-studio, DefaultResourceLoader + sihirbaz
  sistem prompt'u, SessionManager.inMemory), tembel başlatma
- Event akışı: `text_delta` → sohbet · `tool_execution_start` → terminal araç satırı
- Workbench API: `/api/workbench/start|save|clear` · Test: `/api/test-component`
  (yasak import + named export kontrolü)

### Altyapı / temizlik
- `index.css`: kırık `tw-animate-css` + `shadcn/tailwind.css` import'ları kaldırıldı;
  **kendi animasyonlarımız** eklendi (`[data-entering]` giriş + shimmer) — saf React
- `cdp.js`: `dialog accept|dismiss` komutu (beforeunload popup'ını test edilebilir kıldı)
- Test artıkları temizlendi: 527 bileşen, tsc ✓, 15/15 test ✓, registry temiz

## ✅ Doğrulanan (tarayıcıda)
- Sihirbaz açılışı (#/yeni-bilesen), Kopyala modu: kod → Önizle → canlı render ✓
- **Pi üretimi: 2 kez başarılı** (BildirimKart — Bell ikonu + başlık; JSDoc @id/@category
  otomatik; workbench'e yazdı; önizleme canlı güncellendi) ✓
- Kayıt aşama 1 (dosya + barrel + samples) ✓ · aşama 2 (rebuild) ✓
- beforeunload popup'ı çıkıyor (kullanıcı gördü) ✓

## ⬜ Kalan Görevler (sıradaki oturum)
1. **Kayıt onayı UX** — aşama 2 "Sonra" akışı + Bekleyen rozetinin sol panelde görünürlüğü
   (şu an üst barda; sol panelde de istenebilir)
2. **Kütüphane modu tam test** — seçim → "Pi'ye Bağla" → birleştirme üretimi (kod yazıldı, test edilmedi)
3. **finalize id hesabı** — düzeltildi (max+1, registry 001-087 boş olduğu için "sıradaki boş" yanlıştı) — tekrar doğrula
4. **Bekleyen kayıt tamamlama** — "Sonra" seçilen kayıtların sonradan registry'ye eklenme akışı
5. **Kapsamlı kontrol** — `tests/kapsamli-kontrol.py` sihirbaz eklemeleriyle tekrar çalıştır
6. **commit sonrası** — wizard'ın sol panelde görünmemesi (registry'de yok ✓) doğrula

## 📁 İlgili dosyalar
- `bilesen-kutuphanesi/src/components/ui/new-component-wizard.tsx` — sihirbaz (2 sütun)
- `bilesen-kutuphanesi/vite.config.ts` — /api/pi (SSE) + workbench + finalize + test endpoint'leri
- `bilesen-kutuphanesi/src/App.tsx` — hash route + "+ Yeni Bileşen" + Bekleyen rozeti
- `bilesen-kutuphanesi/src/workbench/current/` — geçici çalışma alanı (gitignore'lu)
- `bilesen-kutuphanesi/src/index.css` — kendi animasyonlarımız (paket yok)
- `YENI-BILESEN-PLANI.md` — plan v3 (2 sütunlu karar)
