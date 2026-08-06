# shadcn/ui → Saf React Entegrasyon Planı

> Kaynak: `~/Masaüstü/shadcn-components-setup/*.md` (63 element indirildi ✓)
> Kütüphane: Component-studio — kaynak: **shadcn** (HeroUI ayrı, Mantine bekliyor)
> Kural: Heroui akışı — saf React, ikonlar kendi setimizden (lucide → eşleştirme),
> her örnek ayrı bileşen, kategori mantığımızla shadcn alt ağacına.

## Kategori Eşlemesi (mevcut 19 kategoriye göre)

| Kategori | Elementler |
|---|---|
| **Form Elemanları** (9) | Input, Label, Textarea, Kbd, Field, Input Group, Input OTP, Native Select, - [x] **Slider** — 692-698 (Demo/Range/Multiple/Vertical/Controlled/Disabled/Rtl)

### ✅ Adım 1 tamamlandı (9 element, 84 bileşen) |
| **Seçim** (5) | Checkbox, Switch, Radio Group, Toggle, - [x] **Toggle Group** — 732-740 (çekirdek + 8 örnek)

### ✅ Adım 2 tamamlandı (5 element, 42 bileşen) |
| **Butonlar & Aksiyonlar** (2) | Button, Button Group |
| **Kartlar** (2) | Card, - [x] **Badge** — 774-781 (ShadcnBadge çekirdek + 7 örnek)

### ✅ Adım 3 tamamlandı (4 element, 31 bileşen) |
| **Overlay** (10) | Dialog, Popover, Tooltip, Hover Card, Dropdown Menu, Context Menu, Toast, Sheet, Drawer, - [x] **Sidebar** — 831-833 (basitleştirilmiş 11 compound + 2 örnek)

### ✅ Adım 4 tamamlandı (10 element, 52 bileşen) |
| **Navigasyon** (5) | Tabs, Pagination, Breadcrumb, Navigation Menu, Menubar |
| **Accordion** (1) | Accordion |
| **Alert & Dialog** (2) | Alert, Alert Dialog |
| **Takvim** (2) | Calendar, Date Picker |
| **Combobox** (4) | Combobox, Command, Select, Native Select |
| **Veri Gösterimi** (3) | Table, Empty, Collapsible |
| **Yükleme & İlerleme** (3) | Progress, Skeleton, Spinner |
| **Genel** (10) | Separator, Typography, Aspect Ratio, Resizable, Scroll Area, Marker, Item, Direction, Attachment, Aspect Ratio |

**Kapsam dışı (üçüncü parti bağımlı — saf React çevirisi zor, not):**
- Chart (recharts) · Data Table (TanStack) · Carousel (embla) · Bubble (AI/markdown) · Message (AI) · Message Scroller (AI)

## Adımlar (sıra sıra)

### Adım 0 — Kaynak altyapısı
- [x] build-registry: JSDoc `@source` → registry `source` (heroui 528 + shadcn 17)
- [x] App.tsx: kaynak filtresi gerçek filtreleme
- [x] Mevcut bileşenler default kaynak: heroui

### Adım 1 — Form Elemanları (9 element)
- [x] **Input** — 615-632 (çekirdek + Field compound + InputGroup + ButtonGroup + 14 örnek)
- [x] **Label** — 633-635 (çekirdek + Demo + RTL)
- [x] **Textarea** — 636-642 (çekirdek + Demo/Field/Disabled/Invalid/Button/RTL)
- [x] **Kbd** — 643-649 (ShadcnKbd + KbdGroup + 5 örnek)
- [x] **Field** — 650-661 (çekirdek genişletildi: Content/Error/Set/Legend/Title/Separator + 12 örnek)
- [x] **Input Group** — 662-675 (ShadcnInputGroup familyası + 13 örnek)
- [x] **Input OTP** — 676-685 (mevcut InputOTP ile 10 örnek)
- [x] **Native Select** — 686-691 (Select + Option + OptGroup + 5 örnek)
- [x] **Slider** — 692-698 (Demo/Range/Multiple/Vertical/Controlled/Disabled/Rtl)

### ✅ Adım 1 tamamlandı (9 element, 84 bileşen)

### Adım 2 — Seçim (5)
- [x] **Checkbox** — 699-708 (ShadcnCheckbox çekirdek + 9 örnek)
- [x] **Switch** — 709-716 (ShadcnSwitch çekirdek + 7 örnek)
- [x] **Radio Group** — 717-724 (çekirdek + 7 örnek)
- [x] **Toggle** — 725-731 (ShadcnToggle çekirdek + 6 örnek)
- [x] **Toggle Group** — 732-740 (çekirdek + 8 örnek)

### ✅ Adım 2 tamamlandı (5 element, 42 bileşen)

### Adım 3 — Butonlar + Kartlar (4)
- [x] **Button** — 741-754 (ShadcnButton çekirdek + 13 örnek)
- [x] **Button Group** — 755-766 (çekirdek + Separator + 11 örnek)
- [x] **Card** — 767-773 (7 compound + 6 örnek)
- [x] **Badge** — 774-781 (ShadcnBadge çekirdek + 7 örnek)

### ✅ Adım 3 tamamlandı (4 element, 31 bileşen)

### Adım 4 — Overlay + Panel (10)
- [x] **Dialog** — 782-788 (8 compound + 6 örnek)
- [x] **Popover** — 789-794 (6 compound + 5 örnek)
- [x] **Tooltip** — 795-800 (3 compound + 5 örnek)
- [x] **Hover Card** — 801-804 (3 compound + 3 örnek)
- [x] **Dropdown Menu** — 805-812 (mevcut Menu ile 8 örnek)
- [x] **Context Menu** — 813-817 (sağ tıklama çekirdek + 4 örnek)
- [x] **Toast** — 818-820 (mevcut toast API + 3 örnek)
- [x] **Sheet** — 821-825 (8 compound + 4 örnek)
- [x] **Drawer** — 826-830 (8 compound + 4 örnek)
- [x] **Sidebar** — 831-833 (basitleştirilmiş 11 compound + 2 örnek)

### ✅ Adım 4 tamamlandı (10 element, 52 bileşen)

### Adım 5 — Navigasyon + Akordeon + Uyarı (9)
Tabs → Pagination → Breadcrumb → Navigation Menu → Menubar → Accordion → Collapsible → Alert → Alert Dialog

### Adım 6 — Takvim + Combobox (6)
Calendar → Date Picker → Combobox → Command → Select → Native Select

### Adım 7 — Veri + Yükleme (6)
Table → Progress → Skeleton → Spinner → Empty

### Adım 8 — Genel (10)
Separator → Typography → Aspect Ratio → Resizable → Scroll Area → Marker → Item → Direction → Attachment

## Notlar
- **İkon:** lucide import'ları kendi setimize eşle (Birebir ad → anlam → sor)
- **`@/components/ui/...`** shadcn iç import'ları → bizim çekirdekler (cn, button...) ya da örnek içi basit
- **date-fns** (calendar/date-picker) → kendi tarih mantığımız (Heroui'deki gibi)
- **sonner** (toast) → kendi toast kuyruğumuz (mevcut)
- Her element: kendi alt kategorisinde; kayıt `@source shadcn` + `@subcategory <Alt Kategori>`
