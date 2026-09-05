# ✅ Tasks — Görev Takibi

> Projede gerçekleştirilen tüm görevler ve sıraya alınan görevler burada izlenir.
> Her görev öncesi eklenir, sonrası onaylanır (checkbox). Birleşik görevlerde `Ana > Alt` şeklinde kayıt düşülür.
> Güncel durum: `Roadmap.md` · Proje tanımı: `project_info.md` · Mimari: `Mimari.md`

---

## 📋 Geçmiş Görevler (tamamlanan)

### Sprint 0 — Altyapı & Heroui (tamamlandı)
- [x] **2025-08 · 0.1** Saf React bileşen kütüphanesi kurulumu — RAC + üçüncü parti UI bağımlılıkları kaldırıldı (`0fee331`)
- [x] **2025-08 · 0.2** Sol panel: kategori iskeleti her zaman görünür (boş kategoriler dahil) (`a00d159`)
- [x] **2025-08 · 0.3** HeroUI entegrasyonu — 527 bileşen (56 aile: Button → Accordion → Alert → Autocomplete → ...)
- [x] **2025-08 · 0.4** İlk özel bileşenler (CascadingSelect 2079, Miller2 2080)

### Sprint 1 — shadcn/ui (tamamlandı)
- [x] **2025-08 · 1.1** shadcn/ui entegrasyonu — 387 bileşen (7 adım: Form → Seçim → Buton+Kart → Overlay → Navigasyon → Akordeon/Uyarı/Takvim → Veri/Yükleme/Genel)

### Sprint 2 — Mantine (tamamlandı)
- [x] **2025-08 · 2.1** Mantine entegrasyonu — 841 bileşen (11 adım: Layout → Butonlar → Form → Seçim → Combobox → Overlay → Navigasyon → Veri → Geri Bildirim → Takvim → Özel)

### Sprint 3 — Stüdyo & Yayın (tamamlandı)
- [x] **2025-08 · 3.1** GitHub yayını — repo `yunusozkarakasoglu/component-studio` PUBLIC (`d3e93be`)
- [x] **2025-08 · 3.2** Boş kutu hatası düzeltmesi — MtFloatingWindow absolute konumlanma (`7ac0b05`)
- [x] **2025-08 · 3.3** Performans Adım 1 — sanal liste `useVirtualGrid` (DOM 32.371 → 1.195, %96) (`c812a64`)
- [x] **2025-08 · 3.4** Layout Tema Sistemi — Tema 1-8 (kaynak: 5174 NovaPanel şablonu)

### Sprint 4 — MUI & Etiket sistemi (tamamlandı)
- [x] **2025-08 · 4.1** Material UI entegrasyonu — 234 bileşen (9 adım) · son id 2078
- [x] **2025-08 · 4.2** Etiketler (tags) sistemi — JSDoc @tags → registry, detay/ tablo / arama (`d4521e2`)
- [x] **2025-08 · 4.3** Kayıt akışı — save-component `code:out` + anında merge (`3bd2c66`)
- [x] **2025-08 · 4.4** Favoriler sekmesi + yıldız — localStorage kalıcı (`079a6cc`)
- [x] **2025-08 · 4.5** Yeni bileşen üretim akışı — LLM kayıt yapmaz, workbench'e yazar (`762a395`)

### Sprint 5 — Widgets & İkonlar & Özel (tamamlandı)
- [x] **2025-09 · 5.1** Widgets sekmesi + SaatWidget 2082 — envanterde `### Widgets` EN SONA kuralı (`8898f4f`)
- [x] **2025-09 · 5.2** HesapMakinesi 2081 — 3 mod (hesap/zaman/döviz; döviz uzak API korundu) (`60ec78a`)
- [x] **2025-09 · 5.3** Layout temaları sadeleştirme — Tema 3-8 silindi, Tema 1-2 kaldı (`a1d8abf`)
- [x] **2025-09 · 5.4** Hafıza dosyaları — Roadmap/AGENTS/kılavuzlar + project_info.md (`2a62555`)
- [x] **2025-09 · 5.5** Kaynak klasörler silindi — Masaüstü/{shadcn,heroui,mantine,Layouts,MaterialUI} (`d643f54` öncesi)
- [x] **2025-09 · 5.6** İkonlar sekmesi — 1756 ikon · 23 kategori · kopyala-toast (`7f056b1`+`fcbe23c`)
- [x] **2025-09 · 5.7** UyeListesi 2085 — yazdıkça gelen checkbox üye listesi (`d643f54`)
- [x] **2025-09 · 5.8** RichTextEditorPlus 2086 — Note Pro zengin metin editörü (`d527e73`)
- [x] **2025-09 · 5.9** Temizlik — PLAN-*.md + yedekler silindi, referanslar temizlendi (`bdcd40e`)
- [x] **2025-09 · 5.10** Standart proje dosyaları — Tasks.md + Mimari.md oluşturuldu, eski takip dosyaları birleştirildi

---

## 📋 Sıradaki Görevler (bekleyen)

- [ ] **Perf-1 > Performans Adım 4** — Vite manualChunks (icons/ui/vendor ayrı chunk + prod build analizi) — production öncesi
- [ ] **Perf-2 > Performans Adım 3** — Kart React.memo + arama 200ms debounce
- [ ] **Perf-3 > Performans Adım 2** — samples.tsx lazy loading (3 seçenekli — tam/kısmi/atla)
- [ ] **Layout > Yeni tema** — kullanıcı 5174'te yeni tasarım üretirse tema ekleme akışı (`Mimari.md`/`Roadmap.md`)
- [ ] **Sihirbaz > Kayıt onayı UX** — aşama 2 "Sonra" akışı + Bekleyen rozeti görünürlüğü
- [ ] **Sihirbaz > Kütüphane modu tam test** — seçim → "Pi'ye Bağla" → birleştirme üretimi (kod yazıldı, test edilmedi)
- [ ] **Sihirbaz > finalize id hesabı** — max+1 mantığı tekrar doğrula

---

## 📝 Kayıt Kuralı

- Her görev **başlamadan önce** buraya eklenir, **tamamlanınca** checkbox işaretlenir.
- Birleşik görevler: `Ana > Alt` satırı.
- Tarih/saat etiketi: `YYYY-AA · 5.7` formatı (sprint no + görev no).
