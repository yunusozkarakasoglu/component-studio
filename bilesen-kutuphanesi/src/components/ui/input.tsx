/**
 * Input
 * Saf React bileşen (bağımlılıksız).
 * Tek satır metin girişi — TextField içinde veya bağımsız kullanılabilir.
 *   <Input placeholder="Ad" />   |   <TextField><Label>…</Label><Input /></TextField>
 * Özellikler: TextField context'ine uyum (value/onChange/disabled/invalid/required/
 * name/type/variant) · primary/secondary variant · red invalid durumu · focus ring.
 * @id 299
 * @category Form Elemanları
 */
import type { InputHTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import { useTextField } from "@/components/ui/text-field"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary" | "secondary"
}

function Input({ className, variant: variantProp, onChange, onFocus, onBlur, ...props }: InputProps) {
  const ctx = useTextField()

  const variant = variantProp ?? ctx?.variant ?? "primary"
  const invalid = ctx?.isInvalid ?? (props["aria-invalid"] === true || props["aria-invalid"] === "true")

  return (
    <input
      data-slot="input"
      data-variant={variant}
      value={ctx ? ctx.value : props.value}
      onChange={(e) => {
        if (ctx) ctx.setValue(e.target.value)
        onChange?.(e)
      }}
      onFocus={(e) => {
        ctx?.setFocusWithin(true)
        onFocus?.(e)
      }}
      onBlur={(e) => {
        ctx?.setFocusWithin(false)
        onBlur?.(e)
      }}
      disabled={ctx ? ctx.isDisabled : props.disabled}
      readOnly={ctx ? ctx.isReadOnly : props.readOnly}
      required={ctx ? ctx.isRequired : props.required}
      name={ctx ? ctx.name : props.name}
      type={ctx ? ctx.type : (props.type ?? "text")}
      autoFocus={ctx ? ctx.autoFocus : props.autoFocus}
      aria-invalid={invalid || undefined}
      className={cn(
        "h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground",
        "focus:border-ring focus:ring-3 focus:ring-ring/40",
        variant === "secondary" && "border-transparent bg-muted/60",
        invalid && "border-red-500 focus:border-red-500 focus:ring-red-500/30",
        "disabled:cursor-not-allowed disabled:opacity-60",
        className
      )}
      {...props}
    />
  )
}

export { Input }
export type { InputProps }
