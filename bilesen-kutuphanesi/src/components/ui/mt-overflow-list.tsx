/**
 * MtOverflowList
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Taşan liste — görünür öğeler + "+N" kalan sayacı.
 *   <MtOverflowList items={items} renderItem={…} maxVisibleItems={3} />
 * @id 1773
 * @category Özel Komponentler
 * @subcategory MtOverflowList
 * @source mantine
 */
import { useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtOverflowListProps<T> {
  items?: T[]
  renderItem?: (item: T) => ReactNode
  maxVisibleItems?: number
  collapseFrom?: "start" | "end"
  className?: string
}

function MtOverflowList<T>({ items = [] as T[], renderItem = (item: T) => String(item), maxVisibleItems = 3, collapseFrom = "end", className }: MtOverflowListProps<T>) {
  const [expanded, setExpanded] = useState(false)
  const hiddenCount = Math.max(0, items.length - maxVisibleItems)
  const visible = expanded || hiddenCount === 0 ? items : collapseFrom === "end" ? items.slice(0, maxVisibleItems) : items.slice(hiddenCount)

  return (
    <div data-slot="mt-overflow-list" className={cn("flex flex-col gap-1.5", className)}>
      {visible.map((item, i) => (
        <div key={i}>{renderItem(item)}</div>
      ))}
      {hiddenCount > 0 && (
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="cursor-pointer self-start text-xs font-medium text-blue-600 hover:underline"
        >
          {expanded ? "Gizle" : `+${hiddenCount} daha`}
        </button>
      )}
    </div>
  )
}

export { MtOverflowList }
export type { MtOverflowListProps }
