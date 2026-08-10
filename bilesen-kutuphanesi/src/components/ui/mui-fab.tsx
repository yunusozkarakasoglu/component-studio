/**
 * MuiFab
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Yüzen aksiyon butonu — daire, üzerinde yükselen ana aksiyon.
 *   <MuiFab color="primary" aria-label="ekle"><Plus /></MuiFab>
 * variant: circular (varsayılan) | extended (ikon + metin)
 * color: primary/secondary/success/error/info/warning · size: small/medium/large · disabled
 * @id 1910
 * @category Butonlar & Aksiyonlar
 * @subcategory MuiFab
 * @source mui
 */
import { type ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface MuiFabProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  color?: "primary" | "secondary" | "success" | "error" | "info" | "warning" | "inherit"
  size?: "small" | "medium" | "large"
  variant?: "circular" | "extended"
}

const SIZE: Record<string, string> = {
  small: "size-10 text-sm",
  medium: "size-14 text-lg",
  large: "size-16 text-xl",
}

const COLOR: Record<string, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-purple-600 text-white hover:bg-purple-700",
  success: "bg-green-600 text-white hover:bg-green-700",
  error: "bg-red-600 text-white hover:bg-red-700",
  info: "bg-sky-600 text-white hover:bg-sky-700",
  warning: "bg-amber-600 text-white hover:bg-amber-700",
  inherit: "bg-gray-400 text-white hover:bg-gray-500",
}

function MuiFab({
  color = "primary",
  size = "medium",
  variant = "circular",
  className,
  children,
  type = "button",
  ...rest
}: MuiFabProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-2 shadow-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        variant === "circular" ? "rounded-full" : "rounded-full px-5",
        SIZE[size],
        COLOR[color],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export { MuiFab }
export type { MuiFabProps }
