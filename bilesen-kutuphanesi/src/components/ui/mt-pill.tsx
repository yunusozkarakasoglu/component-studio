/**
 * MtPill
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Hap/etiket — withRemoveButton, onRemove, boyutlar.
 *   <MtPill withRemoveButton onRemove={() => {}}>React</MtPill>
 * @id 1435
 * @category Veri Gösterimi
 * @subcategory MtPill
 * @source mantine
 */
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import { X } from "@/components/ui/icons"

const pillSizes: Record<string, string> = { xs: "h-5 px-1.5 text-xs", sm: "h-6 px-2 text-xs", md: "h-7 px-2.5 text-sm", lg: "h-8 px-3 text-sm", xl: "h-10 px-4 text-base" }

interface MtPillProps extends HTMLAttributes<HTMLSpanElement> {
  withRemoveButton?: boolean
  onRemove?: () => void
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  disabled?: boolean
}

function MtPill({ className, withRemoveButton, onRemove, size = "md", disabled, children, ...props }: MtPillProps) {
  return (
    <span
      data-slot="mt-pill"
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 font-medium text-blue-700",
        pillSizes[size],
        disabled && "opacity-50",
        className
      )}
      {...props}
    >
      {children}
      {withRemoveButton && (
        <button
          type="button"
          aria-label="Remove"
          onClick={(e) => {
            e.stopPropagation()
            onRemove?.()
          }}
          className="flex cursor-pointer items-center justify-center rounded-full p-0.5 transition-colors hover:bg-blue-200/70 focus-visible:ring-2 focus-visible:ring-blue-500/40"
        >
          <X className="size-3" />
        </button>
      )}
    </span>
  )
}

export { MtPill }
export type { MtPillProps }
