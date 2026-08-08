/**
 * MtEmptyState + MtEmptyStateActions
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Boş durum — icon, title, description, varyantlar.
 *   <MtEmptyState icon={<Search/>} title="No results" description="…">
 *     <MtEmptyStateActions><MtButton>Reset</MtButton></MtEmptyStateActions>
 *   </MtEmptyState>
 * @id 1430
 * @category Veri Gösterimi
 * @subcategory MtEmptyState
 * @source mantine
 */
import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtEmptyStateProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  icon?: ReactNode
  title?: ReactNode
  description?: ReactNode
  variant?: "filled" | "outline" | "transparent"
  children?: ReactNode
}

function MtEmptyState({ className, icon, title, description, variant = "filled", children, ...props }: MtEmptyStateProps) {
  return (
    <div
      data-slot="mt-empty-state"
      className={cn(
        "flex flex-col items-center justify-center gap-1 px-6 py-14 text-center",
        variant === "filled" && "rounded-xl border border-dashed border-border bg-muted/40",
        variant === "outline" && "rounded-xl border border-border",
        className
      )}
      {...props}
    >
      {icon && (
        <div className="mb-2 flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
          {icon}
        </div>
      )}
      {title && <p className="text-base font-semibold text-foreground">{title}</p>}
      {description && <p className="max-w-sm text-sm text-muted-foreground">{description}</p>}
      {children}
    </div>
  )
}

function MtEmptyStateActions({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div data-slot="mt-empty-state-actions" className={cn("mt-4 flex gap-2", className)} {...props}>
      {children}
    </div>
  )
}

export { MtEmptyState, MtEmptyStateActions }
export type { MtEmptyStateProps }
