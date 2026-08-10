/**
 * MuiSelect
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Açılır seçim — tek veya çoklu seçim.
 *   <MuiSelect label="Yaş" options={[{value,label}]} value={v} onChange={h} />
 * options: {value, label, disabled?}[] · multiple · native (HTML select)
 * size: small/medium · disabled · fullWidth
 * @id 1974
 * @category Combobox
 * @subcategory MuiSelect
 * @source mui
 */
import { useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "@/components/ui/icons"

interface MuiSelectOption {
  value: string | number
  label: ReactNode
  disabled?: boolean
}

interface MuiSelectProps {
  label?: ReactNode
  options?: MuiSelectOption[]
  value?: string | number | (string | number)[]
  defaultValue?: string | number | (string | number)[]
  onChange?: (value: string | number | (string | number)[]) => void
  multiple?: boolean
  disabled?: boolean
  size?: "small" | "medium"
  fullWidth?: boolean
  native?: boolean
  className?: string
}

function MuiSelect({
  label,
  options = [
    { value: "a", label: "Seçenek A" },
    { value: "b", label: "Seçenek B" },
    { value: "c", label: "Seçenek C" },
  ],
  value,
  defaultValue,
  onChange,
  multiple = false,
  disabled = false,
  size = "medium",
  fullWidth = false,
  native = false,
  className,
}: MuiSelectProps) {
  const [internal, setInternal] = useState<string | number | (string | number)[] | undefined>(defaultValue)
  const [open, setOpen] = useState(false)
  const active = value ?? internal

  const display = () => {
    if (multiple && Array.isArray(active)) {
      return active.map((v) => options.find((o) => o.value === v)?.label ?? v).join(", ")
    }
    const single = active as string | number | undefined
    return options.find((o) => o.value === single)?.label ?? "Seçin…"
  }

  const commit = (v: string | number) => {
    let next: string | number | (string | number)[]
    if (multiple) {
      const arr = Array.isArray(active) ? [...active] : []
      if (arr.includes(v)) arr.splice(arr.indexOf(v), 1)
      else arr.push(v)
      next = arr
    } else {
      next = v
    }
    setInternal(next)
    if (onChange) onChange(next)
    setOpen(false)
  }

  if (native) {
    return (
      <div className={cn("flex flex-col", fullWidth ? "w-full" : "w-full max-w-sm", className)}>
        {label && <label className="mb-1 text-sm text-gray-700">{label}</label>}
        <select
          disabled={disabled}
          value={multiple && Array.isArray(active) ? (active as (string | number)[]).map(String) : (active as string | number | undefined)}
          multiple={multiple}
          onChange={(e) => {
            if (multiple) {
              const vals = [...e.target.selectedOptions].map((o) => (isNaN(Number(o.value)) ? o.value : Number(o.value)))
              setInternal(vals)
              if (onChange) onChange(vals)
            } else {
              const v = e.target.value
              const num = Number(v)
              const final = isNaN(num) ? v : num
              setInternal(final)
              if (onChange) onChange(final)
            }
          }}
          className={cn(
            "w-full rounded-md border border-gray-300 bg-white px-3 text-gray-900 outline-none focus:border-blue-500",
            size === "small" ? "py-1.5 text-sm" : "py-2 text-sm",
            disabled && "bg-gray-50 opacity-60"
          )}
        >
          {options.map((o) => (
            <option key={String(o.value)} value={o.value} disabled={o.disabled}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
    )
  }

  return (
    <div className={cn("relative flex flex-col", fullWidth ? "w-full" : "w-full max-w-sm", className)}>
      {label && <label className="mb-1 text-sm text-gray-700">{label}</label>}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={cn(
          "flex w-full items-center justify-between gap-2 rounded-md border border-gray-300 bg-white px-3 text-left text-sm text-gray-900 outline-none transition-colors focus:border-blue-500",
          size === "small" ? "py-1.5" : "py-2",
          disabled && "cursor-not-allowed bg-gray-50 opacity-60"
        )}
      >
        <span className={cn(active === undefined && "text-gray-400")}>{display()}</span>
        <ChevronDown className={cn("size-4 shrink-0 text-gray-400 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute left-0 right-0 top-full z-20 mt-1 max-h-56 overflow-auto rounded-md border border-gray-200 bg-white py-1 shadow-lg"
        >
          {options.map((o) => {
            const isSel = multiple && Array.isArray(active) ? active.includes(o.value) : active === o.value
            return (
              <li
                key={String(o.value)}
                role="option"
                aria-selected={isSel}
                onClick={() => !o.disabled && commit(o.value)}
                className={cn(
                  "cursor-pointer px-3 py-1.5 text-sm",
                  o.disabled ? "cursor-not-allowed text-gray-400" : "text-gray-800 hover:bg-blue-50",
                  isSel && "bg-blue-50 font-semibold text-blue-900"
                )}
              >
                {multiple && <span className={cn("mr-2 inline-block", isSel ? "text-blue-600" : "text-gray-300")}>{isSel ? "✓" : "○"}</span>}
                {o.label}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export { MuiSelect }
export type { MuiSelectProps, MuiSelectOption }
