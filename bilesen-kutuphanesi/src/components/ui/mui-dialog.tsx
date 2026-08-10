/**
 * MuiDialog
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Modal diyalog — başlık, içerik, aksiyon bölümleri.
 *   <MuiDialog open={open} onClose={h} title="Başlık">…</MuiDialog>
 * open · onClose · title · maxWidth (xs/sm/md/lg/xl) · fullScreen · fullWidth
 * actions: alt aksiyon butonları (otomatik sağa hizalı)
 * @id 1980
 * @category Overlay
 * @subcategory MuiDialog
 * @source mui
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { X } from "@/components/ui/icons"

interface MuiDialogProps {
  open?: boolean
  onClose?: () => void
  title?: ReactNode
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl"
  fullScreen?: boolean
  fullWidth?: boolean
  actions?: ReactNode
  closeable?: boolean
  className?: string
  children?: ReactNode
}

const MAX_W: Record<string, string> = {
  xs: "max-w-sm",
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
}

function MuiDialog({
  open = false,
  onClose,
  title,
  maxWidth = "sm",
  fullScreen = false,
  fullWidth = false,
  actions,
  closeable = true,
  className,
  children,
}: MuiDialogProps) {
  if (!open) return null
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={typeof title === "string" ? title : undefined}
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "flex max-h-[85vh] flex-col bg-white text-gray-900 shadow-xl",
          fullScreen ? "h-full w-full max-w-none rounded-none" : cn("rounded-lg", fullWidth ? "w-full" : "", MAX_W[maxWidth] ?? MAX_W.sm),
          className
        )}
      >
        {(title || closeable) && (
          <div className="flex items-center justify-between border-b border-gray-200 px-5 py-3">
            <h2 className="text-lg font-semibold">{title}</h2>
            {closeable && (
              <button type="button" aria-label="Kapat" onClick={onClose} className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-800">
                <X className="size-5" />
              </button>
            )}
          </div>
        )}
        <div className="flex-1 overflow-y-auto px-5 py-4 text-sm text-gray-700">{children}</div>
        {actions && <div className="flex justify-end gap-2 border-t border-gray-200 px-5 py-3">{actions}</div>}
      </div>
    </div>
  )
}

export { MuiDialog }
export type { MuiDialogProps }
