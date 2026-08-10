/**
 * MuiLink
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Bağlantı — altı çizili tıklanabilir metin.
 *   <MuiLink href="#" underline="hover">Metin</MuiLink>
 * href · underline: none/hover/always · color: primary/secondary · onClick
 * @id 2027
 * @category Navigasyon
 * @subcategory MuiLink
 * @source mui
 */
import { type AnchorHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface MuiLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "color"> {
  underline?: "none" | "hover" | "always"
  color?: "primary" | "secondary" | "inherit"
}

function MuiLink({ underline = "hover", color = "primary", className, children, ...rest }: MuiLinkProps) {
  return (
    <a
      className={cn(
        "cursor-pointer",
        color === "primary" ? "text-blue-600" : color === "secondary" ? "text-purple-600" : "text-current",
        underline === "hover" && "hover:underline",
        underline === "always" && "underline",
        className
      )}
      {...rest}
    >
      {children}
    </a>
  )
}

export { MuiLink }
export type { MuiLinkProps }
