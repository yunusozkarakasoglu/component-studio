/**
 * CloseButton
 * bileşen kütüphanesi CloseButton — kapatma butonu (saf React).
 * <CloseButton onPress={() => setOpen(false)} />
 * @id 117
 * @category Alert & Dialog
 */
import type { ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import { X } from "@/components/ui/icons"

interface CloseButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /** bileşen kütüphanesi onPress karşılığı */
  onPress?: () => void
}

function CloseButton({ onPress, className, ...props }: CloseButtonProps) {
  return (
    <button
      type="button"
      aria-label="Kapat"
      onClick={onPress}
      className={cn(
        "inline-flex size-7 shrink-0 items-center justify-center rounded-md text-current opacity-70 transition-colors outline-none hover:bg-black/5 hover:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50",
        className
      )}
      {...props}
    >
      <X className="size-4" aria-hidden="true" />
    </button>
  )
}

export { CloseButton }
export type { CloseButtonProps }
