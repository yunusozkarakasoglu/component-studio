/**
 * MuiRating
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Yıldız puanlama — 1-5 yıldız, yarım değerler.
 *   <MuiRating value={3} onChange={h} />
 * max: maksimum yıldız (varsayılan 5) · size: small/medium/large
 * readOnly · disabled · half: yarım yıldız (defaultValue: 2.5)
 * @id 1960
 * @category Seçim
 * @subcategory MuiRating
 * @source mui
 */
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Star } from "@/components/ui/icons"

interface MuiRatingProps {
  value?: number | null
  defaultValue?: number | null
  onChange?: (value: number | null) => void
  max?: number
  size?: "small" | "medium" | "large"
  readOnly?: boolean
  disabled?: boolean
  half?: boolean
  name?: string
  className?: string
}

const SIZE: Record<string, string> = {
  small: "size-4",
  medium: "size-6",
  large: "size-8",
}

function MuiRating({
  value,
  defaultValue,
  onChange,
  max = 5,
  size = "medium",
  readOnly = false,
  disabled = false,
  half = false,
  className,
}: MuiRatingProps) {
  const [internal, setInternal] = useState<number | null>(defaultValue ?? null)
  const [hover, setHover] = useState<number | null>(null)
  const active = value ?? internal
  const display = hover ?? active ?? 0

  const setValue = (v: number) => {
    setInternal(v)
    if (onChange) onChange(v)
  }

  return (
    <div
      className={cn("inline-flex items-center gap-0.5", disabled && "opacity-50", className)}
      role="radiogroup"
      aria-label="Puan"
    >
      {Array.from({ length: max }, (_, i) => {
        const starVal = i + 1
        const filled = display >= starVal - (half ? 0.5 : 0)
        const halfFilled = half && display >= starVal - 0.5 && display < starVal
        return (
          <button
            key={i}
            type="button"
            disabled={readOnly || disabled}
            aria-label={`${starVal} yıldız`}
            onMouseEnter={() => setHover(starVal)}
            onMouseLeave={() => setHover(null)}
            onClick={() => setValue(starVal)}
            className="cursor-pointer p-0.5 transition-transform hover:scale-110 disabled:cursor-default"
          >
            <Star
              className={cn(SIZE[size], "transition-colors", filled ? "fill-amber-400 text-amber-400" : "text-gray-300")}
            />
            {halfFilled && (
              <span className="relative -ml-[100%] inline-block overflow-hidden" style={{ width: "50%" }}>
                <Star className={cn(SIZE[size], "fill-amber-400 text-amber-400")} />
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}

export { MuiRating }
export type { MuiRatingProps }
