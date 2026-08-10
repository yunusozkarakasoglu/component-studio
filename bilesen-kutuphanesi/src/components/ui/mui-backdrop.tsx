/**
 * MuiBackdrop
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Arka plan karartma — içerik üzerinde yarı saydam katman.
 *   <MuiBackdrop open={open} onClick={h} />
 * open · onClick · invisible: tamamen şeffaf
 * @id 1990
 * @category Overlay
 * @subcategory MuiBackdrop
 * @source mui
 */
import { cn } from "@/lib/utils"

interface MuiBackdropProps {
  open?: boolean
  onClick?: () => void
  invisible?: boolean
  className?: string
}

function MuiBackdrop({ open = false, onClick, invisible = false, className }: MuiBackdropProps) {
  if (!open) return null
  return (
    <div
      role="presentation"
      onClick={onClick}
      className={cn("fixed inset-0 z-40 transition-opacity", invisible ? "bg-transparent" : "bg-black/50", className)}
    />
  )
}

export { MuiBackdrop }
export type { MuiBackdropProps }
