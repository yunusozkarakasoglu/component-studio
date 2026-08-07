/**
 * MtInput familyası
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Temel giriş bileşeni — Input + Label + Description + Error + Wrapper.
 *   <MtInputWrapper label="Email" description="…" error="…">
 *     <MtInput leftSection={<Icon/>} />
 *   </MtInputWrapper>
 * @id 1114
 * @category Form Elemanları
 * @subcategory MtInput
 * @source mantine
 */
import type { HTMLAttributes, InputHTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  leftSection?: ReactNode
  rightSection?: ReactNode
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  isInvalid?: boolean
  isSuccess?: boolean
}

const inputSizes: Record<string, string> = {
  xs: "h-7 px-2 text-xs",
  sm: "h-8 px-2.5 text-sm",
  md: "h-9 px-3 text-sm",
  lg: "h-10 px-3.5 text-base",
  xl: "h-12 px-4 text-base",
}

function MtInput({
  className,
  leftSection,
  rightSection,
  size = "sm",
  isInvalid,
  isSuccess,
  disabled,
  ...props
}: MtInputProps) {
  return (
    <div className="relative w-full">
      {leftSection && (
        <span className="pointer-events-none absolute inset-y-0 left-2.5 flex items-center text-muted-foreground">
          {leftSection}
        </span>
      )}
      <input
        data-slot="mt-input"
        disabled={disabled}
        className={cn(
          "w-full rounded-md border border-border bg-background text-foreground shadow-xs transition-colors outline-none",
          "placeholder:text-muted-foreground focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/30",
          "disabled:cursor-not-allowed disabled:opacity-50",
          inputSizes[size],
          leftSection && "pl-8",
          rightSection && "pr-8",
          isInvalid && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/30",
          isSuccess && "border-emerald-500 focus-visible:border-emerald-500 focus-visible:ring-emerald-500/30",
          className
        )}
        {...props}
      />
      {rightSection && (
        <span className="absolute inset-y-0 right-2.5 flex items-center text-muted-foreground">
          {rightSection}
        </span>
      )}
    </div>
  )
}

interface MtInputWrapperProps extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode
  description?: ReactNode
  error?: ReactNode
  required?: boolean
  id?: string
}

function MtInputWrapper({ className, label, description, error, required, id, children, ...props }: MtInputWrapperProps) {
  return (
    <div data-slot="mt-input-wrapper" className={cn("flex flex-col gap-1.5", className)} {...props}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-foreground">
          {label}
          {required && <span className="ml-0.5 text-red-500">*</span>}
        </label>
      )}
      {description && <p className="text-xs text-muted-foreground">{description}</p>}
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

export { MtInput, MtInputWrapper }
export type { MtInputProps, MtInputWrapperProps }
