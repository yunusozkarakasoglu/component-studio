/**
 * Combobox
 * Saf React bileşen (bağımlılıksız).
 * Metin girişi + listbox: yazınca filtre + popover açılır, seçim geri döner.
 *   <Combobox items={animals} label="Favorite Animal" placeholder="Search..." />
 * Özellikler: selectedKey/defaultSelectedKey/onSelectionChange ·
 * inputValue/defaultInputValue/onInputChange · selectionMode (single/multiple) ·
 * disabledKeys · defaultFilter · allowsCustomValue · allowsEmptyCollection ·
 * menuTrigger (focus/input/manual) · isDisabled/isRequired · fullWidth.
 * @id 246
 * @category Combobox
 */
import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { ChevronsUpDown, X } from "@/components/ui/icons"

export interface ComboboxItem {
  id: string
  name: string
}

type MenuTrigger = "focus" | "input" | "manual"

function Combobox({
  items,
  selectedKey,
  defaultSelectedKey,
  onSelectionChange,
  inputValue,
  defaultInputValue,
  onInputChange,
  selectionMode = "single",
  disabledKeys = [],
  defaultFilter,
  isDisabled,
  isRequired,
  name,
  allowsCustomValue,
  allowsEmptyCollection,
  menuTrigger = "focus",
  fullWidth,
  label,
  description,
  placeholder = "Seç…",
  className,
}: {
  items: ComboboxItem[]
  selectedKey?: string | string[] | null
  defaultSelectedKey?: string | string[]
  onSelectionChange?: (key: string | string[] | null) => void
  inputValue?: string
  defaultInputValue?: string
  onInputChange?: (value: string) => void
  selectionMode?: "single" | "multiple"
  disabledKeys?: string[]
  defaultFilter?: (text: string, inputValue: string) => boolean
  isDisabled?: boolean
  isRequired?: boolean
  /** Form gönderiminde kullanılan input adı */
  name?: string
  allowsCustomValue?: boolean
  allowsEmptyCollection?: boolean
  menuTrigger?: MenuTrigger
  fullWidth?: boolean
  label?: ReactNode
  description?: ReactNode
  placeholder?: string
  className?: string
}) {
  const [internalKey, setInternalKey] = useState<string | string[] | null>(defaultSelectedKey ?? null)
  const [internalInput, setInternalInput] = useState(defaultInputValue ?? "")
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const controlledKey = selectedKey !== undefined
  const selected = controlledKey ? selectedKey : internalKey
  const controlledInput = inputValue !== undefined
  const input = controlledInput ? inputValue : internalInput

  const setKey = (k: string | string[] | null) => {
    if (!controlledKey) setInternalKey(k)
    onSelectionChange?.(k)
  }
  const setInput = (v: string) => {
    if (!controlledInput) setInternalInput(v)
    onInputChange?.(v)
  }

  // Dış tıklama / ESC
  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); inputRef.current?.focus() }
    }
    document.addEventListener("mousedown", onDown)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onDown)
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  const filter = defaultFilter ?? ((text: string, q: string) => text.toLowerCase().includes(q.toLowerCase()))
  const filtered = allowsEmptyCollection ? items : items.filter((i) => filter(i.name, input))

  const isSelected = (id: string) => (Array.isArray(selected) ? selected.includes(id) : selected === id)

  const select = (id: string) => {
    if (isDisabled || disabledKeys.includes(id)) return
    const item = items.find((i) => i.id === id)
    if (selectionMode === "single") {
      setKey(id)
      setInput(item?.name ?? id)
      setOpen(false)
      inputRef.current?.focus()
    } else {
      const arr = Array.isArray(selected) ? [...selected] : []
      setKey(arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id])
    }
  }

  const selectedItems = items.filter((i) => isSelected(i.id))
  const showValue = selectionMode === "multiple" && selectedItems.length > 0

  return (
    <div ref={rootRef} className={cn("relative flex flex-col gap-1.5", fullWidth && "w-full", isDisabled && "opacity-60", className)}>
      {label && <label className="text-sm font-medium text-foreground">{label}</label>}

      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          name={name}
          value={input}
          disabled={isDisabled}
          required={isRequired || undefined}
          placeholder={placeholder}
          onFocus={() => menuTrigger !== "manual" && setOpen(true)}
          onChange={(e) => {
            setInput(e.target.value)
            if (menuTrigger === "input" || menuTrigger === "focus") setOpen(true)
          }}
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
          className={cn(
            "h-10 w-full rounded-lg border border-border bg-background px-3 pr-9 text-sm outline-none transition-colors focus:border-black/50 focus-visible:ring-3 focus-visible:ring-ring/50",
            isDisabled && "cursor-not-allowed"
          )}
        />
        <button
          type="button"
          tabIndex={-1}
          aria-label="Seçenekleri aç"
          disabled={isDisabled}
          onClick={() => setOpen(!open)}
          className="absolute top-1/2 right-2 flex -translate-y-1/2 items-center justify-center rounded p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <ChevronsUpDown className={cn("size-4 transition-transform", open && "rotate-180")} />
        </button>
      </div>

      {/* Çoklu seçim tag'leri */}
      {showValue && (
        <div className="flex flex-wrap gap-1.5">
          {selectedItems.map((item) => (
            <span key={item.id} className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 text-xs font-medium">
              {item.name}
              <button
                type="button"
                aria-label={`${item.name} kaldır`}
                onClick={() => select(item.id)}
                className="flex size-3.5 items-center justify-center rounded-full text-muted-foreground hover:bg-black/10 hover:text-foreground"
              >
                <X className="size-2.5" />
              </button>
            </span>
          ))}
        </div>
      )}

      {open && (
        <div
          role="listbox"
          className="absolute top-full z-40 mt-1.5 w-full min-w-[200px] rounded-lg border border-border bg-popover p-1 text-popover-foreground shadow-lg"
        >
          {filtered.length === 0 ? (
            <div className="px-3 py-6 text-center text-sm text-muted-foreground">
              {allowsCustomValue ? "Özel değer yazabilirsiniz" : "Sonuç bulunamadı"}
            </div>
          ) : (
            filtered.map((item) => {
              const disabled = disabledKeys.includes(item.id)
              const sel = isSelected(item.id)
              return (
                <div
                  key={item.id}
                  role="option"
                  aria-selected={sel}
                  onClick={() => select(item.id)}
                  className={cn(
                    "flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm transition-colors",
                    sel ? "bg-blue-600 text-white" : "hover:bg-muted",
                    disabled && "cursor-not-allowed opacity-40 hover:bg-transparent"
                  )}
                >
                  {item.name}
                </div>
              )
            })
          )}
        </div>
      )}

      {description && <p className="text-xs text-muted-foreground">{description}</p>}
    </div>
  )
}

export { Combobox }
