/**
 * MtFlex
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Flex yardımcı — direction, gap, justify, align, wrap.
 *   <MtFlex direction="column" gap="md">…</MtFlex>
 * @id 1025
 * @category Genel
 * @subcategory MtFlex
 * @source mantine
 */
import type { CSSProperties, HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface MtFlexProps extends HTMLAttributes<HTMLDivElement> {
  direction?: CSSProperties["flexDirection"]
  gap?: string | number
  justify?: CSSProperties["justifyContent"]
  align?: CSSProperties["alignItems"]
  wrap?: CSSProperties["flexWrap"]
}

function MtFlex({ className, direction, gap, justify, align, wrap, style, ...props }: MtFlexProps) {
  return (
    <div
      data-slot="mt-flex"
      className={cn("flex", className)}
      style={{ flexDirection: direction, gap, justifyContent: justify, alignItems: align, flexWrap: wrap, ...style }}
      {...props}
    />
  )
}

export { MtFlex }
export type { MtFlexProps }
