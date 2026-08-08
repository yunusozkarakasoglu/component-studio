/**
 * MtSpoiler
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Gizle/göster — maxHeight altında kalan içerik, showLabel/hideLabel.
 *   <MtSpoiler maxHeight={80} showLabel="Göster" hideLabel="Gizle">…</MtSpoiler>
 * @id 1517
 * @category Alert & Dialog
 * @subcategory MtSpoiler
 * @source mantine
 */
import { useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtSpoilerProps {
  maxHeight?: number
  showLabel?: ReactNode
  hideLabel?: ReactNode
  expanded?: boolean
  onExpandedChange?: (expanded: boolean) => void
  children?: ReactNode
  className?: string
}

function MtSpoiler({ maxHeight = 100, showLabel = "Show more", hideLabel = "Show less", expanded: controlled, onExpandedChange, children, className }: MtSpoilerProps) {
  const [internal, setInternal] = useState(false)
  const expanded = controlled !== undefined ? controlled : internal

  const toggle = () => {
    if (controlled !== undefined) onExpandedChange?.(!controlled)
    else setInternal((v) => !v)
  }

  return (
    <div data-slot="mt-spoiler" className={cn("flex flex-col", className)}>
      <div className="relative overflow-hidden" style={{ maxHeight: expanded ? undefined : maxHeight }}>
        <div className="text-sm leading-relaxed">{children}</div>
        {!expanded && <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background to-transparent" />}
      </div>
      <button
        type="button"
        onClick={toggle}
        className="mt-1.5 cursor-pointer self-start text-xs font-medium text-blue-600 hover:underline"
      >
        {expanded ? hideLabel : showLabel}
      </button>
    </div>
  )
}

export { MtSpoiler }
export type { MtSpoilerProps }
