/**
 * MtMultiSelect
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Çoklu seçim — data, searchable, clearable, pills görünümü.
 *   <MtMultiSelect data={["React", "Vue"]} label="Frameworks" searchable />
 * @id 1300
 * @category Combobox
 * @subcategory MtMultiSelect
 * @source mantine
 */
import { useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Check, ChevronDown, X } from "@/components/ui/icons"

export interface MtMultiSelectData {
  value: string
  label: string
  disabled?: boolean
}

interface MtMultiSelectProps {
  data?: (string | MtMultiSelectData)[]
  value?: string[]
  defaultValue?: string[]
  onChange?: (value: string[]) => void
  label?: ReactNode
  description?: ReactNode
  error?: ReactNode
  placeholder?: string
  searchable?: boolean
  clearable?: boolean
  disabled?: boolean
  hidePickedOptions?: boolean
  className?: string
}

function MtMultiSelect({
  data = [],
  value,
  defaultValue = [],
  onChange,
  label,
  description,
  error,
  placeholder = "Select options",
  searchable,
  clearable,
  disabled,
  hidePickedOptions,
  className,
}: MtMultiSelectProps) {
  const [internal, setInternal] = useState<string[]>(defaultValue)
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const values = value !== undefined ? value : internal

  const items = data.map((d) => (typeof d === "string" ? { value: d, label: d } : d))
  const visible = hidePickedOptions ? items.filter((i) => !values.includes(i.value)) : items
  const filtered = visible.filter((i) => !query || i.label.toLowerCase().includes(query.toLowerCase()))

  const set = (v: string[]) => {
    if (value === undefined) setInternal(v)
    onChange?.(v)
  }

  const toggle = (v: string) => {
    set(values.includes(v) ? values.filter((x) => x !== v) : [...values, v])
  }

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {label && <span className="text-sm font-medium text-foreground">{label}</span>}
      {description && <p className="text-xs text-muted-foreground">{description}</p>}
      <div className="relative">
        <div
          data-slot="mt-multi-select"
          onClick={() => !disabled && setOpen((v) => !v)}
          className={cn(
            "flex min-h-9 w-full cursor-pointer flex-wrap items-center gap-1 rounded-md border border-border bg-background px-2 py-1.5 transition-colors",
            "focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/30",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red-500",
            disabled && "pointer-events-none opacity-50"
          )}
        >
          {values.length === 0 && !searchable && <span className="px-1 text-sm text-muted-foreground">{placeholder}</span>}
          {values.map((v) => {
            const item = items.find((i) => i.value === v)
            return (
              <span key={v} className="inline-flex items-center gap-1 rounded-full bg-gray-200 px-2 py-0.5 text-sm">
                {item?.label ?? v}
                <button type="button" aria-label={`Remove ${v}`} onClick={(e) => { e.stopPropagation(); toggle(v) }} className="cursor-pointer text-muted-foreground hover:text-foreground">
                  <X className="size-3" />
                </button>
              </span>
            )
          })}
          {searchable && (
            <input
              value={query}
              disabled={disabled}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={values.length === 0 ? placeholder : ""}
              className="min-w-20 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              onClick={(e) => e.stopPropagation()}
            />
          )}
          <span className="ml-auto flex items-center gap-1">
            {clearable && values.length > 0 && (
              <span role="button" tabIndex={0} aria-label="Clear all" onClick={(e) => { e.stopPropagation(); set([]) }} className="text-muted-foreground hover:text-foreground">
                <X className="size-3.5" />
              </span>
            )}
            <ChevronDown className="size-4 text-muted-foreground" />
          </span>
        </div>
        {open && !disabled && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            <div className="absolute left-0 top-full z-50 mt-1 w-full rounded-md border border-border bg-background p-1 shadow-lg">
              <ul className="max-h-56 overflow-y-auto">
                {filtered.length === 0 && <li className="px-2.5 py-1.5 text-sm text-muted-foreground">Nothing found</li>}
                {filtered.map((item) => (
                  <li key={item.value}>
                    <button
                      type="button"
                      onClick={() => toggle(item.value)}
                      disabled={item.disabled}
                      className={cn(
                        "flex w-full cursor-pointer items-center gap-2 rounded px-2.5 py-1.5 text-left text-sm transition-colors hover:bg-muted",
                        "disabled:cursor-not-allowed disabled:opacity-50",
                        values.includes(item.value) && "bg-muted font-medium"
                      )}
                    >
                      <span className={cn("flex size-4 items-center justify-center rounded border border-border", values.includes(item.value) && "border-blue-600 bg-blue-600")}>
                        {values.includes(item.value) && <Check className="size-3 text-white" />}
                      </span>
                      <span className="flex-1">{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

export { MtMultiSelect }
export type { MtMultiSelectData as MtMultiSelectDataItem, MtMultiSelectProps }
