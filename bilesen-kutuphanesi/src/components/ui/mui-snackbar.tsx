/**
 * MuiSnackbar
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Geçici bildirim — alt ekranda kısa süre görünür.
 *   <MuiSnackbar open={open} message="Kaydedildi" />
 * open · message · onClose · autoHideDuration (ms) · anchorOrigin
 * action: sağda aksiyon butonu
 * @id 1986
 * @category Overlay
 * @subcategory MuiSnackbar
 * @source mui
 */
import { useEffect, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MuiSnackbarProps {
  open?: boolean
  message?: ReactNode
  onClose?: () => void
  autoHideDuration?: number
  action?: ReactNode
  anchorOrigin?: "bottom-left" | "bottom-center" | "bottom-right" | "top-left" | "top-center" | "top-right"
  className?: string
}

const ANCHOR: Record<string, string> = {
  "bottom-left": "bottom-4 left-4",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  "bottom-right": "bottom-4 right-4",
  "top-left": "top-4 left-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "top-right": "top-4 right-4",
}

function MuiSnackbar({
  open = false,
  message,
  onClose,
  autoHideDuration = 4000,
  action,
  anchorOrigin = "bottom-left",
  className,
}: MuiSnackbarProps) {
  useEffect(() => {
    if (!open) return
    const t = window.setTimeout(() => onClose?.(), autoHideDuration)
    return () => window.clearTimeout(t)
  }, [open, autoHideDuration, onClose])

  if (!open) return null
  return (
    <div className={cn("fixed z-50 flex items-center gap-3 rounded bg-gray-800 px-4 py-3 text-sm text-white shadow-lg", ANCHOR[anchorOrigin], className)} role="status">
      <span className="flex-1">{message}</span>
      {action}
    </div>
  )
}

export { MuiSnackbar }
export type { MuiSnackbarProps }
