/**
 * MtPasswordInput
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Şifre girişi — göster/gizle toggle, visibilityIcon.
 *   <MtPasswordInput label="Password" placeholder="Your password" />
 * @id 1118
 * @category Form Elemanları
 * @subcategory MtPasswordInput
 * @source mantine
 */
import { useState, type InputHTMLAttributes, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "@/components/ui/icons"

interface MtPasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: ReactNode
  description?: ReactNode
  error?: ReactNode
  success?: ReactNode
  required?: boolean
  visibilityIcon?: ReactNode
  visibilityOffIcon?: ReactNode
  visible?: boolean
  onVisibilityChange?: (visible: boolean) => void
  defaultValueVisible?: boolean
  loading?: boolean
  leftSection?: ReactNode
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  disabled?: boolean
}

function MtPasswordInput({
  className,
  label,
  description,
  error,
  success,
  required,
  visibilityIcon,
  visibilityOffIcon,
  visible,
  onVisibilityChange,
  defaultValueVisible,
  loading,
  leftSection,
  size = "sm",
  id,
  disabled,
  ...props
}: MtPasswordInputProps) {
  const [internalVisible, setInternalVisible] = useState(!!defaultValueVisible)
  const isVisible = visible !== undefined ? visible : internalVisible

  const toggle = () => {
    const next = !isVisible
    if (visible === undefined) setInternalVisible(next)
    onVisibilityChange?.(next)
  }

  return (
    <div data-slot="mt-password-input" className="flex w-full flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-foreground">
          {label}
          {required && <span className="ml-0.5 text-red-500">*</span>}
        </label>
      )}
      {description && <p className="text-xs text-muted-foreground">{description}</p>}
      <div className="relative w-full">
        {leftSection && (
          <span className="pointer-events-none absolute inset-y-0 left-2.5 flex items-center text-muted-foreground">
            {leftSection}
          </span>
        )}
        <input
          id={id}
          type={isVisible ? "text" : "password"}
          data-slot="mt-password-input-field"
          disabled={disabled || loading}
          className={cn(
            "w-full rounded-md border border-border bg-background px-3 py-1.5 pr-9 text-sm text-foreground shadow-xs transition-colors outline-none",
            "placeholder:text-muted-foreground focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/30",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red-500",
            success && "border-emerald-500",
            leftSection && "pl-8",
            size === "xs" && "h-7 px-2 text-xs",
            size === "sm" && "h-8 px-2.5 text-sm",
            size === "md" && "h-9 px-3 text-sm",
            size === "lg" && "h-10 px-3.5 text-base",
            size === "xl" && "h-12 px-4 text-base",
            className
          )}
          {...props}
        />
        {loading && (
          <span className="absolute inset-y-0 right-9 flex items-center">
            <span className="size-3.5 animate-spin rounded-full border-2 border-border border-t-blue-500" />
          </span>
        )}
        <button
          type="button"
          tabIndex={-1}
          onClick={toggle}
          aria-label={isVisible ? "Hide password" : "Show password"}
          className="absolute inset-y-0 right-2 flex cursor-pointer items-center text-muted-foreground hover:text-foreground"
        >
          {isVisible ? (visibilityOffIcon ?? <EyeOff className="size-4" />) : (visibilityIcon ?? <Eye className="size-4" />)}
        </button>
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
      {success && !error && <p className="text-xs text-emerald-600">{success}</p>}
    </div>
  )
}

export { MtPasswordInput }
export type { MtPasswordInputProps }
