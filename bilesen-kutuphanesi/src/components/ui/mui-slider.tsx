/**
 * MuiSlider
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Kaydırıcı — tek veya çift tutamak, işaretli adımlar.
 *   <MuiSlider value={v} onChange={h} min={0} max={100} />
 * range: çift tutamak (value: [a,b]) · marks: işaretler · step: adım
 * vertical: dikey · disabled · color · size
 * @id 1952
 * @category Seçim
 * @subcategory MuiSlider
 * @source mui
 */
import { useRef, type PointerEvent } from "react"
import { cn } from "@/lib/utils"

interface Mark {
  value: number
  label?: string
}

interface MuiSliderProps {
  value?: number | number[]
  defaultValue?: number | number[]
  onChange?: (value: number | number[]) => void
  min?: number
  max?: number
  step?: number | null
  marks?: boolean | Mark[]
  disabled?: boolean
  vertical?: boolean
  color?: "primary" | "secondary" | "success" | "error" | "warning" | "info"
  size?: "small" | "medium"
  ariaLabel?: string
  className?: string
}

const TRACK_COLOR: Record<string, string> = {
  primary: "bg-blue-600",
  secondary: "bg-purple-600",
  success: "bg-green-600",
  error: "bg-red-600",
  warning: "bg-amber-600",
  info: "bg-sky-600",
}

function MuiSlider({
  value,
  defaultValue,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  marks = false,
  disabled = false,
  vertical = false,
  color = "primary",
  size = "medium",
  ariaLabel,
  className,
}: MuiSliderProps) {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const isRange = Array.isArray(value ?? defaultValue)
  const internal = useRef<number | number[]>(value ?? defaultValue ?? (isRange ? [25, 75] : 30))

  const getVal = (): number[] => {
    const v = value ?? internal.current
    return isRange ? (v as number[]) : [v as number]
  }

  const pct = (v: number) => ((v - min) / (max - min)) * 100
  const vals = getVal()
  const pcts = vals.map(pct)
  const trackColor = TRACK_COLOR[color] ?? TRACK_COLOR.primary

  const setFromPointer = (clientX: number, clientY: number, index = 0) => {
    const el = trackRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    let ratio: number
    if (vertical) {
      ratio = 1 - (clientY - rect.top) / rect.height
    } else {
      ratio = (clientX - rect.left) / rect.width
    }
    ratio = Math.min(1, Math.max(0, ratio))
    let raw = min + ratio * (max - min)
    if (step && step > 0) raw = Math.round(raw / step) * step
    const next = [...vals]
    next[index] = raw
    let result: number | number[]
    if (isRange) {
      result = next
    } else {
      result = raw
    }
    internal.current = result
    if (onChange) onChange(result)
  }

  const handleDown = (index: number) => (e: PointerEvent<HTMLDivElement>) => {
    e.preventDefault()
    const move = (ev: PointerEvent) => setFromPointer(ev.clientX, ev.clientY, index)
    const up = () => {
      window.removeEventListener("pointermove", move as never)
      window.removeEventListener("pointerup", up)
    }
    window.addEventListener("pointermove", move as never)
    window.addEventListener("pointerup", up)
  }

  const markList = Array.isArray(marks) ? marks : marks ? Array.from({ length: Math.floor((max - min) / (step ?? 1)) + 1 }, (_, i) => ({ value: min + i * (step ?? 1) })) : []

  // Ternary'leri return öncesi hesapla (findRootInfo: koşulsuz tek kök)
  const rootCls = cn("relative select-none", vertical ? "h-48 w-6" : "h-6 w-full max-w-sm", disabled && "opacity-40", className)
  const railCls = cn("absolute rounded-full bg-gray-200", vertical ? "left-1/2 top-0 h-full w-1 -translate-x-1/2" : "left-0 top-1/2 h-1 w-full -translate-y-1/2")
  const fillCls = cn("absolute rounded-full", trackColor, vertical ? "bottom-0 w-full" : "left-0 h-full")
  const fillStyle = vertical ? { height: `${pcts[1] - pcts[0]}%`, bottom: `${pcts[0]}%` } : { width: `${pcts[pcts.length - 1] - pcts[0]}%`, left: `${pcts[0]}%` }
  const markCls = cn("absolute h-2 w-0.5 bg-gray-400", vertical ? "left-1/2 -translate-x-1/2" : "top-1/2 -translate-y-1/2")
  const thumbCls = cn(
    "absolute z-10 cursor-grab rounded-full border-2 border-white shadow active:cursor-grabbing",
    trackColor,
    size === "small" ? "size-3.5" : "size-5",
    vertical ? "left-1/2 -translate-x-1/2" : "top-1/2 -translate-y-1/2"
  )
  const markStyle = (v: number) => (vertical ? { bottom: `${pct(v)}%` } : { left: `${pct(v)}%` })
  const thumbStyle = (p: number) => (vertical ? { bottom: `${p}%` } : { left: `${p}%` })
  const thumbPointerDown = (i: number) => (disabled ? undefined : handleDown(i))

  return (
    <div
      className={rootCls}
      role="slider"
      aria-label={ariaLabel}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={Math.round(vals[0])}
      aria-disabled={disabled}
    >
      {/* Ray */}
      <div ref={trackRef} className={railCls}>
        {/* Dolu kısım */}
        <div className={fillCls} style={fillStyle} />
        {/* İşaretler */}
        {markList.map((m) => (
          <span
            key={m.value}
            className={markCls}
            style={markStyle(m.value)}
          />
        ))}
      </div>
      {/* Tutamaklar */}
      {pcts.map((p, i) => (
        <div
          key={i}
          onPointerDown={thumbPointerDown(i)}
          className={thumbCls}
          style={thumbStyle(p)}
        />
      ))}
    </div>
  )
}

export { MuiSlider }
export type { MuiSliderProps, Mark }
