/**
 * MtPagination
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Sayfalama — total, value/onChange, siblings, boundaries, disabled.
 *   <MtPagination total={10} value={page} onChange={setPage} />
 * @id 1387
 * @category Navigasyon
 * @subcategory MtPagination
 * @source mantine
 */
import { useState } from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "@/components/ui/icons"

interface MtPaginationProps {
  total?: number
  value?: number
  defaultValue?: number
  onChange?: (page: number) => void
  siblings?: number
  boundaries?: number
  disabled?: boolean
  withEdges?: boolean
  className?: string
}

function pageList(total: number, page: number, siblings: number, boundaries: number): (number | "ellipsis")[] {
  const pages: (number | "ellipsis")[] = []
  const start = Math.max(1, page - siblings)
  const end = Math.min(total, page + siblings)

  if (boundaries > 0) {
    for (let i = 1; i <= Math.min(boundaries, total); i++) pages.push(i)
    if (start > boundaries + 1) pages.push("ellipsis")
  }
  for (let i = start; i <= end; i++) if (!pages.includes(i)) pages.push(i)
  if (end < total - boundaries) pages.push("ellipsis")
  if (boundaries > 0) for (let i = Math.max(total - boundaries + 1, 1); i <= total; i++) if (!pages.includes(i)) pages.push(i)

  return pages
}

function MtPagination({ total = 1, value, defaultValue = 1, onChange, siblings = 1, boundaries = 1, disabled, withEdges, className }: MtPaginationProps) {
  const [internal, setInternal] = useState(defaultValue)
  const current = value !== undefined ? value : internal

  const set = (p: number) => {
    if (value === undefined) setInternal(p)
    onChange?.(p)
  }

  const pages = pageList(total, current, siblings, boundaries)

  return (
    <nav data-slot="mt-pagination" aria-label="Pagination" className={cn("flex items-center gap-1", className)}>
      {withEdges && (
        <button type="button" disabled={disabled || current === 1} onClick={() => set(1)} aria-label="First page"
          className={cn(btn, disabled && "disabled:opacity-50")}>
          «
        </button>
      )}
      <button type="button" disabled={disabled || current === 1} onClick={() => set(current - 1)} aria-label="Previous page"
        className={cn(btn, disabled && "disabled:opacity-50")}>
        <ChevronLeft className="size-4" />
      </button>
      {pages.map((p, i) =>
        p === "ellipsis" ? (
          <span key={`e${i}`} className="px-1 text-sm text-muted-foreground">…</span>
        ) : (
          <button
            key={p}
            type="button"
            disabled={disabled}
            onClick={() => set(p)}
            aria-current={p === current ? "page" : undefined}
            className={cn(btn, "min-w-8", p === current && "bg-blue-600 text-white hover:bg-blue-700")}
          >
            {p}
          </button>
        )
      )}
      <button type="button" disabled={disabled || current === total} onClick={() => set(current + 1)} aria-label="Next page"
        className={cn(btn, disabled && "disabled:opacity-50")}>
        <ChevronRight className="size-4" />
      </button>
      {withEdges && (
        <button type="button" disabled={disabled || current === total} onClick={() => set(total)} aria-label="Last page"
          className={cn(btn, disabled && "disabled:opacity-50")}>
          »
        </button>
      )}
    </nav>
  )
}

const btn = "inline-flex size-8 cursor-pointer items-center justify-center rounded-md border border-border bg-background text-sm text-foreground transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-blue-500/30 disabled:cursor-not-allowed disabled:opacity-50"

export { MtPagination }
export type { MtPaginationProps }
