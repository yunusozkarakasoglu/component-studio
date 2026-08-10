/**
 * MuiAutocomplete
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Otomatik tamamlama — yazınca filtreleyen, seçim yapılabilen giriş.
 *   <MuiAutocomplete options={["Elma","Armut"]} label="Meyve" />
 * options: string[] · label · value/defaultValue · freeSolo (serbest yazım)
 * multiple (çoklu seçim) · disabled · placeholder
 * @id 1970
 * @category Seçim
 * @subcategory MuiAutocomplete
 * @source mui
 */
import { useRef, useState, type KeyboardEvent } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown, X } from "@/components/ui/icons"

interface MuiAutocompleteProps {
  options?: string[]
  label?: string
  value?: string | string[] | null
  defaultValue?: string | string[] | null
  onChange?: (value: string | string[] | null) => void
  freeSolo?: boolean
  multiple?: boolean
  disabled?: boolean
  placeholder?: string
  className?: string
}

function MuiAutocomplete({
  options = ["Elma", "Armut", "Muz", "Çilek", "Kiraz", "Üzüm"],
  label,
  value,
  defaultValue,
  onChange,
  freeSolo = false,
  multiple = false,
  disabled = false,
  placeholder,
  className,
}: MuiAutocompleteProps) {
  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false)
  const [internal, setInternal] = useState<string | string[] | null>(defaultValue ?? null)
  const [highlight, setHighlight] = useState(0)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const active = value ?? internal
  const selected: string[] = Array.isArray(active) ? active : active ? [active] : []
  const isSelected = (o: string) => selected.includes(o)

  const filtered = options.filter((o) => o.toLowerCase().includes(query.toLowerCase()))
  const showList = open && (filtered.length > 0 || freeSolo)

  const commit = (v: string | null) => {
    let next: string | string[] | null
    if (multiple) {
      const arr = [...selected]
      if (v) {
        if (arr.includes(v)) arr.splice(arr.indexOf(v), 1)
        else arr.push(v)
      }
      next = arr
    } else {
      next = v
    }
    setInternal(next)
    if (onChange) onChange(next)
    setQuery("")
    setOpen(false)
  }

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") setHighlight((h) => Math.min(h + 1, filtered.length - 1))
    if (e.key === "ArrowUp") setHighlight((h) => Math.max(h - 1, 0))
    if (e.key === "Enter" && showList) {
      e.preventDefault()
      commit(filtered[highlight] ?? null)
    }
    if (e.key === "Escape") setOpen(false)
  }

  return (
    <div className={cn("relative w-full max-w-sm", className)}>
      {label && <label className="mb-1 block text-sm text-gray-700">{label}</label>}
      {/* Seçili (multiple) etiketler */}
      {multiple && selected.length > 0 && (
        <div className="mb-1 flex flex-wrap gap-1">
          {selected.map((s) => (
            <span key={s} className="inline-flex items-center gap-1 rounded-full bg-gray-200 px-2 py-0.5 text-xs text-gray-800">
              {s}
              <button type="button" aria-label={`${s} kaldır`} onClick={() => commit(null)} className="cursor-pointer hover:text-gray-500">
                <X className="size-3" />
              </button>
            </span>
          ))}
        </div>
      )}
      <div className="relative">
        <input
          ref={inputRef}
          value={query}
          disabled={disabled}
          onChange={(e) => {
            setQuery(e.target.value)
            setOpen(true)
            setHighlight(0)
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 120)}
          onKeyDown={handleKey}
          placeholder={selected.length > 0 && !multiple ? selected[0] : placeholder}
          aria-label={label}
          aria-expanded={open}
          aria-haspopup="listbox"
          className={cn(
            "w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none transition-colors focus:border-blue-500",
            disabled && "cursor-not-allowed bg-gray-50 opacity-60"
          )}
        />
        <ChevronDown className="absolute right-2.5 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
      </div>
      {/* Liste */}
      {showList && (
        <ul
          role="listbox"
          className="absolute z-20 mt-1 max-h-48 w-full overflow-auto rounded-md border border-gray-200 bg-white py-1 shadow-lg"
        >
          {filtered.map((o, i) => (
            <li
              key={o}
              role="option"
              aria-selected={isSelected(o)}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => commit(o)}
              onMouseEnter={() => setHighlight(i)}
              className={cn(
                "cursor-pointer px-3 py-1.5 text-sm",
                i === highlight ? "bg-blue-50 text-blue-900" : "text-gray-800",
                isSelected(o) && "font-semibold"
              )}
            >
              {o}
            </li>
          ))}
          {freeSolo && query && !options.some((o) => o.toLowerCase() === query.toLowerCase()) && (
            <li
              role="option"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => commit(query)}
              className="cursor-pointer px-3 py-1.5 text-sm text-blue-600"
            >
              + "{query}" ekle
            </li>
          )}
        </ul>
      )}
    </div>
  )
}

export { MuiAutocomplete }
export type { MuiAutocompleteProps }
