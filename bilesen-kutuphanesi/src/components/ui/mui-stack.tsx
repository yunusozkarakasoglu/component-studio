/**
 * MuiStack
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Flex düzeni — tek boyutlu yatay/dikey yerleşim.
 *   <MuiStack direction="row" spacing={2}>…</MuiStack>
 * direction: row (yatay) | row-reverse | column (varsayılan) | column-reverse
 * spacing: boşluk birimi (1 = 8px) · divider: öğeler arası ayraç · useFlexGap
 * @id 1848
 * @category Genel
 * @subcategory MuiStack
 * @source mui
 */
import { type ReactNode, type ElementType } from "react"
import { cn } from "@/lib/utils"

interface MuiStackProps {
  direction?: "row" | "row-reverse" | "column" | "column-reverse"
  spacing?: number
  divider?: ReactNode
  component?: ElementType
  className?: string
  children?: ReactNode
}

function spacingClass(spacing: number): string {
  // MUI spacing: 1 = 8px. row → mx, column → my
  const map: Record<number, string> = {
    0: "gap-0", 0.5: "gap-1", 1: "gap-2", 1.5: "gap-3", 2: "gap-4",
    3: "gap-6", 4: "gap-8", 5: "gap-10", 6: "gap-12", 8: "gap-16",
  }
  return map[spacing] ?? `gap-[${spacing * 8}px]`
}

function MuiStack({
  direction = "column",
  spacing = 0,
  divider,
  component: Component = "div",
  className,
  children,
}: MuiStackProps) {
  const dirClass = {
    row: "flex-row",
    "row-reverse": "flex-row-reverse",
    column: "flex-col",
    "column-reverse": "flex-col-reverse",
  }[direction]

  // divider destekliyse çocukları araya ayraç koy
  const kids = divider
    ? (Array.isArray(children) ? children : [children])
        .filter(Boolean)
        .flatMap((c, i, arr) => (i < arr.length - 1 ? [c, <span key={`d${i}`} aria-hidden>{divider}</span>] : [c]))
    : children

  return (
    <Component className={cn("flex", dirClass, spacingClass(spacing), className)}>
      {kids}
    </Component>
  )
}

export { MuiStack }
export type { MuiStackProps }
