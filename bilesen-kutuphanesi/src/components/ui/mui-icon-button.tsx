/**
 * MuiIconButton
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * İkon butonu — yalnızca ikon içeren kare buton.
 *   <MuiIconButton aria-label="sil"><Trash2 /></MuiIconButton>
 * color: default | primary | secondary | error | success | warning
 * size: small | medium | large · disabled
 * @id 1896
 * @category Butonlar & Aksiyonlar
 * @subcategory MuiButton
 * @source mui
 */
import { type ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface MuiIconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  color?: "default" | "primary" | "secondary" | "error" | "success" | "warning" | "info"
  size?: "small" | "medium" | "large"
}

const SIZE: Record<string, string> = {
  small: "size-8 text-sm",
  medium: "size-10 text-base",
  large: "size-12 text-xl",
}

const COLOR: Record<string, string> = {
  default: "text-gray-600 hover:bg-gray-100",
  primary: "text-blue-600 hover:bg-blue-50",
  secondary: "text-purple-600 hover:bg-purple-50",
  error: "text-red-600 hover:bg-red-50",
  success: "text-green-700 hover:bg-green-50",
  warning: "text-amber-700 hover:bg-amber-50",
  info: "text-sky-600 hover:bg-sky-50",
}

function MuiIconButton({ color = "default", size = "medium", className, children, type = "button", ...rest }: MuiIconButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
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

export { MuiIconButton }
export type { MuiIconButtonProps }
