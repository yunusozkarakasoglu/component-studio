/**
 * MuiModal
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Modal — merkezde içerik, arka plan karartmalı.
 *   <MuiModal open={open} onClose={h} title="…">…</MuiModal>
 * open · onClose · title · maxWidth
 * @id 2026
 * @category Overlay
 * @subcategory MuiModal
 * @source mui
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { X } from "@/components/ui/icons"

interface MuiModalProps {
  open?: boolean
  onClose?: () => void
  title?: ReactNode
  maxWidth?: number
  className?: string
  children?: ReactNode
}

function MuiModal({ open = false, onClose, title, maxWidth = 480, className, children }: MuiModalProps) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={onClose} role="presentation">
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className={cn("rounded-lg bg-white text-gray-900 shadow-2xl", className)}
        style={{ maxWidth: `${maxWidth}px`, width: "100%" }}
      >
        {title && (
          <div className="flex items-center justify-between border-b border-gray-200 px-5 py-3">
            <h2 className="text-lg font-semibold">{title}</h2>
            <button type="button" aria-label="Kapat" onClick={onClose} className="rounded p-1 text-gray-500 hover:bg-gray-100">
              <X className="size-5" />
            </button>
          </div>
        )}
        <div className="p-5 text-sm text-gray-700">{children}</div>
      </div>
    </div>
  )
}

export { MuiModal }
export type { MuiModalProps }
