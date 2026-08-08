/**
 * MtText
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Metin — boyut, kalınlık, renk, hizalama, kesme, lineClamp, gradient.
 *   <MtText size="lg" fw={700}>Metin</MtText>
 * @id 1432
 * @category Veri Gösterimi
 * @subcategory MtText
 * @source mantine
 */
import type { CSSProperties, HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface MtTextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | string
  fw?: 400 | 500 | 600 | 700 | 800
  fs?: "italic" | "normal"
  td?: "underline" | "line-through" | "none"
  c?: string
  tt?: "uppercase" | "lowercase" | "capitalize"
  ta?: "left" | "center" | "right"
  truncate?: boolean
  lineClamp?: number
  gradient?: { from: string; to: string; deg?: number }
  inherit?: boolean
  span?: boolean
}

const tSizes: Record<string, string> = { xs: "text-xs", sm: "text-sm", md: "text-base", lg: "text-lg", xl: "text-xl" }
const tWeights: Record<string, string> = { 400: "font-normal", 500: "font-medium", 600: "font-semibold", 700: "font-bold", 800: "font-extrabold" }
const tStyles: Record<string, string> = { italic: "italic", normal: "not-italic" }
const tDecor: Record<string, string> = { underline: "underline", "line-through": "line-through", none: "no-underline" }
const tCase: Record<string, string> = { uppercase: "uppercase", lowercase: "lowercase", capitalize: "capitalize" }
const tAlign: Record<string, string> = { left: "text-left", center: "text-center", right: "text-right" }
const tColors: Record<string, string> = {
  dimmed: "text-muted-foreground", blue: "text-blue-600", cyan: "text-cyan-600", teal: "text-teal-600", green: "text-green-600",
  lime: "text-lime-600", yellow: "text-yellow-500", orange: "text-orange-600", red: "text-red-600", pink: "text-pink-600",
  grape: "text-purple-600", violet: "text-violet-600", indigo: "text-indigo-600", gray: "text-gray-500", dark: "text-gray-900",
  white: "text-white", "teal.4": "text-teal-400", "blue.4": "text-blue-400", "red.4": "text-red-400", "green.4": "text-green-400",
}

function MtText({
  className,
  size = "md",
  fw,
  fs,
  td,
  c,
  tt,
  ta,
  truncate,
  lineClamp,
  gradient,
  inherit,
  span,
  style,
  children,
  ...props
}: MtTextProps) {
  const gradStyle: CSSProperties | undefined = gradient
    ? { backgroundImage: `linear-gradient(${gradient.deg ?? 45}deg, ${gradient.from}, ${gradient.to})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }
    : undefined
  const Tag = span ? "span" : "p"

  return (
    <Tag
      data-slot="mt-text"
      className={cn(
        inherit ? "text-inherit" : tSizes[size] ?? tSizes.md,
        fw && tWeights[fw],
        fs && tStyles[fs],
        td && tDecor[td],
        c && tColors[c],
        tt && tCase[tt],
        ta && tAlign[ta],
        truncate && "truncate",
        lineClamp && "line-clamp-" + lineClamp,
        gradient && "bg-clip-text text-transparent",
        className
      )}
      style={{ ...gradStyle, ...style }}
      {...props}
    >
      {children}
    </Tag>
  )
}

export { MtText }
export type { MtTextProps }
