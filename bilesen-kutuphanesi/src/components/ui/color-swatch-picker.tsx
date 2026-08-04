/**
 * ColorSwatchPicker
 * HeroUI color-swatch-picker'dan uyarlanmış — saf React (bağımlılıksız).
 * Renk örnekleri listesinden seçim (çoklu destekli).
 *   <ColorSwatchPicker colors={palette} value={sel} onChange={setSel} />
 * @id 231
 * @category Colors
 * @subcategory ColorSwatchPicker
 */
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Check } from "./icons"
import { ColorSwatch } from "./color-swatch"

function ColorSwatchPicker({
  colors,
  value,
  defaultValue,
  onChange,
  layout = "grid",
  isDisabled,
  className,
}: {
  colors: string[]
  value?: string[]
  defaultValue?: string[]
  onChange?: (values: string[]) => void
  layout?: "grid" | "stack"
  isDisabled?: boolean
  className?: string
}) {
  const [internal, setInternal] = useState<string[]>(defaultValue ?? [])
  const controlled = value !== undefined
  const selected = controlled ? value : internal

  const toggle = (c: string) => {
    if (isDisabled) return
    const next = selected.includes(c) ? selected.filter((x) => x !== c) : [...selected, c]
    if (!controlled) setInternal(next)
    onChange?.(next)
  }

  return (
    <div
      data-slot="color-swatch-picker"
      className={cn(
        "flex gap-2",
        layout === "stack" ? "flex-col" : "flex-wrap",
        isDisabled && "opacity-60",
        className
      )}
    >
      {colors.map((c) => {
        const sel = selected.includes(c)
        return (
          <button
            key={c}
            type="button"
            disabled={isDisabled}
            onClick={() => toggle(c)}
            aria-pressed={sel}
            aria-label={c}
            className={cn(
              "relative rounded-full p-0.5 transition-transform",
              sel ? "ring-2 ring-blue-600 ring-offset-2" : "hover:scale-110",
              isDisabled && "cursor-not-allowed"
            )}
          >
            <ColorSwatch color={c} size="md" />
            {sel && (
              <span className="absolute inset-0 flex items-center justify-center text-white drop-shadow">
                <Check className="size-4" />
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}

export { ColorSwatchPicker }
