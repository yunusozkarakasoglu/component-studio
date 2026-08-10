/**
 * MuiPaper
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Kağıt yüzeyi — gölge (elevation) seviyesine göre derinlik.
 *   <MuiPaper elevation={3} className="p-4">…</MuiPaper>
 * elevation: 0 (düz) · 1 (varsayılan) · 3 (orta) · 6+ (derin gölge)
 * square: köşeler yuvarlak (false, varsayılan) veya keskin (true)
 * @id 1846
 * @category Genel
 * @subcategory MuiPaper
 * @source mui
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MuiPaperProps {
  /** Gölge seviyesi 0-24 (varsayılan: 1) */
  elevation?: 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 24
  /** Keskin köşeler (varsayılan: false — yuvarlak) */
  square?: boolean
  /** Varyant: elevation (gölgeli) | outlined (kenarlıklı) */
  variant?: "elevation" | "outlined"
  className?: string
  children?: ReactNode
}

const ELEVATION_CLASS: Record<number, string> = {
  0: "shadow-none",
  1: "shadow-sm",
  2: "shadow",
  3: "shadow-md",
  4: "shadow",
  6: "shadow-lg",
  8: "shadow-xl",
  12: "shadow-2xl",
  16: "shadow-2xl",
  24: "shadow-2xl",
}

function MuiPaper({ elevation = 1, square = false, variant = "elevation", className, children }: MuiPaperProps) {
  return (
    <div
      className={cn(
        "bg-white text-gray-900 transition-shadow",
        square ? "rounded-none" : "rounded-lg",
        variant === "outlined" ? "border border-gray-300" : ELEVATION_CLASS[elevation] ?? "shadow-sm",
        className
      )}
    >
      {children}
    </div>
  )
}

export { MuiPaper }
export type { MuiPaperProps }
