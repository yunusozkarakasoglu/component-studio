<!-- component-studio:start -->
# Component Studio — AGENTS.md (LLM Görev Rehberi)

> **Bu dosya bir göreve başlamadan önce İLK okunan dosyadır.**
> Rolü: görevi tanı → doğru talimat dosyasına **yönlendir** → evrensel kuralları hatırlat.
> Detaylı anlatım burada DEĞİL, referans verilen dosyalardadır.

**Proje:** Offline, saf React bileşen kütüphanesi + tasarım stüdyosu (port 5800).
Üçüncü parti UI paketi YOK — her bileşen tek dosya, kendi ikon setimizle.

---

## 🧭 GÖREV → REFERANS (bir görev gelince buraya bak)

| # | Görev (kullanıcı ne dedi) | Talimat dosyası → akış |
|---|---|---|
| 1 | **Yeni bileşen ekle** ("şu HTML/JSX/TSX'i kütüphaneye ekle") | `Mimari.md` §3 (bileşen kuralları) + §4.1 (kayıt akışı) → 4 adım: dosya → barrel → samples → envanter → build-registry → test → commit |
| 2 | **Bileşeni kullanıcının projesine entegre et** ("274 takvimi X alanına ekle") | `Mimari.md` §4.2 — bağımlılık zincirini çöz (çekirdek + icons + cn) |
| 3 | **Sihirbazda yeni bileşen üret** ("yeni bileşen yap/üret" — stüdyo + Yeni) | **`YENI-BILESEN-SIHIRBAZI-TALIMATI.md`** — workbench'e YAZ, KAYIT YAPMA! (barrel/samples/envanter/registry/commit YASAK) |
| 4 | **Layout tema ekle** (kullanıcının 5174 tasarımını tema yap) | `Mimari.md` §6 — oku→anla→`tema<N>.tsx+.css` (scoped) → layouts-view → doğrula → commit |
| 5 | **Widget ekle** ("saat widget'ı yap") | `Mimari.md` §3 + Widgets kuralı: `@category Widgets` — **envanterde `### Widgets` EN SONA** |
| 6 | **Mevcut bileşeni güncelle** | `Mimari.md` §3 + §4.3 — dosyayı düzenle → build-registry |
| 7 | **İkon setini güncelle / yeni ikon** | `Mimari.md` §7 (ikon sistemi) + `generate-icons.mjs` + iconNames/iconCategories yeniden üret |
| 8 | **Performans iyileştirme** | `Roadmap.md` Sprint 6 (Adım 4 > 3 > 2) |
| 9 | **Test/doğrulama** | `Mimari.md` §8 — tsc → npm test → kapsamli-kontrol.py → CDP |
| 10 | **Dokümantasyon/hafıza güncelle** | `Tasks.md` + `Roadmap.md` + `project_info.md` |
| 11 | **Yeni görev/öneri** (belirsiz istek) | Önce bu tabloyu tara → en yakın görev tipine yönlendir |

---

## 📁 Hafıza Dosyaları (roller)

| Dosya | Rol | Ne zaman |
|---|---|---|
| **AGENTS.md** (bu) | Görev → referans yönlendirme + evrensel kurallar | Her görev öncesi |
| `Mimari.md` | Yazılım mimarisi + kodlama kuralları + veri akışı + tuzaklar | Görevin detayı için |
| `project_info.md` | Proje tanımı, özellikler, durum, açılış kontrol listesi | Bağlam/hafıza tazeleme |
| `Roadmap.md` | Sprint + checkbox ilerleme | İlerleme işaretleme |
| `Tasks.md` | Görev takibi (geçmiş + sıradaki, tarih etiketli) | **Her görev başı/sonu** |
| `README.md` | Kullanım kılavuzu | Kullanıcıya dönük |
| `YENI-BILESEN-SIHIRBAZI-TALIMATI.md` | Sihirbaz LLM talimatı (vite.config okur — **SİLME**) | Sihirbaz üretimi |

---

## ✅ Evrensel Görev Akışı (her görevde)

1. **Görevi oku/anla** → yukarıdaki tablodan görev tipini bul → referans dosyayı OKU.
2. **`Tasks.md`'ye görev ekle** (tarih etiketli, checkbox açık).
3. **Uygula** (referans dosyadaki akışa göre).
4. **Doğrula:** `tsc --noEmit -p tsconfig.app.json` → `npm test` (15/15) → `python3 tests/kapsamli-kontrol.py` (20 OK) → CDP tarayıcı (gerekirse).
5. **Onayla:** `Tasks.md` checkbox kapat + `Roadmap.md` sprint işaretle (yeni özellikse).
6. **Commit + push** (her görev sonunda — `main`'de olduğunu doğrula: `git branch --show-current`).

---

## ⚠️ Evrensel Kurallar (bağlamdan bağımsız)

1. **Saf React:** yalnızca react + tailwind. Üçüncü parti UI paketi **YASAK**.
2. **İkonlar kendi setimizden:** `import { Search } from "@/components/ui/icons"` — lucide-react'ten import YASAK.
   Eşleştirme: birebir ad → anlam (Email→Mail) → emin değilsen SOR.
3. **Bileşen formatı:** tek dosya, named export, interface başta, JSDoc `@id @category @subcategory @source @tags` zorunlu.
4. **Offline:** uzak görsel/iframe/CDN YASAK → gradient placeholder (tek istisna: HesapMakinesi döviz).
5. **`.ts` içinde JSX OLMAZ** (JSX → `.tsx`).
6. **Envanter tek kaynak:** `Bileşen Listesi .txt` — kategori/alt kategori oradan; `rfind` ile "Toplam:" güncelle.
7. **Commit disiplini:** görev sonunda commit + push; detached HEAD'e düşme (uzun cherry-pick sonrası kontrol).

---

## 🚀 Temel Komutlar (hızlı)

```bash
./kutuphane-baslat.sh      # 5800 başlat (Vite yeni dosyada düşerse: rm -rf bilesen-kutuphanesi/node_modules/.vite)
./kutuphane-durdur.sh      # durdur
cd registry && node build-registry.mjs   # kayıt defteri (91 sn)
cd bilesen-kutuphanesi && npm test       # findRootInfo (15)
python3 tests/kapsamli-kontrol.py        # 20 OK hedef
cdp open "http://localhost:5800/"        # tarayıcı doğrulama (sekme kaymasına karşı önce open)
```

Detaylı mimari/kurallar/tuzaklar: **`Mimari.md`** · Güncel durum: **`Roadmap.md`** · Görev takibi: **`Tasks.md`**
<!-- component-studio:end -->
