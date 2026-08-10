/**
 * MuiButton
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Buton — text / contained / outlined varyantları, renk ve boyut seçenekleri.
 *   <MuiButton variant="contained" color="primary" size="medium">…</MuiButton>
 * variant: text (varsayılan) | contained | outlined
 * color: primary | secondary | success | error | info | warning | inherit
 * size: small | medium (varsayılan) | large
 * startIcon / endIcon: ikon ekleme · fullWidth · disabled · loading
 * @id 1895
 * @category Butonlar & Aksiyonlar
 * @subcategory MuiButton
 * @source mui
 */
import { type ReactNode, type ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface MuiButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  variant?: "text" | "contained" | "outlined"
  color?: "primary" | "secondary" | "success" | "error" | "info" | "warning" | "inherit"
  size?: "small" | "medium" | "large"
  startIcon?: ReactNode
  endIcon?: ReactNode
  fullWidth?: boolean
  loading?: boolean
}

const BASE =
  "inline-flex items-center justify-center gap-2 rounded font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50"

const SIZE: Record<string, string> = {
  small: "px-3 py-1 text-xs",
  medium: "px-4 py-1.5 text-sm",
  large: "px-5 py-2 text-base",
}

const VARIANT: Record<string, Record<string, string>> = {
  text: {
    primary: "text-blue-600 hover:bg-blue-50",
    secondary: "text-purple-600 hover:bg-purple-50",
    success: "text-green-700 hover:bg-green-50",
    error: "text-red-600 hover:bg-red-50",
    info: "text-sky-600 hover:bg-sky-50",
    warning: "text-amber-700 hover:bg-amber-50",
    inherit: "text-gray-900 hover:bg-gray-100",
  },
  contained: {
    primary: "bg-blue-600 text-white shadow-sm hover:bg-blue-700",
    secondary: "bg-purple-600 text-white shadow-sm hover:bg-purple-700",
    success: "bg-green-600 text-white shadow-sm hover:bg-green-700",
    error: "bg-red-600 text-white shadow-sm hover:bg-red-700",
    info: "bg-sky-600 text-white shadow-sm hover:bg-sky-700",
    warning: "bg-amber-600 text-white shadow-sm hover:bg-amber-700",
    inherit: "bg-gray-400 text-white shadow-sm hover:bg-gray-500",
  },
  outlined: {
    primary: "border border-blue-500 text-blue-600 hover:bg-blue-50",
    secondary: "border border-purple-500 text-purple-600 hover:bg-purple-50",
    success: "border border-green-500 text-green-700 hover:bg-green-50",
    error: "border border-red-500 text-red-600 hover:bg-red-50",
    info: "border border-sky-500 text-sky-600 hover:bg-sky-50",
    warning: "border border-amber-500 text-amber-700 hover:bg-amber-50",
    inherit: "border border-gray-400 text-gray-900 hover:bg-gray-100",
  },
}

function MuiButton({
  variant = "text",
  color = "primary",
  size = "medium",
  startIcon,
  endIcon,
  fullWidth = false,
  loading = false,
  disabled,
  className,
  children,
  type = "button",
  ...rest
}: MuiButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={cn(BASE, SIZE[size], VARIANT[variant][color], fullWidth && "w-full", className)}
      {...rest}
    >
      {loading ? (
        <span aria-hidden className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        startIcon
      )}
      {children}
      {!loading && endIcon}
    </button>
  )
}

export { MuiButton }
export type { MuiButtonProps }
