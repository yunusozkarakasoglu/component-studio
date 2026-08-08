/**
 * MtLoader
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Yükleme göstergesi — type (bars/dots/oval/ring), size, color.
 *   <MtLoader size="lg" color="blue" />
 * @id 1503
 * @category Yükleme & İlerleme
 * @subcategory MtLoader
 * @source mantine
 */
import { cn } from "@/lib/utils"

interface MtLoaderProps {
  type?: "bars" | "dots" | "oval" | "ring"
  size?: "xs" | "sm" | "md" | "lg" | "xl" | number
  color?: string
  className?: string
}

const loaderColors: Record<string, string> = {
  blue: "border-blue-600", red: "border-red-600", green: "border-green-600", teal: "border-teal-600",
  grape: "border-purple-600", pink: "border-pink-600", gray: "border-gray-500", orange: "border-orange-600",
  white: "border-white", dark: "border-gray-900",
}

function MtLoader({ type = "oval", size = "md", color = "blue", className }: MtLoaderProps) {
  const px = typeof size === "number" ? size : { xs: 14, sm: 18, md: 22, lg: 28, xl: 36 }[size]
  const border = loaderColors[color] ?? loaderColors.blue

  if (type === "bars") {
    return (
      <div className={cn("flex items-end gap-1", className)} role="status" aria-label="Loading">
        {[0, 1, 2].map((i) => (
          <span key={i} className="animate-bounce rounded-sm" style={{ width: px / 4, height: px * 0.7, background: color === "white" ? "#fff" : undefined }} />
        ))}
      </div>
    )
  }
  if (type === "dots") {
    return (
      <div className={cn("flex items-center gap-1.5", className)} role="status" aria-label="Loading">
        {[0, 1, 2].map((i) => (
          <span key={i} className="animate-bounce rounded-full" style={{ width: px / 3, height: px / 3, background: color === "white" ? "#fff" : undefined }} />
        ))}
      </div>
    )
  }
  if (type === "ring") {
    return (
      <div
        className={cn("animate-spin rounded-full border-2 border-t-transparent", border, className)}
        style={{ width: px, height: px }}
        role="status"
        aria-label="Loading"
      />
    )
  }
  return (
    <div className={cn("animate-spin rounded-full border-[3px] border-t-transparent", border, className)} style={{ width: px, height: px }} role="status" aria-label="Loading" />
  )
}

export { MtLoader }
export type { MtLoaderProps }
