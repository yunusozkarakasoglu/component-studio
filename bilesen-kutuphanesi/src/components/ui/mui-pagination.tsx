/**
 * MuiPagination
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Sayfalama — sayfa numaraları + ileri/geri.
 *   <MuiPagination count={10} page={1} onChange={h} />
 * count · page · onChange · color: primary/secondary · size · variant: text/outlined
 * showFirstButton/showLastButton · siblingCount (çevre sayfa)
 * @id 1995
 * @category Navigasyon
 * @subcategory MuiPagination
 * @source mui
 */
import { useState } from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "@/components/ui/icons"

interface MuiPaginationProps {
  count?: number
  page?: number
  defaultValue?: number
  onChange?: (page: number) => void
  color?: "primary" | "secondary"
  size?: "small" | "medium" | "large"
  variant?: "text" | "outlined"
  disabled?: boolean
  showFirstButton?: boolean
  showLastButton?: boolean
  siblingCount?: number
  className?: string
}

function MuiPagination({
  count = 5,
  page,
  defaultValue = 1,
  onChange,
  color = "primary",
  size = "medium",
  variant = "text",
  disabled = false,
  showFirstButton = false,
  showLastButton = false,
  siblingCount = 1,
  className,
}: MuiPaginationProps) {
  const [internal, setInternal] = useState(defaultValue)
  const current = page ?? internal
  const go = (p: number) => {
    const clamped = Math.max(1, Math.min(count, p))
    setInternal(clamped)
    if (onChange) onChange(clamped)
  }

  const pages: (number | "ellipsis")[] = []
  for (let i = 1; i <= count; i++) {
    if (i === 1 || i === count || Math.abs(i - current) <= siblingCount) pages.push(i)
    else if (pages[pages.length - 1] !== "ellipsis") pages.push("ellipsis")
  }

  const btnCls = cn(
    "inline-flex items-center justify-center rounded-md font-medium transition-colors disabled:opacity-40",
    size === "small" ? "size-7 text-xs" : size === "large" ? "size-10 text-sm" : "size-8 text-sm",
    variant === "outlined" && "border border-gray-300 bg-white hover:bg-gray-50",
    variant === "text" && "hover:bg-gray-100"
  )

  const activeCls =
    color === "secondary"
      ? "bg-purple-600 text-white hover:bg-purple-700"
      : "bg-blue-600 text-white hover:bg-blue-700"

  return (
    <nav aria-label="Sayfalama" className={cn("inline-flex items-center gap-1", className)}>
      {showFirstButton && (
        <button type="button" className={btnCls} disabled={disabled || current === 1} onClick={() => go(1)} aria-label="İlk sayfa">
          «
        </button>
      )}
      <button type="button" className={btnCls} disabled={disabled || current === 1} onClick={() => go(current - 1)} aria-label="Önceki">
        <ChevronLeft className={size === "small" ? "size-3.5" : "size-4"} />
      </button>
      {pages.map((p, i) =>
        p === "ellipsis" ? (
          <span key={`e${i}`} className="px-1 text-sm text-gray-400">…</span>
        ) : (
          <button
            key={p}
            type="button"
            className={cn(btnCls, p === current && !disabled && activeCls)}
            disabled={disabled}
            onClick={() => go(p)}
            aria-current={p === current ? "page" : undefined}
          >
            {p}
          </button>
        )
      )}
      <button type="button" className={btnCls} disabled={disabled || current === count} onClick={() => go(current + 1)} aria-label="Sonraki">
        <ChevronRight className={size === "small" ? "size-3.5" : "size-4"} />
      </button>
      {showLastButton && (
        <button type="button" className={btnCls} disabled={disabled || current === count} onClick={() => go(count)} aria-label="Son sayfa">
          »
        </button>
      )}
    </nav>
  )
}

export { MuiPagination }
export type { MuiPaginationProps }
