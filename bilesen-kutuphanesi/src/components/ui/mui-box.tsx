/**
 * MuiBox
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Kutu düzeni — sx/className ile stillenebilen jenerik kapsayıcı.
 * MUI Box → saf div + Tailwind. MUI `component` prop'u desteklenir.
 *   <MuiBox component="section" className="p-2 border border-dashed border-gray-400">…</MuiBox>
 * @id 1845
 * @category Genel
 * @subcategory MuiBox
 * @source mui
 */
import { type ElementType, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MuiBoxProps {
  /** Render edilecek HTML elementi (varsayılan: div) */
  component?: ElementType
  className?: string
  children?: ReactNode
}

function MuiBox({ component: Component = "div", className, children }: MuiBoxProps) {
  return <Component className={cn(className)}>{children}</Component>
}

export { MuiBox }
export type { MuiBoxProps }
