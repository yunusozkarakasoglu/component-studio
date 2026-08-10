/**
 * MuiTextField
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Metin alanı — etiketli, hata/yardım metinli giriş kutusu.
 *   <MuiTextField label="Ad" variant="outlined" size="small" />
 * variant: outlined (varsayılan) | filled | standard
 * size: small | medium · error + helperText · fullWidth · multiline (rows)
 * startAdornment / endAdornment: öne/arkaya ikon
 * type: text | password | email | number …
 * @id 1922
 * @category Form Elemanları
 * @subcategory MuiTextField
 * @source mui
 */
import { type InputHTMLAttributes, type ReactNode, type TextareaHTMLAttributes, useId } from "react"
import { cn } from "@/lib/utils"

interface MuiTextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: ReactNode
  variant?: "outlined" | "filled" | "standard"
  size?: "small" | "medium"
  error?: boolean
  helperText?: ReactNode
  fullWidth?: boolean
  multiline?: boolean
  rows?: number
  startAdornment?: ReactNode
  endAdornment?: ReactNode
}

function MuiTextField({
  label,
  variant = "outlined",
  size = "medium",
  error = false,
  helperText,
  fullWidth = false,
  multiline = false,
  rows = 3,
  startAdornment,
  endAdornment,
  id,
  className,
  ...rest
}: MuiTextFieldProps) {
  const autoId = useId()
  const inputId = id ?? autoId
  const helperId = `${inputId}-helper`
  const padY = size === "small" ? "py-1.5" : "py-2"
  const textSize = size === "small" ? "text-sm" : "text-base"

  const fieldCls = cn(
    "flex w-full items-center gap-1.5 bg-white text-gray-900 transition-colors",
    variant === "outlined" && cn("rounded-md border", padY, textSize, error ? "border-red-500" : "border-gray-300 focus-within:border-blue-500"),
    variant === "filled" && cn("rounded-t-md border-b-2 bg-gray-100 px-2", padY, textSize, error ? "border-b-red-500" : "border-b-gray-300 focus-within:border-b-blue-500"),
    variant === "standard" && cn("border-b bg-transparent px-0", padY, textSize, error ? "border-b-red-500" : "border-b-gray-400 focus-within:border-b-blue-500"),
    fullWidth && "w-full"
  )

  const inputCls = cn(
    "w-full min-w-0 bg-transparent px-2 text-sm text-gray-900 outline-none placeholder:text-gray-400",
    variant === "standard" && "px-0"
  )

  return (
    <div className={cn("flex flex-col", fullWidth ? "w-full" : "w-full max-w-md", className)}>
      {label && (
        <label htmlFor={inputId} className={cn("mb-1 text-sm", error ? "text-red-600" : "text-gray-700")}>
          {label}
        </label>
      )}
      <div className={fieldCls}>
        {startAdornment && <span className="pl-2 text-gray-500">{startAdornment}</span>}
        {multiline ? (
          <textarea
            id={inputId}
            rows={rows}
            aria-describedby={helperText ? helperId : undefined}
            className={cn(inputCls, "resize-y py-1.5")}
            {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input id={inputId} aria-describedby={helperText ? helperId : undefined} className={inputCls} {...rest} />
        )}
        {endAdornment && <span className="pr-2 text-gray-500">{endAdornment}</span>}
      </div>
      {helperText && (
        <p id={helperId} className={cn("mt-1 text-xs", error ? "text-red-600" : "text-gray-500")}>
          {helperText}
        </p>
      )}
    </div>
  )
}

export { MuiTextField }
export type { MuiTextFieldProps }
