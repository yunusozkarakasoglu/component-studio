/**
 * MtAnchor
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Bağlantı — underline (always/hover/never/not-hover), gradient varyant.
 *   <MtAnchor href="#" underline="hover">Anchor component</MtAnchor>
 * @id 1080
 * @category Butonlar & Aksiyonlar
 * @subcategory MtAnchor
 * @source mantine
 */
import type { AnchorHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface MtAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  underline?: "always" | "hover" | "never" | "not-hover"
  variant?: "default" | "gradient"
  gradient?: { from: string; to: string; deg?: number }
}

function MtAnchor({ className, underline = "hover", variant = "default", gradient, style, children, ...props }: MtAnchorProps) {
  const underlineClass =
    underline === "always" ? "underline underline-offset-4" :
    underline === "hover" ? "no-underline hover:underline hover:underline-offset-4" :
    underline === "never" ? "no-underline" :
    "underline underline-offset-4 hover:no-underline"

  return (
    <a
      data-slot="mt-anchor"
      className={cn(
        "cursor-pointer font-medium transition-colors",
        variant === "default" && "text-blue-600 hover:text-blue-700",
        underlineClass,
        className
      )}
      style={
        variant === "gradient"
          ? { backgroundImage: `linear-gradient(${gradient?.deg ?? 90}deg, ${gradient?.from ?? "#ec4899"}, ${gradient?.to ?? "#f59e0b"})`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", ...style }
          : style
      }
      {...props}
    >
      {children}
    </a>
  )
}

export { MtAnchor }
export type { MtAnchorProps }
