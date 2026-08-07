/**
 * ShadcnCombobox
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Otomatik tamamlamalı giriş — filtre + açılır liste.
 * Not: kaynak base-ui kullanır — üçüncü parti olduğundan kendi çekirdeği yazıldı.
 *   <ShadcnCombobox items={["Next.js", "Astro"]} value={value} onChange={setValue} />
 * Özellikler: multiple · isDisabled · isInvalid · clearable.
 * @id 898
 * @category Combobox
 * @subcategory ShadcnCombobox
 * @source shadcn
 */
import { useState, type HTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import { Check, ChevronDown, X } from "@/components/ui/icons"

interface ShadcnComboboxProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  items?: string[]
  value?: string | string[]
  defaultValue?: string | string[]
  onChange?: (value: string | string[]) => void
  multiple?: boolean
  placeholder?: string
  isDisabled?: boolean
  isInvalid?: boolean
  clearable?: boolean
}

function ShadcnCombobox({
  className,
  items = [],
  value,
  defaultValue,
  onChange,
  multiple = false,
  placeholder = "Select an item",
  isDisabled,
  isInvalid,
  clearable = false,
  ...props
}: ShadcnComboboxProps) {
  const [internal, setInternal] = useState<string | string[]>(defaultValue ?? (multiple ? [] : ""))
  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false)

  const current = value !== undefined ? value : internal
  const setValue = (v: string | string[]) => {
    if (value === undefined) setInternal(v)
    onChange?.(v)
  }

  const isSelected = (item: string) => (multiple ? (current as string[]).includes(item) : current === item)
  const toggleItem = (item: string) => {
    if (multiple) {
      const arr = current as string[]
      setValue(arr.includes(item) ? arr.filter((x) => x !== item) : [...arr, item])
    } else {
      setValue(item)
      setOpen(false)
    }
  }

  const filtered = items.filter((i) => i.toLowerCase().includes(query.toLowerCase()))
  const label = multiple
    ? (current as string[]).length > 0
      ? `${(current as string[]).length} selected`
      : placeholder
    : current
      ? (current as string)
      : placeholder

  return (
    <div data-slot="shadcn-combobox" className={cn("relative w-full", className)} {...props}>
      <div
        className={cn(
          "flex min-h-9 w-full cursor-pointer items-center justify-between gap-2 rounded-md border border-border bg-background px-3 py-1.5 text-sm transition-colors outline-none",
          "focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/40",
          isInvalid && "border-red-500",
          isDisabled && "cursor-not-allowed opacity-50",
          !current && "text-muted-foreground"
        )}
        onClick={() => !isDisabled && setOpen((v) => !v)}
      >
        {open ? (
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            disabled={isDisabled}
            className="w-full bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <span className="truncate">{label}</span>
        )}
        {clearable && !multiple && current ? (
          <button
            type="button"
            aria-label="Clear"
            onClick={(e) => {
              e.stopPropagation()
              setValue("")
            }}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        ) : (
          <ChevronDown className={cn("size-4 shrink-0 text-muted-foreground transition-transform", open && "rotate-180")} />
        )}
      </div>
      {open && !isDisabled && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-full z-50 mt-1 w-full overflow-hidden rounded-lg border border-border bg-background shadow-lg">
            <ul className="max-h-64 overflow-y-auto p-1" role="listbox">
              {filtered.length === 0 && (
                <li className="px-2.5 py-1.5 text-sm text-muted-foreground">No items found.</li>
              )}
              {filtered.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={isSelected(item)}
                    onClick={() => toggleItem(item)}
                    className={cn(
                      "flex w-full cursor-pointer items-center gap-2 rounded-md px-2.5 py-1.5 text-sm text-foreground transition-colors outline-none select-none",
                      "hover:bg-muted",
                      isSelected(item) && "bg-muted font-medium"
                    )}
                  >
                    {multiple && (
                      <span className={cn("flex size-4 items-center justify-center rounded-[4px] border border-border", isSelected(item) && "border-blue-600 bg-blue-600")}>
                        {isSelected(item) && <Check className="size-3 text-white" />}
                      </span>
                    )}
                    <span className="flex-1 text-left">{item}</span>
                    {!multiple && isSelected(item) && <Check className="size-4 text-blue-600" />}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  )
}

export { ShadcnCombobox }
export type { ShadcnComboboxProps }
