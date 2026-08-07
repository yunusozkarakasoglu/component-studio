/**
 * MtSelect
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Açılır seçim — data, searchable, clearable, allowDeselect, groups.
 *   <MtSelect data={["React", "Vue"]} label="Framework" searchable />
 * @id 1299
 * @category Combobox
 * @subcategory MtSelect
 * @source mantine
 */
import { useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Check, ChevronDown, Search, X } from "@/components/ui/icons"

export interface MtSelectData {
  value: string
  label: string
  disabled?: boolean
}

interface MtSelectProps {
  data?: (string | MtSelectData)[]
  value?: string | null
  defaultValue?: string | null
  onChange?: (value: string | null) => void
  label?: ReactNode
  description?: ReactNode
  error?: ReactNode
  placeholder?: string
  searchable?: boolean
  clearable?: boolean
  allowDeselect?: boolean
  disabled?: boolean
  loading?: boolean
  limit?: number
  nothingFound?: ReactNode
  className?: string
}

function MtSelect({
  data = [],
  value,
  defaultValue = null,
  onChange,
  label,
  description,
  error,
  placeholder = "Select option",
  searchable,
  clearable,
  allowDeselect = true,
  disabled,
  loading,
  limit = 100,
  nothingFound = "Nothing found",
  className,
}: MtSelectProps) {
  const [internal, setInternal] = useState<string | null>(defaultValue)
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const current = value !== undefined ? value : internal

  const items = data.map((d) => (typeof d === "string" ? { value: d, label: d } : d))
  const selected = items.find((i) => i.value === current)
  const filtered = items
    .filter((i) => !query || i.label.toLowerCase().includes(query.toLowerCase()))
    .slice(0, limit)

  const set = (v: string | null) => {
    if (value === undefined) setInternal(v)
    onChange?.(v)
  }

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {label && <span className="text-sm font-medium text-foreground">{label}</span>}
      {description && <p className="text-xs text-muted-foreground">{description}</p>}
      <div className="relative">
        <button
          type="button"
          data-slot="mt-select"
          disabled={disabled || loading}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "flex h-9 w-full cursor-pointer items-center justify-between gap-2 rounded-md border border-border bg-background px-3 text-sm text-foreground transition-colors outline-none",
            "hover:bg-muted focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/30",
            "disabled:cursor-not-allowed disabled:opacity-50",
            !selected && "text-muted-foreground",
            error && "border-red-500",
            className
          )}
        >
          <span className="truncate">{selected ? selected.label : placeholder}</span>
          <span className="flex shrink-0 items-center gap-1">
            {clearable && selected && (
              <span
                role="button"
                tabIndex={0}
                aria-label="Clear"
                onClick={(e) => { e.stopPropagation(); set(null) }}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="size-3.5" />
              </span>
            )}
            <ChevronDown className="size-4 text-muted-foreground" />
          </span>
        </button>
        {open && !disabled && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            <div className="absolute left-0 top-full z-50 mt-1 w-full rounded-md border border-border bg-background p-1 shadow-lg">
              {searchable && (
                <div className="relative mb-1">
                  <Search className="absolute left-2 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
                  <input
                    autoFocus
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                    className="h-7 w-full rounded border border-border bg-background pl-7 pr-2 text-sm outline-none"
                  />
                </div>
              )}
              <ul className="max-h-56 overflow-y-auto">
                {filtered.length === 0 && (
                  <li className="px-2.5 py-1.5 text-sm text-muted-foreground">{nothingFound}</li>
                )}
                {filtered.map((item) => (
                  <li key={item.value}>
                    <button
                      type="button"
                      onClick={() => {
                        const next = allowDeselect && current === item.value ? null : item.value
                        set(next)
                        setOpen(false)
                        setQuery("")
                      }}
                      disabled={item.disabled}
                      className={cn(
                        "flex w-full cursor-pointer items-center gap-2 rounded px-2.5 py-1.5 text-left text-sm transition-colors hover:bg-muted",
                        "disabled:cursor-not-allowed disabled:opacity-50",
                        current === item.value && "bg-muted font-medium"
                      )}
                    >
                      <span className="flex-1">{item.label}</span>
                      {current === item.value && <Check className="size-4 text-blue-600" />}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
      {loading && <p className="text-xs text-muted-foreground">Loading…</p>}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

export { MtSelect }
export type { MtSelectData as MtSelectDataItem, MtSelectProps }
