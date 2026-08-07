/**
 * MtCloseButton
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Kapatma butonu — X ikonu, size, icon prop.
 *   <MtCloseButton aria-label="Close" />
 * @id 1076
 * @category Butonlar & Aksiyonlar
 * @subcategory MtCloseButton
 * @source mantine
 */
import type { ButtonHTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"
import { X } from "@/components/ui/icons"

interface MtCloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode
  size?: "xs" | "sm" | "md" | "lg" | "xl"
}

const sizes: Record<string, string> = {
  xs: "size-5",
  sm: "size-6",
  md: "size-7",
  lg: "size-8",
  xl: "size-10",
}

const iconSizes: Record<string, string> = {
  xs: "size-2.5",
  sm: "size-3",
  md: "size-3.5",
  lg: "size-4",
  xl: "size-5",
}

function MtCloseButton({ className, icon, size = "md", ...props }: MtCloseButtonProps) {
  return (
    <button
      type="button"
      data-slot="mt-close-button"
      className={cn(
        "inline-flex shrink-0 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors outline-none",
        "hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/40",
        sizes[size],
        className
      )}
      {...props}
    >
      {icon ?? <X className={iconSizes[size]} />}
    </button>
  )
}

export { MtCloseButton }
export type { MtCloseButtonProps }
