/**
 * MtTitle
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Başlık — order (h1-h6), size, lineClamp, hizalama, renk.
 *   <MtTitle order={1}>Başlık</MtTitle>
 * @id 1433
 * @category Veri Gösterimi
 * @subcategory MtTitle
 * @source mantine
 */
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface MtTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  order?: 1 | 2 | 3 | 4 | 5 | 6
  size?: "xs" | "sm" | "md" | "lg" | "xl" | string
  lineClamp?: number
  ta?: "left" | "center" | "right"
  c?: string
}

const orderSizes: Record<number, string> = { 1: "text-4xl", 2: "text-3xl", 3: "text-2xl", 4: "text-xl", 5: "text-lg", 6: "text-base" }
const tSizes: Record<string, string> = { xs: "text-xs", sm: "text-sm", md: "text-base", lg: "text-lg", xl: "text-xl" }
const tColors: Record<string, string> = {
  dimmed: "text-muted-foreground", blue: "text-blue-600", red: "text-red-600", green: "text-green-600",
  gray: "text-gray-500", dark: "text-gray-900",
}

function MtTitle({ className, order = 1, size, lineClamp, ta, c, children, ...props }: MtTitleProps) {
  const Tag = `h${order}` as const
  return (
    <Tag
      data-slot="mt-title"
      className={cn(
        "font-bold tracking-tight text-foreground",
        size ? tSizes[size] ?? size : orderSizes[order],
        lineClamp && "line-clamp-" + lineClamp,
        ta && (ta === "center" ? "text-center" : ta === "right" ? "text-right" : "text-left"),
        c && tColors[c],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}

export { MtTitle }
export type { MtTitleProps }
