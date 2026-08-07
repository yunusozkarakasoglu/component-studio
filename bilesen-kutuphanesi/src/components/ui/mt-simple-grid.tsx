/**
 * MtSimpleGrid
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Basit grid — cols, spacing, verticalSpacing, minColWidth, autoRows.
 *   <MtSimpleGrid cols={3}>…</MtSimpleGrid>
 * @id 1039
 * @category Genel
 * @subcategory MtSimpleGrid
 * @source mantine
 */
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface MtSimpleGridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: number
  spacing?: string | number
  verticalSpacing?: string | number
  minColWidth?: string | number
  autoRows?: string | number
}

function MtSimpleGrid({
  className,
  cols = 1,
  spacing = "1rem",
  verticalSpacing,
  minColWidth,
  autoRows,
  style,
  ...props
}: MtSimpleGridProps) {
  const gridTemplateColumns = minColWidth
    ? `repeat(auto-fit, minmax(${typeof minColWidth === "number" ? `${minColWidth}px` : minColWidth}, 1fr))`
    : `repeat(${cols}, minmax(0, 1fr))`

  return (
    <div
      data-slot="mt-simple-grid"
      className={cn("grid", className)}
      style={{
        gridTemplateColumns,
        columnGap: spacing,
        rowGap: verticalSpacing ?? spacing,
        gridAutoRows: autoRows,
        ...style,
      }}
      {...props}
    />
  )
}

export { MtSimpleGrid }
export type { MtSimpleGridProps }
