/**
 * ToggleButton
 * Saf React bileşen (bağımlılıksız).
 * Aç/kapalı veya seçili/seçili değil durumu — bağımsız veya ToggleButtonGroup içinde.
 *   <ToggleButton defaultSelected>
 *     <Heart /> Like
 *   </ToggleButton>
 * Özellikler: isSelected/defaultSelected/onChange · variant (default/ghost) ·
 * size (sm/md/lg) · isIconOnly · isDisabled · onPress · children render fn
 * ({isSelected}) · ToggleButtonGroup context'ine uyum (id + seçim yönetimi).
 * @id 417
 * @category Seçim
 * @subcategory ToggleButton
 */
import { useContext, useState, type ButtonHTMLAttributes, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { ToggleButtonGroupContext, type ToggleButtonSize } from "@/components/ui/toggle-button-group"

interface ToggleButtonRenderProps {
  isSelected: boolean
  isDisabled: boolean
}

interface ToggleButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "children"> {
  /** ToggleButtonGroup içinde gerekli */
  id?: string
  variant?: "default" | "ghost"
  size?: ToggleButtonSize
  isIconOnly?: boolean
  isSelected?: boolean
  defaultSelected?: boolean
  isDisabled?: boolean
  onChange?: (isSelected: boolean) => void
  onPress?: () => void
  children?: ReactNode | ((values: ToggleButtonRenderProps) => ReactNode)
}

function ToggleButton({
  id,
  variant = "default",
  size: sizeProp,
  isIconOnly = false,
  isSelected: isSelectedProp,
  defaultSelected = false,
  isDisabled = false,
  onChange,
  onPress,
  children,
  className,
  ...props
}: ToggleButtonProps) {
  const group = useContext(ToggleButtonGroupContext)
  const [internalSelected, setInternalSelected] = useState(defaultSelected)

  const inGroup = group != null
  const size = sizeProp ?? group?.size ?? "md"
  const disabled = isDisabled || (group?.isDisabled ?? false)

  const isSelected = inGroup
    ? id != null && (group?.selectedKeys.includes(id) ?? false)
    : (isSelectedProp ?? internalSelected)

  const toggle = () => {
    if (disabled) return
    if (inGroup) {
      if (id != null) group?.toggle(id)
      return
    }
    const next = !isSelected
    setInternalSelected(next)
    onChange?.(next)
    onPress?.()
  }

  const content = typeof children === "function" ? children({ isSelected, isDisabled: disabled }) : children

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isSelected}
      data-slot="toggle-button"
      data-variant={variant}
      data-selected={isSelected ? "true" : undefined}
      data-disabled={disabled ? "true" : undefined}
      onClick={toggle}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-background text-sm font-medium text-foreground transition-colors outline-none",
        "hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50",
        "data-[selected=true]:border-blue-600 data-[selected=true]:bg-blue-600 data-[selected=true]:text-white",
        variant === "ghost" && "border-transparent bg-transparent hover:bg-muted",
        size === "sm" && (isIconOnly ? "size-8" : "h-8 px-2.5"),
        size === "md" && (isIconOnly ? "size-9" : "h-9 px-3"),
        size === "lg" && (isIconOnly ? "size-10" : "h-10 px-4"),
        disabled && "cursor-not-allowed opacity-60",
        className
      )}
      {...props}
    >
      {content}
    </button>
  )
}

export { ToggleButton }
export type { ToggleButtonProps, ToggleButtonRenderProps }
