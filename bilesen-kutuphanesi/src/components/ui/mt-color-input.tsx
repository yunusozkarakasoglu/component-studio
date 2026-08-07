/**
 * MtColorInput
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Renk girişi — swatches, format, disabled, eyeDropper.
 *   <MtColorInput swatches={["#25262b", "#868e96", "#fa5252"]} />
 * @id 1260
 * @category Seçim
 * @subcategory MtColorInput
 * @source mantine
 */
import { useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Pipette } from "@/components/ui/icons"

interface MtColorInputProps {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  format?: "hex" | "rgba" | "rgb" | "hsl"
  swatches?: string[]
  disabled?: boolean
  error?: ReactNode
  success?: ReactNode
  label?: ReactNode
  placeholder?: string
  eyeDropper?: boolean
  className?: string
  loading?: boolean
}

function MtColorInput({
  value,
  defaultValue = "",
  onChange,
  format = "hex",
  swatches,
  disabled,
  error,
  success,
  label,
  placeholder = format === "hex" ? "Pick color" : `Pick ${format} color`,
  eyeDropper = true,
  loading,
  className,
}: MtColorInputProps) {
  const [internal, setInternal] = useState(defaultValue)
  const current = value !== undefined ? value : internal

  const set = (v: string) => {
    if (value === undefined) setInternal(v)
    onChange?.(v)
  }

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {label && <span className="text-sm font-medium text-foreground">{label}</span>}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            value={current}
            disabled={disabled || loading}
            onChange={(e) => set(e.target.value)}
            placeholder={placeholder}
            data-slot="mt-color-input"
            className={cn(
              "w-full rounded-md border border-border bg-background py-1.5 pl-9 pr-8 text-sm text-foreground shadow-xs transition-colors outline-none",
              "focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/30",
              "disabled:cursor-not-allowed disabled:opacity-50",
              error && "border-red-500",
              success && "border-emerald-500"
            )}
          />
          <span
            className="absolute left-2 top-1/2 size-5 -translate-y-1/2 rounded border border-border"
            style={{ backgroundColor: current || "transparent" }}
          />
          <label className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-muted-foreground hover:text-foreground">
            {eyeDropper && (
              <>
                <Pipette className="size-4" />
                <input
                  type="color"
                  className="sr-only"
                  value={current || "#000000"}
                  disabled={disabled}
                  onChange={(e) => set(e.target.value)}
                />
              </>
            )}
          </label>
        </div>
      </div>
      {swatches && (
        <div className="flex flex-wrap gap-1.5">
          {swatches.map((c) => (
            <button
              key={c}
              type="button"
              aria-label={c}
              disabled={disabled}
              onClick={() => set(c)}
              className={cn(
                "size-5 cursor-pointer rounded-full border border-border transition-transform",
                current === c && "ring-2 ring-blue-500 ring-offset-1",
                "disabled:cursor-not-allowed"
              )}
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      )}
      {loading && (
        <span className="absolute right-8 top-1/2 -translate-y-1/2">
          <span className="size-3.5 animate-spin rounded-full border-2 border-border border-t-blue-500" />
        </span>
      )}
      {error && <p className="text-xs text-red-500">{error}</p>}
      {success && !error && <p className="text-xs text-emerald-600">{success}</p>}
    </div>
  )
}

export { MtColorInput }
export type { MtColorInputProps }
