/**
 * Autocomplete
 * HeroUI autocomplete'ten uyarlanmış — saf React (bağımlılıksız).
 * Arama + filtreleme + seçim (single/multiple) tek bileşende:
 *   <Autocomplete items={states} selectionMode="single" value={v} onChange={setV} label="State" />
 * Özellikler: selectionMode · value/onChange (kontrollü) · defaultValue · placeholder
 * · label/description · isDisabled · disabledKeys · fullWidth · variant
 * (primary/secondary) · isOpen/onOpenChange (kontrollü açılış) · allowsEmptyCollection.
 * @id 135
 * @category Form Elemanları
 */
import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { ChevronsUpDown, Search, X } from "@/components/ui/icons"

export interface AutocompleteItem {
  id: string
  name: string
}

interface AutocompleteProps {
  items: AutocompleteItem[]
  selectionMode?: "single" | "multiple"
  /** Kontrollü seçim (single: id | null · multiple: id[] | null) */
  value?: string | string[] | null
  /** Bağımsız kullanım için ilk seçim */
  defaultValue?: string | string[]
  onChange?: (value: string | string[] | null) => void
  placeholder?: string
  label?: ReactNode
  description?: ReactNode
  isDisabled?: boolean
  /** Seçilemeyecek item id'leri */
  disabledKeys?: string[]
  fullWidth?: boolean
  variant?: "primary" | "secondary"
  /** Kontrollü açılış */
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
  /** Boş koleksiyonla da çalışır */
  allowsEmptyCollection?: boolean
  className?: string
}

function Autocomplete({
  items,
  selectionMode = "single",
  value,
  defaultValue,
  onChange,
  placeholder = "Select…",
  label,
  description,
  isDisabled,
  disabledKeys = [],
  fullWidth,
  variant = "primary",
  isOpen,
  onOpenChange,
  className,
}: AutocompleteProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const [internalValue, setInternalValue] = useState<string | string[] | null>(defaultValue ?? null)
  const [query, setQuery] = useState("")
  const rootRef = useRef<HTMLDivElement>(null)

  const controlled = value !== undefined
  const selected = controlled ? (value ?? null) : internalValue
  const open = isOpen ?? internalOpen

  const setOpen = (v: boolean) => {
    if (isOpen === undefined) setInternalOpen(v)
    onOpenChange?.(v)
  }
  const setSelected = (v: string | string[] | null) => {
    if (!controlled) setInternalValue(v)
    onChange?.(v)
  }

  // Dış tıklama / ESC ile kapat
  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("mousedown", onDown)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onDown)
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  const q = query.trim().toLowerCase()
  const filtered = q
    ? items.filter((i) => i.name.toLowerCase().includes(q))
    : items

  const isSelected = (id: string) =>
    Array.isArray(selected) ? selected.includes(id) : selected === id

  const toggle = (id: string) => {
    if (isDisabled || disabledKeys.includes(id)) return
    if (selectionMode === "single") {
      setSelected(selected === id ? null : id)
      setOpen(false)
    } else {
      const arr = Array.isArray(selected) ? [...selected] : []
      setSelected(arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id])
    }
  }

  const clear = () => {
    setSelected(selectionMode === "multiple" ? [] : null)
    setQuery("")
  }

  const selectedItems = items.filter((i) => isSelected(i.id))
  const triggerLabel =
    selectionMode === "single"
      ? selectedItems[0]?.name
      : selectedItems.length > 0
        ? `${selectedItems.length} seçili`
        : null

  return (
    <div ref={rootRef} className={cn("relative", fullWidth && "w-full", className)}>
      {label && (
        <label className="mb-1.5 block text-sm font-medium text-foreground">{label}</label>
      )}

      {/* Trigger */}
      <button
        type="button"
        disabled={isDisabled}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={cn(
          "flex min-h-10 w-full items-center gap-2 rounded-lg border border-border bg-background px-3 text-left text-sm outline-none transition-colors hover:border-black/40 focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50",
          variant === "primary" && "shadow-sm",
          open && "border-black/50"
        )}
      >
        <span className={cn("min-w-0 flex-1 truncate", !triggerLabel && "text-muted-foreground")}>
          {triggerLabel ?? placeholder}
        </span>
        {selectedItems.length > 0 && (
          <span
            role="button"
            tabIndex={-1}
            aria-label="Temizle"
            onClick={(e) => {
              e.stopPropagation()
              clear()
            }}
            className="flex size-5 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="size-3.5" />
          </span>
        )}
        <ChevronsUpDown className={cn("size-4 shrink-0 text-muted-foreground transition-transform", open && "rotate-180")} />
      </button>

      {/* Popover */}
      {open && (
        <div
          role="listbox"
          className="absolute top-full z-40 mt-1.5 w-full min-w-[200px] overflow-hidden rounded-lg border border-border bg-popover text-popover-foreground shadow-lg"
        >
          {/* Arama */}
          <div className="relative border-b border-border">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ara…"
              className="w-full bg-transparent py-2.5 pr-3 pl-9 text-sm outline-none placeholder:text-muted-foreground/60"
            />
          </div>

          {/* Liste */}
          <div className="max-h-60 overflow-y-auto p-1">
            {filtered.length === 0 ? (
              <div className="px-3 py-6 text-center text-sm text-muted-foreground">
                Sonuç bulunamadı
              </div>
            ) : (
              filtered.map((item) => {
                const disabled = disabledKeys.includes(item.id)
                const selectedNow = isSelected(item.id)
                return (
                  <div
                    key={item.id}
                    role="option"
                    aria-selected={selectedNow}
                    onClick={() => toggle(item.id)}
                    className={cn(
                      "flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm transition-colors",
                      selectedNow ? "bg-blue-600 text-white" : "hover:bg-muted",
                      disabled && "cursor-not-allowed opacity-40 hover:bg-transparent"
                    )}
                  >
                    {item.name}
                    {selectedNow && selectionMode === "single" && <CheckMark />}
                  </div>
                )
              })
            )}
          </div>
        </div>
      )}

      {description && <p className="mt-1 text-xs text-muted-foreground">{description}</p>}
    </div>
  )
}

function CheckMark() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export { Autocomplete }
export type { AutocompleteProps }
