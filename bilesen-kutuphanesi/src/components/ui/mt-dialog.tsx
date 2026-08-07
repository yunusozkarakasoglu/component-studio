/**
 * MtDialog
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Küçük bildirim diyaloğu — opened/onClose, position (top-right).
 *   <MtDialog opened={opened} onClose={…}>…</MtDialog>
 * @id 1343
 * @category Overlay
 * @subcategory MtDialog
 * @source mantine
 */
import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"
import { X } from "@/components/ui/icons"

interface MtDialogProps extends HTMLAttributes<HTMLDivElement> {
  opened?: boolean
  onClose?: () => void
  children?: ReactNode
}

function MtDialog({ opened, onClose, children, className, ...props }: MtDialogProps) {
  if (!opened) return null

  return (
    <div
      role="dialog"
      data-slot="mt-dialog"
      className={cn(
        "fixed top-4 right-4 z-50 flex w-80 flex-col gap-2 rounded-lg border border-border bg-background p-4 text-foreground shadow-xl",
        className
      )}
      {...props}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute right-2.5 top-2.5 inline-flex size-6 cursor-pointer items-center justify-center rounded text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        <X className="size-3.5" />
      </button>
      {children}
    </div>
  )
}

export { MtDialog }
export type { MtDialogProps }
