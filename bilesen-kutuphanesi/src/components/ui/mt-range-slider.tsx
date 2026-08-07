/**
 * MtRangeSlider
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Çift tutamaklı kaydırıcı — minRange/maxRange, marks, disabled.
 *   <MtRangeSlider defaultValue={[25, 75]} />
 * @id 1257
 * @category Seçim
 * @subcategory MtRangeSlider
 * @source mantine
 */
import { useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface MtRangeSliderMark {
  value: number
  label?: string
}

interface MtRangeSliderProps {
  value?: [number, number]
  defaultValue?: [number, number]
  onChange?: (value: [number, number]) => void
  min?: number
  max?: number
  step?: number
  minRange?: number
  maxRange?: number
  marks?: MtRangeSliderMark[]
  disabled?: boolean
  className?: string
  label?: (value: number) => string
}

function MtRangeSlider({
  value,
  defaultValue = [25, 75],
  onChange,
  min = 0,
  max = 100,
  step = 1,
  minRange,
  maxRange,
  marks,
  disabled,
  className,
  label,
}: MtRangeSliderProps) {
  const [internal, setInternal] = useState(defaultValue)
  const current = value !== undefined ? value : internal
  const trackRef = useRef<HTMLDivElement>(null)

  const set = (v: [number, number]) => {
    const clamped: [number, number] = [Math.min(max, Math.max(min, v[0])), Math.min(max, Math.max(min, v[1]))]
    if (value === undefined) setInternal(clamped)
    onChange?.(clamped)
  }

  const percent = (v: number) => ((v - min) / (max - min)) * 100

  const handlePointer = (clientX: number, thumb: 0 | 1) => {
    const rect = trackRef.current?.getBoundingClientRect()
    if (!rect) return
    const ratio = (clientX - rect.left) / rect.width
    const raw = min + Math.max(0, Math.min(1, ratio)) * (max - min)
    const stepped = Math.round((raw - min) / step) * step + min
    let next: [number, number]
    if (thumb === 0) {
      const limit = minRange != null ? current[1] - minRange : current[1]
      next = [Math.min(stepped, limit), current[1]]
    } else {
      const limit = minRange != null ? current[0] + minRange : current[0]
      next = [current[0], Math.max(stepped, limit)]
    }
    if (maxRange != null && next[1] - next[0] > maxRange) {
      next = thumb === 0 ? [next[1] - maxRange, next[1]] : [next[0], next[0] + maxRange]
    }
    set(next)
  }

  const from = percent(current[0])
  const to = percent(current[1])

  return (
    <div data-slot="mt-range-slider" className={cn("relative w-full select-none", disabled && "pointer-events-none opacity-50", className)}>
      <div
        ref={trackRef}
        className="relative h-1.5 w-full rounded-full bg-gray-200"
      >
        <div
          className="absolute top-0 h-full rounded-full bg-blue-600"
          style={{ left: `${from}%`, width: `${to - from}%` }}
        />
        {[0, 1].map((i) => (
          <div
            key={i}
            className="absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-full border-2 border-white bg-blue-600 shadow"
            style={{ left: `${i === 0 ? from : to}%` }}
            onPointerDown={(e) => {
              e.currentTarget.setPointerCapture(e.pointerId)
              handlePointer(e.clientX, i as 0 | 1)
            }}
            onPointerMove={(e) => {
              if (e.buttons === 1) handlePointer(e.clientX, i as 0 | 1)
            }}
          />
        ))}
      </div>
      {marks && (
        <div className="relative mt-1.5 h-4">
          {marks.map((m) => (
            <span key={m.value} className="absolute -translate-x-1/2 text-[10px] text-muted-foreground" style={{ left: `${percent(m.value)}%` }}>
              {m.label ?? m.value}
            </span>
          ))}
        </div>
      )}
      {label && (
        <div className="mt-1.5 flex justify-between text-xs text-muted-foreground">
          <span>{label(current[0])}</span>
          <span>{label(current[1])}</span>
        </div>
      )}
    </div>
  )
}

export { MtRangeSlider }
export type { MtRangeSliderMark, MtRangeSliderProps }
