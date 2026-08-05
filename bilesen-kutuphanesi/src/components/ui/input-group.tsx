/**
 * InputGroup
 * Saf React bileşen (bağımlılıksız).
 * Prefix/suffix elemanlı giriş grubu — TextField içinde kullanılır.
 *   <TextField name="email">
 *     <Label>Email</Label>
 *     <InputGroup>
 *       <InputGroupPrefix><Mail className="size-4" /></InputGroupPrefix>
 *       <InputGroupInput placeholder="name@email.com" />
 *       <InputGroupSuffix>USD</InputGroupSuffix>
 *     </InputGroup>
 *   </TextField>
 * Özellikler: variant (primary/secondary) · fullWidth · TextField context'ine uyum
 * (value/onChange/invalid/disabled/required) · Input veya TextArea · prefix/suffix.
 * @id 334
 * @category Form Elemanları
 * @subcategory InputGroup
 */
import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import { useTextField } from "@/components/ui/text-field"

/* ---------- Root ---------- */

interface InputGroupProps {
  children?: ReactNode
  className?: string
  variant?: "primary" | "secondary"
  fullWidth?: boolean
}

function InputGroup({ children, className, variant: variantProp, fullWidth = false }: InputGroupProps) {
  const ctx = useTextField()
  const variant = variantProp ?? ctx?.variant ?? "primary"
  const invalid = ctx?.isInvalid ?? false
  const disabled = ctx?.isDisabled ?? false

  return (
    <div
      data-slot="input-group"
      data-variant={variant}
      data-invalid={invalid ? "true" : undefined}
      data-disabled={disabled ? "true" : undefined}
      className={cn(
        "inline-flex min-h-10 w-full items-center overflow-hidden rounded-lg border border-border bg-background text-sm transition-colors",
        "focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/40",
        variant === "secondary" && "border-transparent bg-muted/60",
        invalid && "border-red-500 focus-within:border-red-500 focus-within:ring-red-500/30",
        disabled && "cursor-not-allowed opacity-60",
        !fullWidth && "max-w-full",
        className
      )}
    >
      {children}
    </div>
  )
}

/* ---------- Input ---------- */

interface InputGroupInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function InputGroupInput({ className, onChange, ...props }: InputGroupInputProps) {
  const ctx = useTextField()

  return (
    <input
      data-slot="input-group-input"
      value={ctx ? ctx.value : props.value}
      onChange={(e) => {
        if (ctx) ctx.setValue(e.target.value)
        onChange?.(e)
      }}
      disabled={ctx ? ctx.isDisabled : props.disabled}
      readOnly={ctx ? ctx.isReadOnly : props.readOnly}
      required={ctx ? ctx.isRequired : props.required}
      name={ctx ? ctx.name : props.name}
      autoFocus={ctx ? ctx.autoFocus : props.autoFocus}
      aria-invalid={ctx?.isInvalid || undefined}
      className={cn(
        "h-9 w-full min-w-0 flex-1 rounded-none border-0 bg-transparent px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

/* ---------- TextArea ---------- */

interface InputGroupTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

function InputGroupTextArea({ className, onChange, rows = 3, ...props }: InputGroupTextAreaProps) {
  const ctx = useTextField()

  return (
    <textarea
      data-slot="input-group-textarea"
      value={ctx ? ctx.value : props.value}
      onChange={(e) => {
        if (ctx) ctx.setValue(e.target.value)
        onChange?.(e)
      }}
      disabled={ctx ? ctx.isDisabled : props.disabled}
      readOnly={ctx ? ctx.isReadOnly : props.readOnly}
      required={ctx ? ctx.isRequired : props.required}
      name={ctx ? ctx.name : props.name}
      aria-invalid={ctx?.isInvalid || undefined}
      rows={rows}
      className={cn(
        "min-h-9 w-full min-w-0 flex-1 resize-y rounded-none border-0 bg-transparent px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

/* ---------- Prefix / Suffix ---------- */

interface InputGroupAffixProps {
  children?: ReactNode
  className?: string
}

function InputGroupPrefix({ children, className }: InputGroupAffixProps) {
  return (
    <div data-slot="input-group-prefix" className={cn("flex h-full shrink-0 items-center gap-1 px-3 text-muted-foreground", className)}>
      {children}
    </div>
  )
}

function InputGroupSuffix({ children, className }: InputGroupAffixProps) {
  return (
    <div data-slot="input-group-suffix" className={cn("flex h-full shrink-0 items-center gap-1 px-3 text-muted-foreground", className)}>
      {children}
    </div>
  )
}

export { InputGroup, InputGroupInput, InputGroupPrefix, InputGroupSuffix, InputGroupTextArea }
export type { InputGroupAffixProps, InputGroupProps }
