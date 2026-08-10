/**
 * MuiGrid
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Grid düzeni — 12 kolonlu responsive ızgara (MUI Grid2 / spacing).
 *   <MuiGrid container spacing={2}> <MuiGrid item xs={6} md={3}>…</MuiGrid> </MuiGrid>
 * container: ızgara kapsayıcı · item: ızgara öğesi
 * xs/sm/md/lg/xl: kolon sayısı (1-12) veya "auto" · spacing: boşluk birimi
 * direction: row/column · justifyContent · alignItems
 * @id 1851
 * @category Genel
 * @subcategory MuiGrid
 * @source mui
 */
import { type ReactNode, type CSSProperties } from "react"
import { cn } from "@/lib/utils"

interface MuiGridProps {
  container?: boolean
  item?: boolean
  xs?: number | "auto"
  sm?: number | "auto"
  md?: number | "auto"
  lg?: number | "auto"
  xl?: number | "auto"
  spacing?: number
  direction?: "row" | "row-reverse" | "column" | "column-reverse"
  justifyContent?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly"
  alignItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline"
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

const SPACING: Record<number, number> = {
  0: 0, 0.5: 4, 1: 8, 1.5: 12, 2: 16, 3: 24, 4: 32, 5: 40, 6: 48, 8: 64, 10: 80,
}

function colClass(bp: "xs" | "sm" | "md" | "lg" | "xl", n: number | "auto"): string {
  if (n === "auto") return bp === "xs" ? "w-auto" : `${bp}:w-auto`
  if (bp === "xs") return `w-full basis-${(100 / 12) * n}%`.replace("basis-", "basis-[") + "]"
  const pct = (100 / 12) * n
  const prefix = { xs: "", sm: "sm:", md: "md:", lg: "lg:", xl: "xl:" }[bp]
  return `${prefix}w-[${pct}%]`
}

function MuiGrid({
  container = false,
  item = false,
  xs,
  sm,
  md,
  lg,
  xl,
  spacing = 0,
  direction = "row",
  justifyContent,
  alignItems,
  className,
  style,
  children,
}: MuiGridProps) {
  if (container) {
    const gap = SPACING[spacing] ?? spacing * 8
    return (
      <div
        className={cn(
          "grid w-full",
          className
        )}
        style={{
          gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
          gap: `${gap}px`,
          gridAutoFlow: direction === "column" ? "row" : "row",
          justifyContent,
          alignItems,
          ...style,
        }}
      >
        {children}
      </div>
    )
  }

  // item
  const span = (n?: number | "auto") => (n === "auto" ? undefined : n ? `span ${n}` : undefined)
  return (
    <div
      className={cn(item && "min-w-0", className)}
      style={{
        gridColumn: span(xs) ?? span(sm) ?? span(md) ?? span(lg) ?? span(xl),
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export { MuiGrid }
export type { MuiGridProps }
