# Plan — Layout Temaları 3-8 (Tema 2 tasarım dili)

> Taban: **Tema 2** (NovaPanel — mavi palet, açık kenarlıklar `--border:#eef2f8`,
> header + sidebar + panel + footer yapısı, scoped CSS, kendi ikon setimiz).
> Her tema: `tema<N>.tsx` + `tema<N>.css` (tema2 tabanından türetilir) +
> Layoutlar sekmesine kutu. Her ekleme ayrı commit. Standart akış (GOREV-AKISI).

| Tema | Ad | Yapı | State | Öne çıkan bileşenler |
|---|---|---|---|---|
| **3** | Dokümantasyon | Header + sidebar (konular) + içerik (başlıklar/kod) + sağ TOC | openKey, dark, aktif konu, TOC aktif başlık | NavLink, Code, Highlight, TOC benzeri |
| **4** | Chat | Header + sol konuşma listesi + sohbet paneli + input | aktif konuşma, mesajlar, yazma | Avatar, ScrollArea, Textarea, List |
| **5** | Kanban | Header + 3 kolon (kartlar) + kart ekle | kolonlar, kartlar, yeni kart | Card, Avatar (grup), Progress, Pill |
| **6** | E-ticaret | Üst bar + kategori yan panel + ürün grid + sepet | seçili kategori, sepet, ürünler | Card, Image, Rating, Pill, Select |
| **7** | Mail/Inbox | Header + sol klasörler + orta liste + sağ okuma | aktif klasör, seçili mail, okundu | List, Avatar, Checkbox, Pagination |
| **8** | Form Sihirbazı | Header + stepper + form alanı + geri/ileri | adım, form değerleri | Stepper, TextInput, Checkbox, Button |

## Ortak tasarım dili (Tema 2'den)
- `g-header` (logo + bildirim/takvim/profil) · `sidebar` (açılır/kapanır, açık menüler)
- `breadcrumb` · `main__inner` · `g-footer`
- Renkler: mavi palet + açık kenarlıklar · kartlar gölgeli · durum rozetleri
- Thumbnail (`.tema-thumb` static) + tam ekran (`.tema-fullscreen` offset) override'ları

## Akış (her tema)
1. `tema<N>.css` = tema2.css tabanı (`.tema<N>-root` scoped) + tema-specific stiller
2. `tema<N>.tsx` = ortak iskelet (header/sidebar/footer/breadcrumb) + tema içeriği
3. `layouts-view.tsx` → kutu (id `tema<N>`, title, desc, node)
4. tsc ✓ · test ✓ · tarayıcı (kutu → tam ekran → geri) ✓ → commit
