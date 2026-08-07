/**
 * MtGrid + MtGridCol
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * 12 sütunlu grid — Grid + Col (span, offset, order).
 *   <MtGrid>
 *     <MtGridCol span={4}>1</MtGridCol>
 *     <MtGridCol span={4} offset={4}>3</MtGridCol>
 *   </MtGrid>
 * @id 1046
 * @category Genel
 * @subcategory MtGrid
 * @source mantine
 */
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface MtGridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: number
  gap?: string | number
}

function MtGrid({ className, columns = 12, gap = "1rem", style, ...props }: MtGridProps) {
  return (
    <div
      data-slot="mt-grid"
      className={cn("grid", className)}
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, gap, ...style }}
      {...props}
    />
  )
}

interface MtGridColProps extends HTMLAttributes<HTMLDivElement> {
  span?: number | "auto"
  offset?: number
  order?: number
}

function MtGridCol({ className, span = 1, offset, order, style, ...props }: MtGridColProps) {
  return (
    <div
      data-slot="mt-grid-col"
      className={cn("min-w-0", className)}
      style={{
        gridColumn: span === "auto" ? "auto" : `span ${span} / span ${span}`,
        ...(offset ? { gridColumnStart: offset + 1 } : {}),
        order,
        ...style,
      }}
      {...props}
    />
  )
}

export { MtGrid, MtGridCol }
export type { MtGridColProps, MtGridProps }
