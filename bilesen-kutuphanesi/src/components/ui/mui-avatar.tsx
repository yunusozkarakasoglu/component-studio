/**
 * MuiAvatar
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Profil görseli — baş harf, görsel veya ikon.
 *   <MuiAvatar>YK</MuiAvatar> · <MuiAvatar src="…" alt="…" />
 * size: small/medium/large · variant: circular/rounded/square
 * src: görsel URL · children: baş harf/ikon
 * @id 2009
 * @category Veri Gösterimi
 * @subcategory MuiAvatar
 * @source mui
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MuiAvatarProps {
  src?: string
  alt?: string
  size?: "small" | "medium" | "large"
  variant?: "circular" | "rounded" | "square"
  className?: string
  children?: ReactNode
}

const SIZE: Record<string, string> = {
  small: "size-8 text-xs",
  medium: "size-10 text-sm",
  large: "size-14 text-lg",
}

function MuiAvatar({ src, alt, size = "medium", variant = "circular", className, children }: MuiAvatarProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center overflow-hidden bg-gray-300 font-medium text-gray-700",
        SIZE[size],
        variant === "circular" ? "rounded-full" : variant === "rounded" ? "rounded-lg" : "rounded-none",
        className
      )}
    >
      {src ? <img src={src} alt={alt} className="size-full object-cover" /> : children}
    </span>
  )
}

export { MuiAvatar }
export type { MuiAvatarProps }
