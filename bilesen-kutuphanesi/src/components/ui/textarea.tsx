/**
 * TextArea
 * Saf React bileşen (bağımlılıksız).
 * Çok satırlı metin girişi — TextField içinde veya bağımsız kullanılabilir.
 *   <TextArea rows={4} placeholder="Mesajınız" />  |  <TextField><TextArea /></TextField>
 * Özellikler: TextField context'ine uyum · primary/secondary variant · red invalid.
 * @id 300
 * @category Form Elemanları
 */
import type { TextareaHTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import { useTextField } from "@/components/ui/text-field"

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "primary" | "secondary"
}

function TextArea({ className, variant: variantProp, onChange, onFocus, onBlur, ...props }: TextAreaProps) {
  const ctx = useTextField()

  const variant = variantProp ?? ctx?.variant ?? "primary"
  const invalid = ctx?.isInvalid ?? (props["aria-invalid"] === true || props["aria-invalid"] === "true")

  return (
    <textarea
      data-slot="text-area"
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
      autoFocus={ctx ? ctx.autoFocus : props.autoFocus}
      aria-invalid={invalid || undefined}
      className={cn(
        "min-h-20 w-full resize-y rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground",
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

export { TextArea }
export type { TextAreaProps }
