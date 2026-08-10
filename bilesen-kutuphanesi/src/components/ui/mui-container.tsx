/**
 * MuiContainer
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * İçerik kapsayıcı — yatay ortalanmış, maksimum genişlik sınırlı.
 *   <MuiContainer maxWidth="sm">…</MuiContainer>
 * maxWidth: xs(600) sm(600) md(900) lg(1200) xl(1536) false (tam genişlik)
 * fixed: sabit maksimum genişlik (padding dahil)
 * @id 1847
 * @category Genel
 * @subcategory MuiContainer
 * @source mui
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MuiContainerProps {
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false
  fixed?: boolean
  className?: string
  children?: ReactNode
}

const MAX_WIDTH: Record<string, string> = {
  xs: "max-w-[600px]",
  sm: "max-w-[600px]",
  md: "max-w-[900px]",
  lg: "max-w-[1200px]",
  xl: "max-w-[1536px]",
}

function MuiContainer({ maxWidth = "lg", fixed = false, className, children }: MuiContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4",
        maxWidth === false ? "" : MAX_WIDTH[maxWidth] ?? "max-w-[1200px]",
        fixed && "px-4",
        className
      )}
    >
      {children}
    </div>
  )
}

export { MuiContainer }
export type { MuiContainerProps }
