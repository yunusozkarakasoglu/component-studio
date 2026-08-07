# Mantine → Saf React Entegrasyon Planı

> Kaynak: `github.com/mantinedev/mantine` (master) → `~/Masaüstü/mantine-components-setup/`
> Kütüphane: Component-studio — kaynak: **mantine** (HeroUI + shadcn ayrı)
> Kural: Heroui/shadcn akışı — saf React, ikonlar kendi setimizden
> (@phosphor-icons/react → kendi icons setimizle eşleştirme),
> her demo ayrı bileşen, JSDoc @id + @category + @subcategory + @source mantine.

## Kararlar (kullanıcı onaylı)
- **İsim öneki**: `Mt` (MtButton, MtTextInput…) — mevcut Button/TextInput ile çakışma yok
- **Kapsam**: Core 118 + Dates 16 (form/charts/others/hooks/guides/theming/styles atlanır)
- **Örnekler**: Tüm demo'lar ayrı bileşen olarak (shadcn disiplini)

## Kaynak Yapısı
```
Masaüstü/mantine-components-setup/
├── docs/                    ← apps/mantine.dev/src/pages/<kat>/<x>.mdx (açıklama)
│   ├── core/*.mdx
│   └── dates/*.mdx
├── demos/                   ← packages/@docs/demos/src/demos/<kat>/<X>/X.demo.<ad>.tsx
│   ├── core/<X>/*.tsx
│   └── dates/<X>/*.tsx
└── OKU-BENİ.md
```

## Kategori Eşlemesi (mevcut kategorilere)
| Kategori | Mantine elementleri |
|---|---|
| **Genel** | Box, Group, Stack, Center, Container, Paper, Space, Flex, Divider, AspectRatio, Overlay, Portal, FocusTrap, VisuallyHidden, Transition |
| **Butonlar & Aksiyonlar** | Button, ActionIcon, CloseButton, CopyButton, FileButton, UnstyledButton, Burger, Anchor, Menu, Menubar |
| **Form Elemanları** | TextInput, Textarea, NumberInput, PasswordInput, JsonInput, MaskInput, NativeSelect, Input, Fieldset |
| **Seçim** | Checkbox, Radio, Switch, Chip, SegmentedControl, Slider, RangeSlider, Rating, PinInput, ColorInput, ColorPicker, ColorSwatch, HueSlider, AlphaSlider, AngleSlider, PillsInput |
| **Combobox** | Select, MultiSelect, Autocomplete, TagsInput, Combobox, ComboboxPopover, TreeSelect, Cascader |
| **Overlay** | Modal, Drawer, Dialog, Tooltip, Popover, HoverCard, Affix, LoadingOverlay, Notification |
| **Navigasyon** | Tabs, Pagination, Breadcrumbs, NavLink, Stepper, Timeline, FloatingIndicator |
| **Veri Gösterimi** | Table, Card, Avatar, DataList, EmptyState, List, Text, Title, Typography, Image, BackgroundImage, ThemeIcon, Pill |
| **Yükleme & İlerleme** | Loader, Progress, RingProgress, SemiCircleProgress, Skeleton, Indicator, RollingNumber, NumberFormatter |
| **Alert & Dialog** | Alert, Blockquote, Code, Kbd, Highlight, Mark, Spoiler, Collapse |
| **Takvim** | Calendar, DateInput, DatePicker, DatePickerInput, DateTimePicker, InlineDateTimePicker, MonthPicker, MonthPickerInput, TimeInput, YearPicker, YearPickerInput, TimePicker, TimeGrid, MiniCalendar |
| **Özel Komponentler** | AppShell, ScrollArea, Scroller, Splitter, Marquee, Tree, FloatingWindow, TableOfContents, OverflowList, LoadingOverlay |

**Kapsam dışı (üçüncü parti bağımlı — not):**
- charts (recharts) · form (useForm hook'ları) · others/x (Notifications, Spotlight, Carousel/embla, Dropzone) · hooks · guides · theming · styles

## Adımlar (sıra sıra, her adım sonunda commit)
### Adım 0 — Kaynak altyapı
- [x] Sparse clone: mdx (pages) + demos (.tsx) → setup klasörü (134 mdx + 1266 tsx)
- [x] @source altyapısı hazır (build-registry serbest @source + App sourceOk + Mantine filtre butonu)
- [x] Mt öneki + kategori eşleme (üstte, kullanıcı onaylı)

- [x] **Adım 1 — Layout** — 1004-1057 (12 çekirdek + 44 örnek: Box/Group/Stack/Center/Container/Paper/Space/Flex/Divider/AspectRatio/SimpleGrid/Grid)
- [x] **Adım 2 — Butonlar** — 1058-1113 (9 çekirdek + 47 örnek: Button/ActionIcon/CloseButton/CopyButton/FileButton/Burger/Anchor/Menu/Menubar)
- [x] **Adım 3 — Form girdileri** — 1114-1210 (9 çekirdek + 89 örnek: Input/TextInput/Textarea/NumberInput/PasswordInput/JsonInput/MaskInput/NativeSelect/Fieldset)
- [x] **Adım 4 — Seçim** — 1211-1298 (11 çekirdek + 82 örnek: Checkbox/Radio/Switch/Chip/SegmentedControl/Slider/RangeSlider/Rating/PinInput/ColorInput/PillsInput)
- [x] **Adım 5 — Combobox** — 1299-1340 (6 çekirdek + 36 örnek)
### Adım 6 — Overlay (Modal, Drawer, Dialog, Tooltip, Popover, HoverCard, Affix, LoadingOverlay, Notification)
### Adım 7 — Navigasyon (Tabs, Pagination, Breadcrumbs, NavLink, Stepper, Timeline, FloatingIndicator)
### Adım 8 — Veri Gösterimi (Table, Card, Avatar, DataList, EmptyState, List, Text, Title, ThemeIcon, Pill, Image)
### Adım 9 — Geri Bildirim & Yükleme (Loader, Progress, RingProgress, Skeleton, Indicator, Alert, Code, Kbd, Blockquote, Spoiler, Collapse)
### Adım 10 — Takvim (16 dates element)
### Adım 11 — Özel (AppShell, ScrollArea, Splitter, Tree, Marquee, FloatingWindow, TableOfContents)

## Element akışı (her element)
1. `docs/<kat>/<x>.mdx` + `demos/<kat>/<X>/*.tsx` oku
2. Saf React'e çevir (Mt önekli, kendi icons, Tailwind)
3. `src/components/ui/mt-<x>.tsx` + örnekler `mt-<x>-<örnek>.tsx` oluştur
4. barrel + samples + envanter güncelle
5. `cd registry && node build-registry.mjs` → tsc → test → tarayıcı → commit
