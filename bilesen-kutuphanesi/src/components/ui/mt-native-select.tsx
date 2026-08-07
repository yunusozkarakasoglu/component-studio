/**
 * MtNativeSelect
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Yerel select — label + description + error + option'lar.
 *   <MtNativeSelect label="Country" data={[{value:'tr',label:'Türkiye'}]} />
 * @id 1121
 * @category Form Elemanları
 * @subcategory MtNativeSelect
 * @source mantine
 */
import type { ReactNode, SelectHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface MtNativeSelectOption {
  value: string
  label: string
  disabled?: boolean
}

interface MtNativeSelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  label?: ReactNode
  description?: ReactNode
  error?: ReactNode
  data?: (string | MtNativeSelectOption)[]
  placeholder?: string
  success?: ReactNode
  loading?: boolean
  disabled?: boolean
}

function MtNativeSelect({ className, label, description, error, data = [], id, placeholder, success, loading, disabled, ...props }: MtNativeSelectProps) {
  return (
    <div data-slot="mt-native-select" className="flex w-full flex-col gap-1.5">
      {label && <label htmlFor={id} className="text-sm font-medium text-foreground">{label}</label>}
      {description && <p className="text-xs text-muted-foreground">{description}</p>}
      <select
        id={id}
        className={cn(
          "h-9 w-full cursor-pointer appearance-none rounded-md border border-border bg-background px-3 pr-8 text-sm text-foreground shadow-xs transition-colors outline-none",
          "bg-no-repeat bg-[position:right_0.5rem_center] bg-[size:1rem]",
          "focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/30",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-red-500",
          success && "border-emerald-500",
          className
        )}
        disabled={disabled || loading}
        style={{
          backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2371717a' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
        }}
        {...props}
      >
        {placeholder && !props.defaultValue && (
          <option value="" disabled>{placeholder}</option>
        )}
        {data.map((item) => {
          const opt = typeof item === "string" ? { value: item, label: item } : item
          return (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          )
        })}
      </select>
      {loading && <p className="text-xs text-muted-foreground">Loading…</p>}
      {error && <p className="text-xs text-red-500">{error}</p>}
      {success && !error && <p className="text-xs text-emerald-600">{success}</p>}
    </div>
  )
}

export { MtNativeSelect }
export type { MtNativeSelectOption, MtNativeSelectProps }
