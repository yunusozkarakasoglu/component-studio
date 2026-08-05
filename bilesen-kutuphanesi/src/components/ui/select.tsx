/**
 * Select
 * Saf React bileşen (bağımlılıksız).
 * Açılır seçim alanı — Trigger/Value/Indicator/Popover compound.
 *   <Select className="w-[256px]" placeholder="Seçin">
 *     <Label>State</Label>
 *     <SelectTrigger>
 *       <SelectValue />
 *       <SelectIndicator />
 *     </SelectTrigger>
 *     <SelectPopover>
 *       <ListBox>
 *         <ListBoxItem id="florida" textValue="Florida">Florida<ListBoxItemIndicator /></ListBoxItem>
 *       </ListBox>
 *     </SelectPopover>
 *   </Select>
 * Özellikler: value/defaultValue/onChange (id) · placeholder · isDisabled ·
 * isRequired · isInvalid · variant (primary/secondary) · multiple ·
 * dışarı tıklama kapatma · seçili öğe işareti (data-selected).
 * @id 568
 * @category Combobox
 * @subcategory Select
 */
import { createContext, useContext, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Check, ChevronDown } from "@/components/ui/icons"

/* ---------- Types ---------- */

type SelectVariant = "primary" | "secondary"

interface SelectValueItem {
  id: string
  label: string
}

interface SelectContextValue {
  value: SelectValueItem | null
  select: (id: string, label: string) => void
  isOpen: boolean
  open: () => void
  close: () => void
  placeholder?: string
  isDisabled: boolean
  isInvalid: boolean
  variant: SelectVariant
  multiple: boolean
  selectedIds: string[]
}

const SelectContext = createContext<SelectContextValue | null>(null)

function useSelect(): SelectContextValue {
  const ctx = useContext(SelectContext)
  if (!ctx) throw new Error("useSelect, <Select> içinde kullanılmalı")
  return ctx
}

interface SelectProps {
  children?: ReactNode
  className?: string
  value?: string | string[] | null
  defaultValue?: string | string[] | null
  onChange?: (value: string | string[] | null) => void
  placeholder?: string
  isDisabled?: boolean
  isRequired?: boolean
  isInvalid?: boolean
  variant?: SelectVariant
  multiple?: boolean
  "aria-label"?: string
}

function Select({
  children,
  className,
  value: valueProp,
  defaultValue,
  onChange,
  placeholder,
  isDisabled = false,
  isRequired = false,
  isInvalid = false,
  variant = "primary",
  multiple = false,
  ...aria
}: SelectProps) {
  const [internalValue, setInternalValue] = useState<string | string[] | null>(defaultValue ?? null)
  const [labels, setLabels] = useState<Record<string, string>>({})
  const [isOpen, setIsOpen] = useState(false)

  const value = valueProp !== undefined ? valueProp : internalValue

  const setValue = (v: string | string[] | null) => {
    if (!valueProp) setInternalValue(v)
    onChange?.(v)
  }

  const selectedIds = Array.isArray(value) ? value : value ? [value] : []
  const selectedItems: SelectValueItem[] = selectedIds
    .map((id) => ({ id, label: labels[id] ?? id }))
    .filter((i) => i.id)

  const select = (id: string, label: string) => {
    const nextLabels = { ...labels, [id]: label }
    setLabels(nextLabels)
    if (multiple) {
      const next = selectedIds.includes(id) ? selectedIds.filter((k) => k !== id) : [...selectedIds, id]
      setValue(next.length ? next : null)
    } else {
      setValue(selectedIds.includes(id) ? null : id)
      setIsOpen(false)
    }
  }

  const contextValue: SelectContextValue = {
    value: selectedItems[0] ?? null,
    select,
    isOpen,
    open: () => !isDisabled && setIsOpen(true),
    close: () => setIsOpen(false),
    placeholder,
    isDisabled,
    isInvalid,
    variant,
    multiple,
    selectedIds,
  }

  return (
    <SelectContext.Provider value={contextValue}>
      <div data-slot="select" className={cn("flex flex-col gap-1.5", className)} {...aria}>
        {children}
      </div>
    </SelectContext.Provider>
  )
}

/* ---------- Trigger ---------- */

interface SelectTriggerProps {
  children?: ReactNode
  className?: string
}

function SelectTrigger({ children, className }: SelectTriggerProps) {
  const ctx = useSelect()
  return (
    <button
      type="button"
      data-slot="select-trigger"
      role="combobox"
      aria-expanded={ctx.isOpen}
      aria-invalid={ctx.isInvalid || undefined}
      disabled={ctx.isDisabled}
      onClick={ctx.isOpen ? ctx.close : ctx.open}
      className={cn(
        "inline-flex h-10 w-full items-center justify-between gap-2 rounded-lg border border-border bg-background px-3 text-sm text-foreground transition-colors outline-none",
        "hover:bg-muted/40 focus-visible:ring-3 focus-visible:ring-ring/40",
        ctx.variant === "secondary" && "border-transparent bg-muted/60",
        ctx.isOpen && "border-ring ring-3 ring-ring/40",
        ctx.isInvalid && "border-red-500 focus-visible:ring-red-500/30",
        ctx.isDisabled && "cursor-not-allowed opacity-60",
        className
      )}
    >
      {children}
    </button>
  )
}

/* ---------- Value ---------- */

interface SelectValueProps {
  className?: string
  placeholder?: string
}

function SelectValue({ className, placeholder }: SelectValueProps) {
  const ctx = useSelect()
  const text = ctx.value ? ctx.value.label : (placeholder ?? ctx.placeholder ?? "Seçin…")
  return (
    <span data-slot="select-value" className={cn("flex-1 truncate text-left", !ctx.value && "text-muted-foreground", className)}>
      {text}
    </span>
  )
}

/* ---------- Indicator ---------- */

interface SelectIndicatorProps {
  className?: string
}

function SelectIndicator({ className }: SelectIndicatorProps) {
  const ctx = useSelect()
  return (
    <span data-slot="select-indicator" className={cn("flex shrink-0 items-center text-muted-foreground transition-transform", ctx.isOpen && "rotate-180", className)}>
      <ChevronDown className="size-4" />
    </span>
  )
}

/* ---------- Popover ---------- */

interface SelectPopoverProps {
  children?: ReactNode
  className?: string
}

function SelectPopover({ children, className }: SelectPopoverProps) {
  const ctx = useSelect()

  const handleClick = (e: React.MouseEvent) => {
    const item = (e.target as HTMLElement).closest("[data-slot=listbox-item]") as HTMLElement | null
    if (!item) return
    if (item.classList.contains("pointer-events-none")) return
    const id = item.id || item.textContent?.trim() || ""
    const label = item.textContent?.trim() || id
    ctx.select(id, label)
  }

  if (!ctx.isOpen) return null

  return (
    <div
      data-slot="select-popover"
      data-entering=""
      className={cn(
        "absolute z-50 mt-1 w-full min-w-40 rounded-lg border border-border bg-background shadow-xl",
        "data-[entering]:animate-in data-[entering]:fade-in-0 data-[entering]:zoom-in-95 data-[entering]:duration-150",
        className
      )}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

/* ---------- Seçim işareti (ListBoxItemIndicator ile birlikte) ---------- */

interface SelectItemIndicatorProps {
  className?: string
}

function SelectItemIndicator({ className }: SelectItemIndicatorProps) {
  return <Check className={cn("size-4", className)} />
}

export { Select, SelectIndicator, SelectItemIndicator, SelectPopover, SelectTrigger, SelectValue, useSelect }
export type { SelectIndicatorProps, SelectPopoverProps, SelectProps, SelectTriggerProps, SelectValueProps, SelectVariant }
