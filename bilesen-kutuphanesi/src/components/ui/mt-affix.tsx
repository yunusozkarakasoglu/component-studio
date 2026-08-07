/**
 * MtAffix
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Sabit konumlu içerik — position (bottom-right varsayılan).
 *   <MtAffix><MtButton>Scroll to top</MtButton></MtAffix>
 * @id 1347
 * @category Overlay
 * @subcategory MtAffix
 * @source mantine
 */
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtAffixProps {
  children?: ReactNode
  position?: { top?: number; left?: number; right?: number; bottom?: number }
  className?: string
}

function MtAffix({ children, position = { bottom: 20, right: 20 }, className }: MtAffixProps) {
  return (
    <div data-slot="mt-affix" className={cn("fixed z-40", className)} style={{ ...position }}>
      {children}
    </div>
  )
}

export { MtAffix }
export type { MtAffixProps }
