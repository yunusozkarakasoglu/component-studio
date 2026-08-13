# Material UI → Saf React Entegrasyon Planı

> Kaynak: `github.com/mui/material-ui` (master) → ~~`/home/yunus/Masaüstü/MaterialUI/`~~ (silindi — entegrasyon tamam, 234 bileşen)
> Kütüphane: Component-studio — kaynak: **mui** (HeroUI + shadcn + Mantine ayrı)
> Kural: Heroui/shadcn/Mantine akışı — saf React, ikonlar kendi setimizden
> (`@mui/icons-material/*` → kendi 1756 ikon setimizle eşleştirme),
> her demo ayrı bileşen, JSDoc `@id` + `@category` + `@subcategory` + `@source mui`.

## Kararlar (önerilen — kullanıcı onayı bekleniyor)

- **İsim öneki**: `Mui` (MuiButton, MuiTextField, MuiSlider…) — mevcut Button/TextInput/MtButton/ShadcnButton ile çakışma yok
- **Kapsam**: `@mui/material` çekirdek bileşenleri (63 bileşen ailesi, 536 demo)
- **Kapsam dışı**: `@mui/icons-material` paketi (136 ikon — biz kendi setimizi kullanırız), `@mui/x-data-grid`/`@mui/x-charts` (üçüncü parti), `@mui/lab` (deneysel), `@mui/base` (headless)
- **Örnekler**: Tüm demo'lar ayrı bileşen olarak (shadcn/Mantine disiplini)
- **styled() dönüşümü**: 222 demo `styled()`/sx prop kullanıyor → Tailwind class'larına + CSS değişkenlerine çevrilecek
- **Üçüncü parti demo'lar**: `autosuggest-highlight`, `lodash`, `chance`, `flexsearch` gibi paket bağımlı demo'lar atlanır veya basitleştirilir
- **Kategori & alt kategori tek kaynak**: `Bileşen Listesi .txt` (`### Kategori`, `#### Alt Kategori`)

## Kaynak Yapısı

```
Masaüstü/MaterialUI/
├── components/              ← docs/data/material/components/<ad>/ (açıklama + demo bir arada)
│   ├── <component>/
│   │   ├── <component>.md   ← dökümantasyon (API, props, erişilebilirlik)
│   │   └── <Demo>.tsx       ← demo kaynak (saf JSX, @mui/material importlu)
│   │   └── <Demo>.tsx.preview ← derlenmiş önizleme (kullanılmaz)
│   └── ...
├── getting-started/         ← kurulum/tema rehberleri
└── (OKU-BENİ.md — eklenecek)
```

**Not:** Mantine'den farkı — MUI'de docs (mdx) ve demos (tsx) aynı klasörde; ayrı klasörlerde değil.

## Kategori Eşlemesi (mevcut kategorilere)

| Kategori | MUI elementleri |
|---|---|
| **Genel** | Box, Container, Paper, Stack, Grid, Divider, Collapse, Fade, Grow, Slide, Zoom, Typography, Tooltip, ClickAwayListener, Portal, NoSsr, CssBaseline, GlobalStyles |
| **Butonlar & Aksiyonlar** | Button, IconButton, ButtonBase, ButtonGroup, Fab (Floating Action Button), SpeedDial, SpeedDialAction, SpeedDialIcon, ToggleButton, ToggleButtonGroup |
| **Form Elemanları** | TextField, OutlinedInput, FilledInput, Input, InputAdornment, InputBase, InputLabel, TextareaAutosize, FormControl, FormLabel, FormHelperText, FormGroup, FormControlLabel, NumberField |
| **Seçim** | Checkbox, Radio, RadioGroup, Switch, Slider, Rating, Chip, Autocomplete, SwitchBase |
| **Combobox** | Select, NativeSelect |
| **Overlay** | Dialog, Modal, Drawer, SwipeableDrawer, Popover, Popper, Backdrop, Snackbar, SnackbarContent |
| **Navigasyon** | AppBar, Toolbar, Menu, MenuItem, MenuList, Breadcrumbs, Pagination, PaginationItem, MobileStepper, BottomNavigation, BottomNavigationAction, Link, Tabs, Tab, TabScrollButton, Stepper, Step, StepButton, StepConnector, StepContent, StepIcon, StepLabel, Timeline |
| **Veri Gösterimi** | Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Avatar, AvatarGroup, Badge, Chip, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText, ListSubheader, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, TableSortLabel, ImageList, ImageListItem, ImageListItemBar, Masonry, Accordion, AccordionActions, AccordionDetails, AccordionSummary, TransferList |
| **Yükleme & İlerleme** | CircularProgress, LinearProgress, Skeleton |
| **Alert & Dialog** | Alert, AlertTitle |
| **Özel Komponentler** | (MUI Lab + özel sarmalayıcılar — opsiyonel) |

**Kapsam dışı (üçüncü parti bağımlı — atlanır):**
- `@mui/icons-material` (136 ikon → kendi setimiz) · `@mui/x-data-grid` (DataGrid) · `@mui/x-date-pickers` (DatePicker — zaten Mantine'den var) · `@mui/x-charts` · `@mui/lab` (deneysel: TreeView, TimeLine varyantları) · `@mui/base` (headless, styled'siz)

## MUI İkon Eşlemesi (kendi setimize)

MUI demoları 136 unique `@mui/icons-material/*` ikonu kullanıyor. Kurallar:
1. Birebir ad eşleşmesi → aynısı (`Add` → `Add`)
2. Anlam eşleşmesi → en yakın (`AccessAlarm` → `AlarmClock`, `ArrowBack` → `ArrowLeft`)
3. Belirsiz → kullanıcıya sor

İkon setimiz: `@/components/ui/icons` (1756 ikon, SVG gömülü).

## Adımlar (sıra sıra, her adım sonunda commit)

### Adım 0 — Kaynak altyapı
- [ ] **0.1** Kaynak dosyalar hazır (Masaüstü/MaterialUI — 63 bileşen, 536 demo) ✅ kopyalandı
- [ ] **0.2** `@source mui` altyapısı: build-registry `mui` tanır, App sourceOk + filtre butonu
- [ ] **0.3** Mui öneki + kategori eşleme (üstte — kullanıcı onaylı)
- [ ] **0.4** OKU-BENİ.md (kaynak yapısı + çeviri kuralları) → Masaüstü/MaterialUI/
- [ ] **0.5** MUI ikon eşleme tablosu (136 ikon → kendi setimiz)

### Adım 1 — Genel (Layout) — 1845+
- [ ] Box, Container, Paper, Stack, Grid (MUI Grid2), Divider, Collapse, Fade/Grow/Slide/Zoom, Typography
- Tahmini: ~12 çekirdek + ~50 örnek

### Adım 2 — Butonlar & Aksiyonlar
- [ ] Button, IconButton, ButtonBase, ButtonGroup, Fab, SpeedDial (+Action/Icon), ToggleButton(+Group)
- Tahmini: ~10 çekirdek + ~55 örnek

### Adım 2.5 — Alert & Dialog
- [ ] Alert, AlertTitle
- Tahmini: ~2 çekirdek + ~9 örnek

### Adım 3 — Form Elemanları
- [ ] TextField, OutlinedInput, FilledInput, InputBase, InputLabel, FormHelperText, TextareaAutosize, FormControl(+Label/Group), NumberField
- Tahmini: ~11 çekirdek + ~40 örnek

### Adım 4 — Seçim
- [ ] Checkbox, Radio(+Group), Switch, Slider, Rating, Chip, Autocomplete, SwitchBase
- Tahmini: ~8 çekirdek + ~80 örnek (Autocomplete 28, Slider 18, Checkbox 10, Radio 10)

### Adım 5 — Combobox
- [ ] Select, NativeSelect
- Tahmini: ~2 çekirdek + ~16 örnek

### Adım 6 — Overlay
- [ ] Dialog, Modal, Drawer, SwipeableDrawer, Popover, Popper, Backdrop, Snackbar(+Content)
- Tahmini: ~9 çekirdek + ~50 örnek

### Adım 7 — Navigasyon
- [ ] AppBar, Toolbar, Menu, MenuItem, MenuList, Breadcrumbs, Pagination(+Item), MobileStepper, BottomNavigation(+Action), Link, Tabs(+Tab), Stepper(+Step/StepButton/StepConnector/StepContent/StepIcon/StepLabel), Timeline
- Tahmini: ~20 çekirdek + ~100 örnek (Tabs 19, Menus 16, Pagination 11, Steppers 10)

### Adım 8 — Veri Gösterimi
- [ ] Card(+ActionArea/Actions/Content/Header/Media), Avatar(+Group), Badge, List(+Item/ItemAvatar/ItemButton/ListItemIcon/ItemSecondaryAction/ItemText/ListSubheader), Table(+Body/Cell/Container/Footer/Head/Pagination/Row/SortLabel), ImageList(+Item/ItemBar), Masonry, Accordion(+Actions/Details/Summary), TransferList
- Tahmini: ~30 çekirdek + ~120 örnek (Table 12, Lists 14, Cards 9, Avatars 13, Accordion 7)

### Adım 9 — Yükleme & İlerleme
- [ ] CircularProgress, LinearProgress, Skeleton
- Tahmini: ~3 çekirdek + ~25 örnek

**Tahmini toplam:** ~107 çekirdek + ~545 örnek ≈ **~650 bileşen**

## Element akışı (her element)

1. `components/<ad>/<ad>.md` + `components/<ad>/<Demo>.tsx` oku
2. Saf React'e çevir:
   - `Mui` öneki
   - `@mui/icons-material/*` → `@/components/ui/icons` (kendi setimiz)
   - `@mui/material/Stack` vb. → saf React + Tailwind
   - `styled()`/`sx` prop → Tailwind class + CSS değişkenleri
   - `@emotion/*` → kaldır
3. Dosya oluştur:
   - Çekirdek: `src/components/ui/mui-<x>.tsx`
   - Örnek: `src/components/ui/mui-<x>-<örnek>.tsx` (her demo ayrı)
4. `index.tsx` barrel'e ekle: `export * from "./mui-<x>"`
5. `samples.tsx`'e galeri önizlemesi ekle (`"<id>": <MuiX />,`)
6. `Bileşen Listesi .txt`'ye envanter satırı ekle (kategori + alt kategori ile)
7. `cd registry && node build-registry.mjs` → tsc → npm test → tarayıcı doğrula → **commit**

## Önemli Notlar

1. **`.ts` içinde JSX OLMAZ** — JSX içeren dosyalar `.tsx` olmalı
2. **JSDoc zorunlu etiketler**: `@id` + `@category` + `@subcategory` + `@source mui`
3. **A11y attributeleri** (aria-expanded/controls/current, role) korunacak
4. **Çakışma kontrolü**: MUI Grid ≠ Mantine Grid ≠ shadcn Grid → `MuiGrid` önekiyle ayrım
5. **styled() → Tailwind**: `styled(Button)({ root: {...} })` → `<button className="...">` + CSS değişkenleri
6. **sx prop**: `sx={{ mt: 2, p: 3 }}` → `className="mt-2 p-3"` (spacing fonksiyonu ile)
7. **Theme/ThemeProvider**: MUI teması yerine CSS değişkenleri kullan (stüdyo temasıyla uyumlu)
8. **Tuzağa dikkat** (Roadmap.md'deki kurallar):
   - Envanter kırpma tuzağı (`rfind` ile "Toplam:" satırı)
   - Ad-dosya uyuşmazlığı (envanter adı = dosya adı)
   - JSDoc id sıralaması (çekirdek + örnekler birebir sıra)

## Durum

- **TAMAMLANDI:** 234 MUI bileşen eklendi (id 1845-2078) · kaynak klasör silindi
- **Başlangıç:** 1755 bileşen (heroui 527 · shadcn 387 · mantine 841) · son id: 1844
- **Hedef:** ~2400+ bileşen
- **Kaynak hazır:** Masaüstü/MaterialUI (63 bileşen, 536 demo) ✅
