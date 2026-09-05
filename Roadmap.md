# 🗺️ Roadmap — Component Studio Yol Haritası & İlerleme

> Bu dosya projenin **global ilerleme akışını** sprint + alt görev (checkbox) olarak izler.
> Her sprint/alt görev satırda checkbox ile işaretlenir.
> Görev takibi: `Tasks.md` · Proje tanımı: `project_info.md` · Mimari/kurallar: `Mimari.md` · LLM kuralları: `AGENTS.md`

---

## 🎯 Hedef (vizyon)

Modern frontend arayüz dünyasının atomic design mantığıyla kategorize edilmiş
**offline saf React bileşen kütüphanesi** — her bileşen tek dosya, bağımsız,
yalnızca `react + tailwind` (üçüncü parti UI paketi YASAK; ikonlar kendi 1756'lık setimizden).

```
Elements (Atoms) → Components (Molecules) → Layouts (Organisms) → Templates → Pages
Design system (tokens/tema) · State & Data
```

---

## ✅ Sprint 0 — Altyapı & HeroUI (tamamlandı)
- [x] 0.1 Saf React çekirdeği — RAC ve üçüncü parti UI bağımlılıkları kaldırıldı
- [x] 0.2 Sol panel kategori iskeleti (boş kategoriler dahil görünür)
- [x] 0.3 HeroUI entegrasyonu — **56 aile · 527 bileşen** (Button→Calendar→Table…)

## ✅ Sprint 1 — shadcn/ui (tamamlandı)
- [x] 1.1 shadcn/ui — **387 bileşen** (7 adım: Form→Seçim→Buton+Kart→Overlay→Navigasyon→Akordeon/Uyarı/Takvim→Veri/Yükleme/Genel)
  - Üçüncü parti yerine yazılan çekirdekler: Calendar (react-day-picker), Combobox (base-ui), Command (cmdk), Resizable (react-resizable-panels)

## ✅ Sprint 2 — Mantine (tamamlandı)
- [x] 2.1 Mantine — **841 bileşen** (11 adım: Layout→Butonlar→Form→Seçim→Combobox→Overlay→Navigasyon→Veri→Geri Bildirim→Takvim→Özel)

## ✅ Sprint 3 — Stüdyo & Yayın (tamamlandı)
- [x] 3.1 Stüdyo arayüzü — Dashboard/Bileşenler/Layoutlar sekmeleri + filtreler + kart/tablo
- [x] 3.2 GitHub yayını — `yunusozkarakasoglu/component-studio` PUBLIC
- [x] 3.3 Boş kutu düzeltmesi — absolute bileşenler kart içine hapsoldu (`7ac0b05`)
- [x] 3.4 Performans Adım 1 — **sanal liste** `useVirtualGrid` (DOM 32.371→1.195, %96) (`c812a64`)
- [x] 3.5 Layout Tema Sistemi — Tema 1-8 (kaynak: 5174 NovaPanel şablonu)

## ✅ Sprint 4 — MUI + Etiket + Favori (tamamlandı)
- [x] 4.1 Material UI — **234 bileşen** (9 adım) · son id 2078
- [x] 4.2 Etiketler (tags) — JSDoc @tags → registry · detay/tablo/arama (`d4521e2`)
- [x] 4.3 Kayıt akışı — save-component `code:out` + anında merge (rebuild beklemez)
- [x] 4.4 Favoriler — ⭐ sekmesi + yıldız + localStorage (`079a6cc`)
- [x] 4.5 Yeni bileşen üretim akışı — LLM kayıt yapmaz, workbench'e yazar (`762a395`)

## ✅ Sprint 5 — Widgets / İkonlar / Özel / Sadeleştirme (tamamlandı)
- [x] 5.1 Widgets sekmesi + SaatWidget 2082 (`8898f4f`)
- [x] 5.2 HesapMakinesi 2081 — 3 mod (döviz: uzak API kullanıcı isteğiyle korundu) (`60ec78a`)
- [x] 5.3 Layout temaları — Tema 3-8 silindi (aynı sistemin kopyaları), Tema 1-2 kaldı (`a1d8abf`)
- [x] 5.4 Hafıza dosyaları — project_info.md + Roadmap/AGENTS güncelleme (`2a62555`)
- [x] 5.5 Kaynak klasörler silindi — Masaüstü/{shadcn,heroui,mantine,Layouts,MaterialUI}
- [x] 5.6 İkonlar sekmesi — 1756 ikon · 23 kategori · kopyala+toast (`7f056b1`+`fcbe23c`)
- [x] 5.7 UyeListesi 2085 — yazdıkça gelen checkbox üye listesi (`d643f54`)
- [x] 5.8 RichTextEditorPlus 2086 — Note Pro zengin metin editörü (`d527e73`)
- [x] 5.9 Temizlik — PLAN-*.md + yedekler silindi, referanslar temizlendi (`bdcd40e`)
- [x] 5.10 Standart proje dosyaları — Tasks.md + Mimari.md oluşturuldu; eski takip dosyaları birleştirildi

---

## ⬜ Sprint 6 — Production & Sihirbaz (bekleyen)

### Performans (production öncesi) — öncelik sırası: Adım 4 > 3 > 2
- [ ] 6.1 **Adım 4 — Vite chunking**: `build.rollupOptions.output.manualChunks` — `icons`/`ui`/`vendor` ayrı chunk + prod build analizi
  - Dev: 250 modül isteği · beklenti: JS boyutu düşer, cache hit artar
- [ ] 6.2 **Adım 3 — Kart memoization**: React.memo (props: rec/sample) + SAMPLES memoize + arama 200ms debounce
- [ ] 6.3 **Adım 2 — samples lazy**: (a) tam lazy (1754 dosya — yüksek risk) (b) kısmi lazy (ağır bileşenler) (c) atla → Adım 4 çözer

### Sihirbaz (SIHIRBAZ akışı — new-component-wizard)
- [ ] 6.4 Kayıt onayı UX — aşama 2 "Sonra" akışı + Bekleyen rozeti görünürlüğü
- [ ] 6.5 Kütüphane modu tam test — seçim → "Pi'ye Bağla" → birleştirme üretimi (kod yazıldı, test edilmedi)
- [ ] 6.6 finalize id hesabı — max+1 mantığı tekrar doğrula

### Layout temaları
- [ ] 6.7 Yeni tema (Tema 3+) — kullanıcı 5174'te yeni tasarım üretirse → `Mimari.md §6` akışı

---

## 📊 Güncel Durum (son kontrol)

- **1997 bileşen** · heroui 527 · shadcn 387 · **mantine 841** · **mui 234** · özel 8 · 0 çift kayıt
- **2 layout teması** (Tema 1, Tema 2) · **5 sekme** (Dashboard/Bileşenler/Layoutlar/Widgets/İkonlar)
- **1756 ikon · 23 kategori** · tags + favoriler çalışır durumda
- GitHub senkron · tsc ✓ · test 15/15 ✓ · kapsamlı kontrol **20 OK · 2 uyarı · 0 HATA**
- Son id: **2086** · Son commit: `bdcd40e`

---

## ⚠️ Önemli Tuzaklar (compact sonrası hatırlatma)

1. **Envanter kırpma**: `Bileşen Listesi .txt`'te "**Toplam:**" satırını `rfind` ile bul (`find` yanlış keser — 260 kayıt gitmişti).
2. **Ad-dosya uyuşmazlığı**: envanter adı ≠ dosya adı → çift kayıt (617/889/895/999/1212).
3. **JSDoc id sıralaması**: çekirdek+örnek id'leri envanter/samples ile birebir aynı sırada.
4. **samples props'suz render**: render-prop + zorunlu prop'lu çekirdekler → propları opsiyonel yap veya örnek içerik ver.
5. **HTML prop çakışması**: `size`/`title`/`onSelect` → `Omit<..., "size">`.
6. **CDP sekme kayması**: önce `cdp open "http://localhost:5800/"`.
7. **findRootInfo**: fragment kök bulunamaz → `display:contents` span; erken return'ler `return;`; regex `\(`→`\x28`.
8. **Offline ilkesi**: uzak görsel/iframe → gradient placeholder.
9. **`.ts` içinde JSX OLMAZ**.
10. **Tema senkronu**: styles.css'ten kopyalama özelleştirmeleri ezer → `Mimari.md §6` yeniden uygulama listesi.
11. **Tema CSS scoped**: `:root/*/body` YASAK → `.tema<N>-root`.
12. **Fixed elemanlar (tema)**: thumbnail static, tam ekran offset (48/104px).
13. **Vite yeni tema dosyasında çökebilir** → yeniden başlat.
14. **Detached HEAD**: push öncesi `git branch --show-current`.

---

## 🔄 Akış (her görev)

1. `Tasks.md`'ye görev ekle → başla
2. Görevi uygula (Mimari.md kuralları + AGENTS.md akışı)
3. Doğrula: tsc → npm test → kapsamlı kontrol → CDP tarayıcı
4. `Tasks.md` onayla → Roadmap sprint checkbox işaretle → **commit + push**
