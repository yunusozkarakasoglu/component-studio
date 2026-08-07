/**
 * MtNotification
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Bildirim — title, children (açıklama), icon, color, withCloseButton.
 *   <MtNotification title="Default notification" withCloseButton>…</MtNotification>
 * @id 1349
 * @category Overlay
 * @subcategory MtNotification
 * @source mantine
 */
import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"
import { X } from "@/components/ui/icons"

interface MtNotificationProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: ReactNode
  icon?: ReactNode
  color?: string
  withCloseButton?: boolean
  onClose?: () => void
}

function MtNotification({ className, title, icon, color = "blue", withCloseButton, onClose, children, ...props }: MtNotificationProps) {
  return (
    <div
      data-slot="mt-notification"
      className={cn("flex w-full items-start gap-3 rounded-lg border border-border bg-background p-3.5 text-foreground shadow-sm", className)}
      {...props}
    >
      {icon && (
        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${color}20`, color }}>
          {icon}
        </span>
      )}
      <div className="min-w-0 flex-1">
        {title && <p className="mb-0.5 text-sm font-semibold">{title}</p>}
        <div className="text-sm text-muted-foreground">{children}</div>
      </div>
      {withCloseButton && (
        <button type="button" aria-label="Close" onClick={onClose} className="inline-flex size-5 shrink-0 cursor-pointer items-center justify-center rounded text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
          <X className="size-3.5" />
        </button>
      )}
    </div>
  )
}

export { MtNotification }
export type { MtNotificationProps }
