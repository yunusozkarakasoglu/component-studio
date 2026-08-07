/**
 * ShadcnProgress
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * İlerleme çubuğu — value (0-100).
 *   <ShadcnProgress value={66} />
 * @id 938
 * @category Yükleme & İlerleme
 * @subcategory ShadcnProgress
 * @source shadcn
 */
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ShadcnProgressProps extends HTMLAttributes<HTMLDivElement> {
  value?: number
  max?: number
  isIndeterminate?: boolean
}

function ShadcnProgress({ className, value = 0, max = 100, isIndeterminate, ...props }: ShadcnProgressProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))

  return (
    <div
      role="progressbar"
      aria-valuenow={isIndeterminate ? undefined : Math.round(value)}
      aria-valuemin={0}
      aria-valuemax={max}
      data-slot="shadcn-progress"
      className={cn("relative h-2 w-full overflow-hidden rounded-full bg-muted", className)}
      {...props}
    >
      <div
        data-slot="shadcn-progress-indicator"
        className={cn(
          "h-full rounded-full bg-blue-600 transition-all duration-300",
          isIndeterminate && "animate-progress-indeterminate"
        )}
        style={isIndeterminate ? undefined : { width: `${pct}%` }}
      />
    </div>
  )
}

export { ShadcnProgress }
export type { ShadcnProgressProps }
