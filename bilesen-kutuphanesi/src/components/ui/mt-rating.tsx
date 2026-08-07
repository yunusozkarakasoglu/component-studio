/**
 * MtRating
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Yıldız derecelendirme — size, count, fractions, readOnly, customSymbol.
 *   <MtRating defaultValue={3.5} fractions={2} />
 * @id 1258
 * @category Seçim
 * @subcategory MtRating
 * @source mantine
 */
import { useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Star } from "@/components/ui/icons"

interface MtRatingProps {
  value?: number
  defaultValue?: number
  onChange?: (value: number) => void
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  count?: number
  fractions?: number
  readOnly?: boolean
  allowClear?: boolean
  emptySymbol?: ReactNode
  fullSymbol?: ReactNode
  className?: string
}

const sizes: Record<string, string> = {
  xs: "size-3",
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
  xl: "size-8",
}

function MtRating({
  value,
  defaultValue = 0,
  onChange,
  size = "md",
  count = 5,
  fractions = 1,
  readOnly,
  allowClear = true,
  emptySymbol,
  fullSymbol,
  className,
}: MtRatingProps) {
  const [internal, setInternal] = useState(defaultValue)
  const current = value !== undefined ? value : internal

  const set = (v: number) => {
    const next = allowClear && v === current ? 0 : v
    if (value === undefined) setInternal(next)
    onChange?.(next)
  }

  const step = 1 / fractions

  return (
    <div
      role="radiogroup"
      data-slot="mt-rating"
      className={cn("inline-flex items-center gap-0.5", readOnly && "pointer-events-none", className)}
    >
      {Array.from({ length: count }).map((_, i) => {
        const base = i * step
        return (
          <button
            key={i}
            type="button"
            role="radio"
            aria-label={`${i + 1} stars`}
            disabled={readOnly}
            onClick={() => set(base + step)}
            className="relative cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30"
            style={{ width: `calc(${sizes[size].replace("size-", "")} * 0.25rem)` }}
          >
            <span className="block text-muted-foreground">
              {emptySymbol ?? <Star className={cn(sizes[size], "text-gray-300")} />}
            </span>
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${Math.max(0, Math.min(1, (current - base) / step)) * 100}%` }}
            >
              <span className="block text-blue-500">
                {fullSymbol ?? <Star className={cn(sizes[size], "fill-blue-500 text-blue-500")} />}
              </span>
            </span>
          </button>
        )
      })}
    </div>
  )
}

export { MtRating }
export type { MtRatingProps }
