/**
 * MtTextInput
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Metin girişi — label + description + error + left/rightSection + loading.
 *   <MtTextInput label="Email" placeholder="Your email" leftSection={<Icon/>} />
 * @id 1115
 * @category Form Elemanları
 * @subcategory MtTextInput
 * @source mantine
 */
import type { InputHTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtTextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: ReactNode
  description?: ReactNode
  error?: ReactNode
  success?: ReactNode
  required?: boolean
  leftSection?: ReactNode
  rightSection?: ReactNode
  loading?: boolean
  size?: "xs" | "sm" | "md" | "lg" | "xl"
}

const inputSizes: Record<string, string> = {
  xs: "h-7 px-2 text-xs",
  sm: "h-8 px-2.5 text-sm",
  md: "h-9 px-3 text-sm",
  lg: "h-10 px-3.5 text-base",
  xl: "h-12 px-4 text-base",
}

function MtTextInput({
  className,
  label,
  description,
  error,
  success,
  required,
  leftSection,
  rightSection,
  loading,
  size = "sm",
  id,
  disabled,
  ...props
}: MtTextInputProps) {
  return (
    <div data-slot="mt-text-input" className="flex w-full flex-col gap-1.5">
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
          data-slot="mt-text-input-field"
          disabled={disabled || loading}
          className={cn(
            "w-full rounded-md border border-border bg-background text-foreground shadow-xs transition-colors outline-none",
            "placeholder:text-muted-foreground focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/30",
            "disabled:cursor-not-allowed disabled:opacity-50",
            inputSizes[size],
            leftSection && "pl-8",
            rightSection && "pr-8",
            error && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/30",
            success && "border-emerald-500 focus-visible:border-emerald-500 focus-visible:ring-emerald-500/30",
            className
          )}
          {...props}
        />
        {rightSection && (
          <span className="pointer-events-none absolute inset-y-0 right-2.5 flex items-center text-muted-foreground">
            {rightSection}
          </span>
        )}
        {loading && (
          <span className="absolute inset-y-0 right-2.5 flex items-center">
            <span className="size-3.5 animate-spin rounded-full border-2 border-border border-t-blue-500" />
          </span>
        )}
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
      {success && !error && <p className="text-xs text-emerald-600">{success}</p>}
    </div>
  )
}

export { MtTextInput }
export type { MtTextInputProps }
