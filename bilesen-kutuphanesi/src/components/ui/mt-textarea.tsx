/**
 * MtTextarea
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Çok satırlı metin alanı — autosize, minRows/maxRows, resize.
 *   <MtTextarea label="Message" autosize minRows={4} />
 * @id 1116
 * @category Form Elemanları
 * @subcategory MtTextarea
 * @source mantine
 */
import { useRef, useEffect, type TextareaHTMLAttributes, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: ReactNode
  description?: ReactNode
  error?: ReactNode
  success?: ReactNode
  required?: boolean
  autosize?: boolean
  minRows?: number
  maxRows?: number
  resize?: "none" | "vertical" | "horizontal" | "both"
  loading?: boolean
}

function MtTextarea({
  className,
  label,
  description,
  error,
  success,
  required,
  autosize,
  minRows = 3,
  maxRows,
  resize = "none",
  loading,
  disabled,
  id,
  ...props
}: MtTextareaProps) {
  const ref = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (autosize && ref.current) {
      ref.current.style.height = "auto"
      const lineHeight = 20
      const minH = minRows * lineHeight
      const maxH = maxRows ? maxRows * lineHeight : Infinity
      ref.current.style.height = `${Math.min(Math.max(ref.current.scrollHeight, minH), maxH)}px`
    }
  }, [autosize, minRows, maxRows, props.value])

  return (
    <div data-slot="mt-textarea" className="flex w-full flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-foreground">
          {label}
          {required && <span className="ml-0.5 text-red-500">*</span>}
        </label>
      )}
      {description && <p className="text-xs text-muted-foreground">{description}</p>}
      <textarea
        ref={ref}
        id={id}
        data-slot="mt-textarea-field"
        rows={autosize ? 1 : minRows}
        disabled={disabled || loading}
        className={cn(
          "w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-xs transition-colors outline-none",
          "placeholder:text-muted-foreground focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/30",
          "disabled:cursor-not-allowed disabled:opacity-50",
          resize === "none" && "resize-none",
          resize === "vertical" && "resize-y",
          resize === "horizontal" && "resize-x",
          resize === "both" && "resize",
          error && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/30",
          success && "border-emerald-500 focus-visible:border-emerald-500 focus-visible:ring-emerald-500/30",
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
      {success && !error && <p className="text-xs text-emerald-600">{success}</p>}
    </div>
  )
}

export { MtTextarea }
export type { MtTextareaProps }
