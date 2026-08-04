/**
 * Eksik bileşen üretici — Template Maker envanteri
 * Envanterdeki 87 bileşenden shadcn aria registry'sinde olmayanları
 * react-aria-components (1.20) üzerine shadcn tarzı sarmalayıcı olarak üretir.
 * RAC'te olmayanlar (Fieldset, ProgressCircle, Dropdown, ScrollShadow, SwitchGroup)
 * bağımsız implementasyon alır.
 * Kullanım: node scripts/generate-missing.mjs
 */
import { writeFileSync, mkdirSync, existsSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const UI = join(__dirname, "..", "src", "components", "ui")

const HDR = (name) => `/**
 * ${name}
 * Template Maker envanteri — ${name} bileşeni.
 * React Aria Components üzerine shadcn tarzı sarmalayıcı.
 * Kullanımdan önce: <Rac> sağlayıcısı ile sarmalayın.
 */
`

const pascal = (s) => s.replace(/-([a-z])/g, (m, c) => c.toUpperCase()).replace(/^./, (c) => c.toUpperCase())

function simple(file, primitive, propsType, cls, extraImports = "") {
  const name = pascal(file.replace(".tsx", ""))
  return {
    file,
    body: `${HDR(name)}
import { ${primitive} as ${name}Primitive, type ${propsType} } from "react-aria-components"
${extraImports}import { cn } from "@/lib/utils"

function ${name}({ className, ...props }: ${propsType}) {
  return (
    <${name}Primitive className={cn("${cls}", className)} {...props} />
  )
}

export { ${name} }
export type { ${propsType} }
`,
  }
}

function generic(file, primitive, propsType, cls, typeDecl, extraImports = "") {
  const name = pascal(file.replace(".tsx", ""))
  return {
    file,
    body: `${HDR(name)}
import { ${primitive} as ${name}Primitive, type ${propsType} } from "react-aria-components"
${extraImports}import { cn } from "@/lib/utils"

function ${name}<${typeDecl}>({ className, ...props }: ${propsType}<T>) {
  return (
    <${name}Primitive className={cn("${cls}", className)} {...props} />
  )
}

export { ${name} }
export type { ${propsType} }
`,
  }
}

function wrapped(file, primitive, propsType, cls) {
  const name = pascal(file.replace(".tsx", ""))
  return {
    file,
    body: `${HDR(name)}
import { ${primitive} as ${name}Primitive, type ${propsType} } from "react-aria-components"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ${name}WrapperProps extends Omit<${propsType}, "children"> {
  className?: string
  children?: ReactNode
}

function ${name}({ className, children, ...props }: ${name}WrapperProps) {
  return (
    <div className={cn("${cls}", className)}>
      <${name}Primitive {...props}>{children}</${name}Primitive>
    </div>
  )
}

export { ${name} }
export type { ${propsType} }
`,
  }
}

const wrappers = [
  simple("checkbox-group.tsx", "CheckboxGroup", "CheckboxGroupProps", "flex flex-col gap-2"),
  simple("color-area.tsx", "ColorArea", "ColorAreaProps", "size-40 shrink-0 rounded-lg"),
  simple("color-field.tsx", "ColorField", "ColorFieldProps", "h-9 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50"),
  simple("color-slider.tsx", "ColorSlider", "ColorSliderProps", "h-6 w-full rounded-lg"),
  simple("color-swatch.tsx", "ColorSwatch", "ColorSwatchProps", "size-8 rounded-md border border-border shadow-sm"),
  simple("color-swatch-picker.tsx", "ColorSwatchPicker", "ColorSwatchPickerProps", "flex flex-wrap gap-2"),
  simple("description.tsx", "Text", "TextProps", "text-sm text-muted-foreground"),
  simple("disclosure.tsx", "Disclosure", "DisclosureProps", "rounded-lg border border-border bg-background"),
  simple("disclosure-group.tsx", "DisclosureGroup", "DisclosureGroupProps", "flex flex-col gap-2"),
  simple("error-message.tsx", "Text", "TextProps", "text-sm text-destructive"),
  simple("field-error.tsx", "FieldError", "FieldErrorProps", "text-sm text-destructive"),
  simple("form.tsx", "Form", "FormProps", "flex flex-col gap-4"),
  simple("header.tsx", "Header", "HeaderProps", "text-sm font-medium text-foreground"),
  simple("link.tsx", "Link", "LinkProps", "text-primary underline-offset-4 outline-none rounded-sm hover:underline focus-visible:ring-3 focus-visible:ring-ring/50"),
  simple("list-box-item.tsx", "ListBoxItem", "ListBoxItemProps", "flex cursor-default items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none data-[selected=true]:bg-accent data-[focused=true]:bg-accent/50 data-[selected=true]:text-accent-foreground"),
  simple("menu-item.tsx", "MenuItem", "MenuItemProps", "flex cursor-default items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none data-[focused=true]:bg-accent data-[focused=true]:text-accent-foreground"),
  simple("meter.tsx", "Meter", "MeterProps", "relative h-2.5 w-full overflow-hidden rounded-full bg-secondary"),
  simple("number-field.tsx", "NumberField", "NumberFieldProps", "h-9 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50"),
  simple("progress-bar.tsx", "ProgressBar", "ProgressBarProps", "relative h-2.5 w-full overflow-hidden rounded-full bg-secondary"),
  simple("radio.tsx", "Radio", "RadioProps", "size-4 rounded-full border border-input bg-background data-[selected=true]:border-primary data-[selected=true]:bg-primary"),
  simple("search-field.tsx", "SearchField", "SearchFieldProps", "h-9 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50"),
  simple("tag.tsx", "Tag", "TagProps", "inline-flex items-center gap-1 rounded-md bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground"),
  simple("text.tsx", "Text", "TextProps", "text-sm text-foreground"),
  simple("text-field.tsx", "TextField", "TextFieldProps", "flex w-full flex-col gap-1.5"),
  simple("toggle-button.tsx", "ToggleButton", "ToggleButtonProps", "inline-flex items-center justify-center gap-2 rounded-lg border border-transparent px-3 py-1.5 text-sm font-medium outline-none transition-colors data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground focus-visible:ring-3 focus-visible:ring-ring/50"),
  simple("toggle-button-group.tsx", "ToggleButtonGroup", "ToggleButtonGroupProps", "flex gap-1 rounded-lg border border-border bg-background p-1"),
  simple("toolbar.tsx", "Toolbar", "ToolbarProps", "flex items-center gap-1 rounded-lg border border-border bg-background p-1"),
  simple("calendar-year-picker.tsx", "Button", "ButtonProps", "inline-flex items-center justify-center gap-2 rounded-lg border border-input bg-background px-3 py-1.5 text-sm font-medium outline-none hover:bg-accent focus-visible:ring-3 focus-visible:ring-ring/50"),

  generic("date-field.tsx", "DateField", "DateFieldProps", "h-9 rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50", "T extends DateValue = DateValue", 'import type { DateValue } from "react-aria-components"\n'),
  generic("time-field.tsx", "TimeField", "TimeFieldProps", "h-9 rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50", "T extends TimeValue = TimeValue", 'import type { TimeValue } from "react-aria-components"\n'),
  generic("date-range-picker.tsx", "DateRangePicker", "DateRangePickerProps", "flex h-9 w-full items-center gap-2 rounded-lg border border-input bg-background px-3 text-sm", "T extends DateValue = DateValue", 'import type { DateValue } from "react-aria-components"\n'),
  generic("range-calendar.tsx", "RangeCalendar", "RangeCalendarProps", "rounded-lg border border-border bg-background p-3 text-sm", "T extends DateValue = DateValue", 'import type { DateValue } from "react-aria-components"\n'),
  generic("list-box.tsx", "ListBox", "ListBoxProps", "rounded-lg border border-border bg-background p-1 text-sm", "T extends object = object"),
  generic("list-box-section.tsx", "ListBoxSection", "ListBoxSectionProps", "px-2 py-1 text-xs font-semibold text-muted-foreground", "T extends object = object"),
  generic("menu.tsx", "Menu", "MenuProps", "rounded-lg border border-border bg-popover p-1 text-sm text-popover-foreground shadow-md", "T extends object = object"),
  generic("menu-section.tsx", "MenuSection", "MenuSectionProps", "px-2 py-1 text-xs font-semibold text-muted-foreground", "T extends object = object"),

  wrapped("autocomplete.tsx", "Autocomplete", "AutocompleteProps", "relative"),
]

const specials = [
  {
    file: "close-button.tsx",
    body: `${HDR("CloseButton")}
import { Button, type ButtonProps } from "react-aria-components"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface CloseButtonProps extends ButtonProps {
  /** Erişilebilirlik etiketi (varsayılan: "Kapat") */
  label?: string
}

function CloseButton({ className, label = "Kapat", ...props }: CloseButtonProps) {
  return (
    <Button
      aria-label={label}
      className={cn("inline-flex size-8 shrink-0 items-center justify-center rounded-md text-muted-foreground outline-none transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50", className)}
      {...props}
    >
      <X className="size-4" />
    </Button>
  )
}

export { CloseButton }
export type { CloseButtonProps }
`,
  },
  {
    file: "chip.tsx",
    body: `${HDR("Chip")}
import type * as React from "react"
import { cn } from "@/lib/utils"

interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "secondary"
}

function Chip({ className, variant = "default", ...props }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium",
        variant === "default" && "bg-primary text-primary-foreground",
        variant === "outline" && "border border-border bg-background text-foreground",
        variant === "secondary" && "bg-secondary text-secondary-foreground",
        className
      )}
      {...props}
    />
  )
}

export { Chip }
export type { ChipProps }
`,
  },
  {
    file: "color-input-group.tsx",
    body: `${HDR("ColorInputGroup")}
import { Group, type GroupProps } from "react-aria-components"
import { cn } from "@/lib/utils"

function ColorInputGroup({ className, ...props }: GroupProps) {
  return (
    <Group
      className={cn("flex h-9 w-full items-center gap-1 rounded-lg border border-input bg-background px-2 focus-within:ring-3 focus-within:ring-ring/50", className)}
      {...props}
    />
  )
}

export { ColorInputGroup }
export type { GroupProps as ColorInputGroupProps }
`,
  },
  {
    file: "date-input-group.tsx",
    body: `${HDR("DateInputGroup")}
import { Group, type GroupProps } from "react-aria-components"
import { cn } from "@/lib/utils"

function DateInputGroup({ className, ...props }: GroupProps) {
  return (
    <Group
      className={cn("flex h-9 w-full items-center gap-1 rounded-lg border border-input bg-background px-2 focus-within:ring-3 focus-within:ring-ring/50", className)}
      {...props}
    />
  )
}

export { DateInputGroup }
export type { GroupProps as DateInputGroupProps }
`,
  },
  {
    file: "breadcrumbs.tsx",
    body: `${HDR("Breadcrumbs")}
import { Breadcrumbs, Breadcrumb, type BreadcrumbsProps, type BreadcrumbProps } from "react-aria-components"
import { cn } from "@/lib/utils"

interface BreadcrumbsComponentProps<T extends object = object> extends BreadcrumbsProps<T> {}

function BreadcrumbsComponent<T extends object = object>({ className, ...props }: BreadcrumbsComponentProps<T>) {
  return (
    <Breadcrumbs className={cn("flex items-center gap-1.5 text-sm", className)} {...props} />
  )
}

function BreadcrumbItem({ className, ...props }: BreadcrumbProps) {
  return <Breadcrumb className={cn("flex items-center gap-1.5", className)} {...props} />
}

export { BreadcrumbsComponent as Breadcrumbs, BreadcrumbItem }
export type { BreadcrumbsComponentProps as BreadcrumbsProps, BreadcrumbProps }
`,
  },
  {
    file: "date-picker.tsx",
    body: `${HDR("DatePicker")}
import { DatePicker, type DatePickerProps } from "react-aria-components"
import type { DateValue } from "react-aria-components"
import { cn } from "@/lib/utils"

function DatePickerComponent<T extends DateValue = DateValue>({ className, ...props }: DatePickerProps<T>) {
  return (
    <DatePicker
      className={cn("group/date-picker inline-flex h-9 w-full items-center gap-2 rounded-lg border border-input bg-background px-3 text-sm focus-within:ring-3 focus-within:ring-ring/50", className)}
      {...props}
    />
  )
}

export { DatePickerComponent as DatePicker }
export type { DatePickerProps }
`,
  },
  {
    file: "color-picker.tsx",
    body: `${HDR("ColorPicker")}
import { ColorPicker, type ColorPickerProps } from "react-aria-components"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ColorPickerWrapperProps extends Omit<ColorPickerProps, "children"> {
  className?: string
  children?: ReactNode
}

function ColorPickerComponent({ className, children, ...props }: ColorPickerWrapperProps) {
  return (
    <div className={cn("relative", className)}>
      <ColorPicker {...props}>{children}</ColorPicker>
    </div>
  )
}

export { ColorPickerComponent as ColorPicker }
export type { ColorPickerProps }
`,
  },
  {
    file: "empty-state.tsx",
    body: `${HDR("EmptyState")}
import type * as React from "react"
import { cn } from "@/lib/utils"

interface EmptyStateProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  icon?: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
}

function EmptyState({ className, icon, title, description, action, ...props }: EmptyStateProps) {
  return (
    <div
      className={cn("flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-background p-8 text-center", className)}
      {...props}
    >
      {icon ? <div className="mb-1 flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground">{icon}</div> : null}
      {title ? <h3 className="text-base font-semibold text-foreground">{title}</h3> : null}
      {description ? <p className="max-w-sm text-sm text-muted-foreground">{description}</p> : null}
      {action ? <div className="mt-2">{action}</div> : null}
    </div>
  )
}

export { EmptyState }
export type { EmptyStateProps }
`,
  },
  {
    file: "surface.tsx",
    body: `${HDR("Surface")}
import type * as React from "react"
import { cn } from "@/lib/utils"

interface SurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "card" | "muted" | "elevated"
}

function Surface({ className, variant = "card", ...props }: SurfaceProps) {
  return (
    <div
      className={cn(
        "rounded-xl",
        variant === "card" && "border border-border bg-card text-card-foreground shadow-sm",
        variant === "muted" && "border border-border bg-muted/50 text-foreground",
        variant === "elevated" && "border border-border bg-card text-card-foreground shadow-lg",
        className
      )}
      {...props}
    />
  )
}

export { Surface }
export type { SurfaceProps }
`,
  },
  {
    file: "rac.tsx",
    body: `${HDR("Rac (Provider)")}
import type { ReactNode } from "react"
import { I18nProvider } from "react-aria-components"

interface RacProps {
  locale?: string
  children?: ReactNode
}

function Rac({ locale = "tr-TR", children }: RacProps) {
  return <I18nProvider locale={locale}>{children}</I18nProvider>
}

export { Rac }
export type { RacProps }
`,
  },
  {
    file: "modal.tsx",
    body: `${HDR("Modal")}
import { Modal as ModalPrimitive, ModalOverlay as ModalOverlayPrimitive, type ModalOverlayProps } from "react-aria-components"
import { cn } from "@/lib/utils"

function ModalOverlay({ className, ...props }: ModalOverlayProps) {
  return (
    <ModalOverlayPrimitive
      className={cn("fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm", className)}
      {...props}
    />
  )
}

function Modal({ className, ...props }: ModalOverlayProps) {
  return (
    <ModalPrimitive
      className={cn("max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-xl border border-border bg-background p-6 text-foreground shadow-2xl outline-none", className)}
      {...props}
    />
  )
}

export { Modal, ModalOverlay }
export type { ModalOverlayProps as ModalProps, ModalOverlayProps }
`,
  },
  {
    file: "fieldset.tsx",
    body: `${HDR("Fieldset")}
/**
 * RAC 1.20'de Fieldset yoktur — yerel <fieldset> tabanlı implementasyon.
 */
import type * as React from "react"
import { cn } from "@/lib/utils"

interface FieldsetProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend?: React.ReactNode
}

function Fieldset({ className, legend, children, ...props }: FieldsetProps) {
  return (
    <fieldset
      className={cn("flex flex-col gap-4 rounded-lg border border-border p-4", className)}
      {...props}
    >
      {legend ? <legend className="px-1 text-sm font-medium text-foreground">{legend}</legend> : null}
      {children}
    </fieldset>
  )
}

export { Fieldset }
export type { FieldsetProps }
`,
  },
  {
    file: "switch-group.tsx",
    body: `${HDR("SwitchGroup")}
/**
 * RAC 1.20'de SwitchGroup yoktur — basit kapsayıcı implementasyon.
 */
import type * as React from "react"
import { cn } from "@/lib/utils"

interface SwitchGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

function SwitchGroup({ className, ...props }: SwitchGroupProps) {
  return <div className={cn("flex flex-col gap-2", className)} {...props} />
}

export { SwitchGroup }
export type { SwitchGroupProps }
`,
  },
  {
    file: "progress-circle.tsx",
    body: `${HDR("ProgressCircle")}
/**
 * RAC 1.20'de ProgressCircle yoktur — SVG tabanlı implementasyon.
 */
import type * as React from "react"
import { cn } from "@/lib/utils"

interface ProgressCircleProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  size?: number
  strokeWidth?: number
}

function ProgressCircle({ className, value = 0, size = 32, strokeWidth = 3, ...props }: ProgressCircleProps) {
  const pct = Math.min(Math.max(value, 0), 100)
  const r = (size - strokeWidth) / 2
  const c = 2 * Math.PI * r
  return (
    <div
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn("inline-flex items-center justify-center", className)}
      style={{ width: size, height: size }}
      {...props}
    >
      <svg width={size} height={size} viewBox={\`0 0 \${size} \${size}\`} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth={strokeWidth} className="stroke-muted" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct / 100)}
          className="stroke-primary transition-all"
        />
      </svg>
    </div>
  )
}

export { ProgressCircle }
export type { ProgressCircleProps }
`,
  },
  {
    file: "dropdown.tsx",
    body: `${HDR("Dropdown")}
/**
 * RAC 1.20'de Dropdown yoktur — basit kapsayıcı implementasyon.
 */
import type * as React from "react"
import { cn } from "@/lib/utils"

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {}

function Dropdown({ className, ...props }: DropdownProps) {
  return <div className={cn("relative inline-block", className)} {...props} />
}

export { Dropdown }
export type { DropdownProps }
`,
  },
  {
    file: "scroll-shadow.tsx",
    body: `${HDR("ScrollShadow")}
/**
 * RAC 1.20'de ScrollShadow yoktur — CSS mask tabanlı implementasyon.
 */
import type * as React from "react"
import { cn } from "@/lib/utils"

interface ScrollShadowProps extends React.HTMLAttributes<HTMLDivElement> {
  maxHeight?: number | string
}

function ScrollShadow({ className, maxHeight = 256, style, children, ...props }: ScrollShadowProps) {
  return (
    <div
      className={cn(
        "relative overflow-y-auto [mask-image:linear-gradient(to_bottom,transparent,black_0.75rem,black_calc(100%-0.75rem),transparent)]",
        className
      )}
      style={{ maxHeight, ...style }}
      {...props}
    >
      {children}
    </div>
  )
}

export { ScrollShadow }
export type { ScrollShadowProps }
`,
  },
  {
    file: "tag-group.tsx",
    body: `${HDR("TagGroup")}
import { TagGroup as TagGroupPrimitive, TagList as TagListPrimitive, type TagGroupProps, type TagListProps } from "react-aria-components"
import { cn } from "@/lib/utils"

function TagGroup({ className, ...props }: TagGroupProps) {
  return (
    <TagGroupPrimitive className={cn("flex flex-col gap-2", className)} {...props} />
  )
}

function TagList<T extends object = object>({ className, ...props }: TagListProps<T>) {
  return (
    <TagListPrimitive className={cn("flex flex-wrap gap-2", className)} {...props} />
  )
}

export { TagGroup, TagList }
export type { TagGroupProps, TagListProps }
`,
  },
  {
    file: "icons.tsx",
    body: `${HDR("Icons")}
/**
 * İkon kütüphanesi — lucide-react tüm ikonlarını yeniden dışa aktarır.
 * import { Search } from "@/components/ui/icons"
 */
export * from "lucide-react"
`,
  },
  {
    file: "toast.tsx",
    body: `${HDR("Toast")}
/**
 * shadcn aria registry'sinde Toast yoktur — sonner tabanlıdır.
 * import { toast } from "@/components/ui/toast"
 */
import { Toaster, toast, type ToasterProps } from "sonner"

function Toast(props: ToasterProps) {
  return <Toaster {...props} />
}

export { Toast, Toaster, toast }
export type { ToasterProps }
`,
  },
  {
    file: "index.tsx",
    body: `${HDR("Index (Barrel)")}
/**
 * Envanterdeki TÜM bileşenleri dışa aktaran çatı dosyası.
 * import { Button, Card } from "@/components/ui"
 * (İkonlar: import { Search } from "@/components/ui/icons")
 */
export * from "./accordion"
export * from "./alert"
export * from "./alert-dialog"
export * from "./autocomplete"
export * from "./avatar"
export * from "./badge"
export * from "./breadcrumb"
export { Breadcrumbs, type BreadcrumbsProps } from "./breadcrumbs"
export * from "./button"
export * from "./button-group"
export * from "./calendar"
export * from "./calendar-year-picker"
export * from "./card"
export * from "./checkbox"
export * from "./checkbox-group"
export * from "./chip"
export * from "./close-button"
export * from "./color-area"
export * from "./color-field"
export * from "./color-input-group"
export * from "./color-picker"
export * from "./color-slider"
export * from "./color-swatch"
export * from "./color-swatch-picker"
export * from "./combobox"
export * from "./date-field"
export * from "./date-input-group"
export * from "./date-picker"
export * from "./date-range-picker"
export * from "./description"
export * from "./disclosure"
export * from "./disclosure-group"
export * from "./drawer"
export * from "./dropdown"
export * from "./empty-state"
export * from "./error-message"
export * from "./field-error"
export * from "./fieldset"
export * from "./form"
export * from "./header"
export * from "./input"
export * from "./input-group"
export * from "./input-otp"
export * from "./kbd"
export * from "./label"
export * from "./link"
export * from "./list-box"
export * from "./list-box-item"
export * from "./list-box-section"
export * from "./menu"
export * from "./menu-item"
export * from "./menu-section"
export * from "./meter"
export * from "./modal"
export * from "./number-field"
export * from "./pagination"
export * from "./popover"
export * from "./progress-bar"
export * from "./progress-circle"
export * from "./rac"
export * from "./radio"
export * from "./radio-group"
/* RangeCalendar, shadcn calendar.tsx içinde zaten var */
export * from "./scroll-shadow"
export * from "./search-field"
export * from "./select"
export * from "./separator"
export * from "./skeleton"
export * from "./slider"
export * from "./sonner"
export * from "./spinner"
export * from "./surface"
export * from "./switch"
export * from "./switch-group"
export * from "./table"
export * from "./tabs"
export * from "./tag"
export * from "./tag-group"
export * from "./text"
export * from "./text-field"
export * from "./textarea"
export * from "./time-field"
export { Toast, toast, type ToasterProps } from "./toast"
export * from "./toggle"
export * from "./toggle-button"
export * from "./toggle-button-group"
export * from "./toolbar"
export * from "./tooltip"
`,
  },
]

mkdirSync(UI, { recursive: true })
let count = 0
for (const w of [...wrappers, ...specials]) {
  const p = join(UI, w.file)
  if (existsSync(p)) { console.log("ATLANDI (var):", w.file); continue }
  writeFileSync(p, w.body)
  count++
}
console.log(`\n${count} dosya üretildi → ${UI}`)
