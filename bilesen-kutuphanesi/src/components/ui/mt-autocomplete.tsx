/**
 * MtAutocomplete
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Otomatik tamamlama — data filtreleme, serbest giriş.
 *   <MtAutocomplete data={["React", "Vue"]} label="Framework" />
 * @id 1301
 * @category Combobox
 * @subcategory MtAutocomplete
 * @source mantine
 */
import { useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtAutocompleteProps {
  data?: string[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  label?: ReactNode
  description?: ReactNode
  error?: ReactNode
  placeholder?: string
  limit?: number
  disabled?: boolean
  className?: string
}

function MtAutocomplete({
  data = [],
  value,
  defaultValue = "",
  onChange,
  label,
  description,
  error,
  placeholder = "Type to search",
  limit = 20,
  disabled,
  className,
}: MtAutocompleteProps) {
  const [internal, setInternal] = useState(defaultValue)
  const [focused, setFocused] = useState(false)
  const current = value !== undefined ? value : internal

  const filtered = data.filter((d) => d.toLowerCase().includes(current.toLowerCase())).slice(0, limit)

  const set = (v: string) => {
    if (value === undefined) setInternal(v)
    onChange?.(v)
  }

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {label && <span className="text-sm font-medium text-foreground">{label}</span>}
      {description && <p className="text-xs text-muted-foreground">{description}</p>}
      <div className="relative">
        <input
          data-slot="mt-autocomplete"
          value={current}
          disabled={disabled}
          onChange={(e) => set(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder={placeholder}
          className={cn(
            "h-9 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground shadow-xs transition-colors outline-none",
            "placeholder:text-muted-foreground focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/30",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red-500"
          )}
        />
        {focused && current && filtered.length > 0 && (
          <div className="absolute left-0 top-full z-50 mt-1 w-full rounded-md border border-border bg-background p-1 shadow-lg">
            <ul className="max-h-56 overflow-y-auto">
              {filtered.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    onMouseDown={(e) => { e.preventDefault(); set(item); setFocused(false) }}
                    className="flex w-full cursor-pointer items-center gap-2 rounded px-2.5 py-1.5 text-left text-sm transition-colors hover:bg-muted"
                  >
                    <span className="flex-1">{item}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

export { MtAutocomplete }
export type { MtAutocompleteProps }
