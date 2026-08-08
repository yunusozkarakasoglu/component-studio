/**
 * MtThemeIcon
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Tema ikonu — renkli arka plan üzerinde ikon, varyantlar, gradient.
 *   <MtThemeIcon variant="light" color="blue"><Settings/></MtThemeIcon>
 * @id 1434
 * @category Veri Gösterimi
 * @subcategory MtThemeIcon
 * @source mantine
 */
import type { CSSProperties, HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

const filled: Record<string, string> = {
  blue: "bg-blue-600 text-white", cyan: "bg-cyan-600 text-white", teal: "bg-teal-600 text-white", green: "bg-green-600 text-white",
  lime: "bg-lime-600 text-white", yellow: "bg-yellow-500 text-white", orange: "bg-orange-600 text-white", red: "bg-red-600 text-white",
  pink: "bg-pink-600 text-white", grape: "bg-purple-600 text-white", violet: "bg-violet-600 text-white", indigo: "bg-indigo-600 text-white",
  gray: "bg-gray-600 text-white", dark: "bg-gray-900 text-white",
}
const light: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700", cyan: "bg-cyan-100 text-cyan-700", teal: "bg-teal-100 text-teal-700", green: "bg-green-100 text-green-700",
  lime: "bg-lime-100 text-lime-700", yellow: "bg-yellow-100 text-yellow-700", orange: "bg-orange-100 text-orange-700", red: "bg-red-100 text-red-700",
  pink: "bg-pink-100 text-pink-700", grape: "bg-purple-100 text-purple-700", violet: "bg-violet-100 text-violet-700", indigo: "bg-indigo-100 text-indigo-700",
  gray: "bg-gray-100 text-gray-700",
}
const outline: Record<string, string> = {
  blue: "border border-blue-300 text-blue-700", red: "border border-red-300 text-red-700", green: "border border-green-300 text-green-700",
  gray: "border border-gray-300 text-gray-700", yellow: "border border-yellow-300 text-yellow-700",
}

const tSizes: Record<string, string> = { xs: "size-4", sm: "size-6", md: "size-8", lg: "size-10", xl: "size-12" }

interface MtThemeIconProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "filled" | "light" | "outline" | "transparent" | "white" | "default"
  color?: string
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  radius?: "sm" | "md" | "lg" | "xl" | "full"
  gradient?: { from: string; to: string; deg?: number }
}

function MtThemeIcon({ className, variant = "filled", color = "blue", size = "md", radius = "md", gradient, children, ...props }: MtThemeIconProps) {
  const gradStyle: CSSProperties | undefined = gradient
    ? { backgroundImage: `linear-gradient(${gradient.deg ?? 90}deg, ${gradient.from}, ${gradient.to})` }
    : undefined
  const radii: Record<string, string> = { sm: "rounded", md: "rounded-md", lg: "rounded-lg", xl: "rounded-xl", full: "rounded-full" }

  return (
    <div
      data-slot="mt-theme-icon"
      className={cn(
        "flex shrink-0 items-center justify-center",
        tSizes[size],
        radii[radius],
        gradient ? "text-white" : variant === "filled" ? filled[color] ?? filled.blue : variant === "light" ? light[color] ?? light.blue : variant === "outline" ? outline[color] ?? outline.gray : variant === "white" ? "bg-white text-gray-900 shadow-sm" : variant === "default" ? "bg-muted text-foreground" : "bg-transparent text-foreground",
        className
      )}
      style={gradStyle}
      {...props}
    >
      {children}
    </div>
  )
}

export { MtThemeIcon }
export type { MtThemeIconProps }
