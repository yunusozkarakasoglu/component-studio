/**
 * MuiAppBar
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Uygulama üst çubuğu — başlık + araçlar.
 *   <MuiAppBar title="Başlık" actions={<…>} />
 * color: primary | secondary | default · position: static/sticky/fixed
 * @id 1993
 * @category Navigasyon
 * @subcategory MuiAppBar
 * @source mui
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MuiAppBarProps {
  title?: ReactNode
  actions?: ReactNode
  color?: "primary" | "secondary" | "default" | "transparent"
  position?: "static" | "sticky" | "fixed"
  className?: string
}

const COLOR: Record<string, string> = {
  primary: "bg-blue-700 text-white",
  secondary: "bg-purple-700 text-white",
  default: "bg-gray-200 text-gray-900",
  transparent: "bg-transparent text-gray-900",
}

function MuiAppBar({ title, actions, color = "primary", position = "static", className }: MuiAppBarProps) {
  return (
    <header
      className={cn(
        "flex w-full items-center justify-between px-4 py-2.5 shadow",
        position === "sticky" && "sticky top-0 z-30",
        position === "fixed" && "fixed inset-x-0 top-0 z-30",
        COLOR[color],
        className
      )}
    >
      <div className="flex items-center gap-2 text-base font-medium">{title}</div>
      <div className="flex items-center gap-1.5">{actions}</div>
    </header>
  )
}

export { MuiAppBar }
export type { MuiAppBarProps }
