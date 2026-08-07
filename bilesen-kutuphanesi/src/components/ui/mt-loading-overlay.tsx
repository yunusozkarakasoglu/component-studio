/**
 * MtLoadingOverlay
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Yüklenme katmanı — visible, loaderProps, overlayProps.
 *   <MtLoadingOverlay visible />
 * @id 1348
 * @category Overlay
 * @subcategory MtLoadingOverlay
 * @source mantine
 */
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtLoadingOverlayProps {
  visible?: boolean
  loader?: ReactNode
  overlayBlur?: number
  zIndex?: number
  className?: string
}

function MtLoadingOverlay({ visible = false, loader, overlayBlur = 0, zIndex = 10, className }: MtLoadingOverlayProps) {
  if (!visible) return null

  return (
    <div
      data-slot="mt-loading-overlay"
      className={cn("absolute inset-0 flex items-center justify-center bg-white/70", className)}
      style={{ backdropFilter: overlayBlur ? `blur(${overlayBlur}px)` : undefined, zIndex }}
    >
      {loader ?? <span className="size-8 animate-spin rounded-full border-4 border-border border-t-blue-600" />}
    </div>
  )
}

export { MtLoadingOverlay }
export type { MtLoadingOverlayProps }
