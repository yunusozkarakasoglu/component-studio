/**
 * MtGroup
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Yatay flex düzenleyici — gap, grow, justify, align, wrap.
 *   <MtGroup gap="md" grow>
 *     <Button>First</Button>
 *   </MtGroup>
 * @id 1006
 * @category Genel
 * @subcategory MtGroup
 * @source mantine
 */
import type { CSSProperties, HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface MtGroupProps extends HTMLAttributes<HTMLDivElement> {
  gap?: string | number
  grow?: boolean
  justify?: CSSProperties["justifyContent"]
  align?: CSSProperties["alignItems"]
  wrap?: CSSProperties["flexWrap"]
}

function MtGroup({ className, gap, grow, justify, align, wrap, style, ...props }: MtGroupProps) {
  return (
    <div
      data-slot="mt-group"
      className={cn("flex items-center", className)}
      style={{
        gap,
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap,
        ...(grow ? { flexWrap: wrap ?? "nowrap" } : {}),
        ...style,
      }}
      {...props}
    />
  )
}

export { MtGroup }
export type { MtGroupProps }
