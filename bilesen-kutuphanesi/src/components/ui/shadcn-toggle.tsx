/**
 * ShadcnToggle
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Basılı/kaldırılmış durumu olan buton (aria-pressed).
 *   <ShadcnToggle variant="outline" size="sm">Bookmark</ShadcnToggle>
 * variant: default | outline · size: sm | default | lg · isPressed/onPressedChange (kontrollü).
 * @id 725
 * @category Toggle
 * @subcategory ShadcnToggle
 * @source shadcn
 */
import { useState, type ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ShadcnToggleProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  variant?: "default" | "outline"
  size?: "sm" | "default" | "lg"
  isPressed?: boolean
  defaultPressed?: boolean
  onPressedChange?: (pressed: boolean) => void
  isDisabled?: boolean
}

function ShadcnToggle({
  className,
  variant = "default",
  size = "default",
  isPressed,
  defaultPressed,
  onPressedChange,
  isDisabled,
  children,
  ...props
}: ShadcnToggleProps) {
  const [internal, setInternal] = useState(!!defaultPressed)
  const pressed = isPressed !== undefined ? isPressed : internal

  return (
    <button
      type="button"
      data-slot="shadcn-toggle"
      data-state={pressed ? "on" : "off"}
      aria-pressed={pressed}
      disabled={isDisabled}
      onClick={(e) => {
        onPressedChange?.(!pressed)
        setInternal(!pressed)
        props.onClick?.(e)
      }}
      className={cn(
        "group/toggle inline-flex cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors outline-none",
        "focus-visible:ring-3 focus-visible:ring-ring/40",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-pressed:bg-blue-600 aria-pressed:text-white",
        variant === "outline" && "border border-border bg-background text-foreground hover:bg-muted aria-pressed:border-blue-600",
        variant === "default" && "text-foreground hover:bg-muted",
        size === "sm" && "h-8 px-2.5",
        size === "default" && "h-9 px-3",
        size === "lg" && "h-10 px-4",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export { ShadcnToggle }
export type { ShadcnToggleProps }
