/**
 * MtButton
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Buton — variant (filled/default/light/outline/transparent/gradient),
 * size (xs-xl + compact), leftSection/rightSection, loading, fullWidth.
 *   <MtButton leftSection={<Icon/>} variant="filled">Button</MtButton>
 * @id 1058
 * @category Butonlar & Aksiyonlar
 * @subcategory MtButton
 * @source mantine
 */
import type { ButtonHTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

type MtButtonVariant = "filled" | "default" | "light" | "outline" | "transparent" | "gradient"
type MtButtonSize = "xs" | "sm" | "md" | "lg" | "xl" | "compact-xs" | "compact-sm" | "compact-md" | "compact-lg" | "compact-xl"

interface MtButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: MtButtonVariant
  size?: MtButtonSize
  leftSection?: ReactNode
  rightSection?: ReactNode
  loading?: boolean
  fullWidth?: boolean
  gradient?: { from: string; to: string; deg?: number }
}

const variants: Record<string, string> = {
  filled: "bg-blue-600 text-white hover:bg-blue-700",
  default: "border border-border bg-background text-foreground hover:bg-muted",
  light: "bg-blue-100 text-blue-700 hover:bg-blue-200",
  outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  transparent: "text-foreground hover:bg-muted",
  gradient: "text-white",
}

const sizes: Record<string, string> = {
  xs: "h-6 px-2.5 text-xs",
  sm: "h-8 px-3.5 text-sm",
  md: "h-9 px-5 text-sm",
  lg: "h-11 px-7 text-base",
  xl: "h-12 px-8 text-base",
  "compact-xs": "h-5 px-2 text-xs",
  "compact-sm": "h-6 px-2.5 text-sm",
  "compact-md": "h-7 px-3 text-sm",
  "compact-lg": "h-8 px-4 text-base",
  "compact-xl": "h-9 px-5 text-base",
}

function MtButton({
  className,
  variant = "filled",
  size = "sm",
  leftSection,
  rightSection,
  loading,
  fullWidth,
  gradient,
  disabled,
  children,
  style,
  ...props
}: MtButtonProps) {
  return (
    <button
      type="button"
      data-slot="mt-button"
      disabled={disabled || loading}
      className={cn(
        "inline-flex shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-md font-medium whitespace-nowrap transition-colors outline-none",
        "focus-visible:ring-2 focus-visible:ring-ring/40",
        "disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      style={
        variant === "gradient"
          ? { backgroundImage: `linear-gradient(${gradient?.deg ?? 90}deg, ${gradient?.from ?? "#0ea5e9"}, ${gradient?.to ?? "#6366f1"})`, ...style }
          : style
      }
      {...props}
    >
      {leftSection && <span className="flex shrink-0 items-center">{leftSection}</span>}
      <span className="flex items-center gap-1.5">
        {loading && <span className="size-3 animate-spin rounded-full border-2 border-current border-t-transparent" />}
        {children}
      </span>
      {rightSection && <span className="flex shrink-0 items-center">{rightSection}</span>}
    </button>
  )
}

export { MtButton }
export type { MtButtonProps }
