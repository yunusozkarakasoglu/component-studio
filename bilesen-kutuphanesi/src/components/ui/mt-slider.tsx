/**
 * MtSlider
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Kaydırıcı — min/max/step, marks, label, disabled, vertical, inverted.
 *   <MtSlider defaultValue={40} label={(v) => `${v}%`} />
 * @id 1256
 * @category Seçim
 * @subcategory MtSlider
 * @source mantine
 */
import { useState, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtSliderMark {
  value: number
  label?: ReactNode
}

interface MtSliderProps {
  value?: number
  defaultValue?: number
  onChange?: (value: number) => void
  min?: number
  max?: number
  step?: number
  label?: (value: number) => ReactNode
  marks?: MtSliderMark[]
  disabled?: boolean
  orientation?: "horizontal" | "vertical"
  inverted?: boolean
  className?: string
  thumbChildren?: ReactNode
  thumbSize?: number
}

function MtSlider({
  value,
  defaultValue = 0,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  label,
  marks,
  disabled,
  orientation = "horizontal",
  inverted,
  className,
  thumbChildren,
  thumbSize = 18,
}: MtSliderProps) {
  const [internal, setInternal] = useState(defaultValue)
  const current = value !== undefined ? value : internal
  const trackRef = useRef<HTMLDivElement>(null)

  const set = (v: number) => {
    const clamped = Math.min(max, Math.max(min, v))
    if (value === undefined) setInternal(clamped)
    onChange?.(clamped)
  }

  const percent = ((current - min) / (max - min)) * 100
  const fillPct = inverted ? 100 - percent : percent
  const vertical = orientation === "vertical"

  const handlePointer = (clientPos: number) => {
    const rect = trackRef.current?.getBoundingClientRect()
    if (!rect) return
    const ratio = vertical
      ? 1 - (clientPos - rect.top) / rect.height
      : (clientPos - rect.left) / rect.width
    const raw = min + Math.max(0, Math.min(1, ratio)) * (max - min)
    const stepped = Math.round((raw - min) / step) * step + min
    set(stepped)
  }

  return (
    <div
      data-slot="mt-slider"
      className={cn("relative select-none", vertical ? "h-40 w-fit" : "w-full", disabled && "pointer-events-none opacity-50", className)}
    >
      <div
        ref={trackRef}
        className={cn("relative rounded-full bg-gray-200", vertical ? "h-full w-1.5" : "h-1.5 w-full")}
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId)
          handlePointer(vertical ? e.clientY : e.clientX)
        }}
        onPointerMove={(e) => {
          if (e.buttons === 1) handlePointer(vertical ? e.clientY : e.clientX)
        }}
      >
        <div
          className="absolute rounded-full bg-blue-600"
          style={vertical
            ? { bottom: 0, left: 0, width: "100%", height: `${fillPct}%` }
            : { left: 0, top: 0, height: "100%", width: `${fillPct}%` }}
        />
        {/* tutamak */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-full border-2 border-white bg-blue-600 shadow"
          style={vertical
            ? { left: "50%", top: `${100 - percent}%`, width: thumbSize, height: thumbSize }
            : { top: "50%", left: `${percent}%`, width: thumbSize, height: thumbSize }}
        >
          {thumbChildren}
        </div>
      </div>
      {label && !vertical && (
        <div className="mt-1.5 text-center text-xs text-muted-foreground">{label(current)}</div>
      )}
      {marks && !vertical && (
        <div className="relative mt-1.5 h-4">
          {marks.map((m) => (
            <span
              key={m.value}
              className="absolute -translate-x-1/2 text-[10px] text-muted-foreground"
              style={{ left: `${((m.value - min) / (max - min)) * 100}%` }}
            >
              {m.label ?? m.value}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export { MtSlider }
export type { MtSliderMark, MtSliderProps }
