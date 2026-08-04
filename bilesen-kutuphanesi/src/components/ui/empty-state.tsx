/**
 * EmptyState
 * Boş durum göstergesi — ikon + başlık + açıklama (saf React).
 * @id 140
 * @category Veri Gösterimi
 */
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface EmptyStateProps {
  icon?: ReactNode
  title?: ReactNode
  description?: ReactNode
  action?: ReactNode
  className?: string
}

function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div data-slot="empty-state" className={cn("flex flex-col items-center justify-center gap-2 px-4 py-10 text-center", className)}>
      {icon && <span className="text-muted-foreground/60">{icon}</span>}
      {title && <p className="text-sm font-medium">{title}</p>}
      {description && <p className="max-w-sm text-sm text-muted-foreground">{description}</p>}
      {action}
    </div>
  )
}

export { EmptyState }
export type { EmptyStateProps }
