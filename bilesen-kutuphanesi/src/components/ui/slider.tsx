/**
 * Slider
 * Saf React bileşen (bağımlılıksız).
 * Tek veya çoklu değer seçimi — sürükleme + klavye (ok/Home/End) + biçimlendirme.
 *   <Slider defaultValue={30} minValue={0} maxValue={100} step={1}>
 *     <Label>Volume</Label>
 *     <SliderOutput />
 *     <SliderTrack>
 *       <SliderFill />
 *       <SliderThumb />
 *     </SliderTrack>
 *   </Slider>
 * Özellikler: value/defaultValue/onChange/onChangeEnd · minValue/maxValue/step ·
 * formatOptions (Intl) · orientation (horizontal/vertical) · isDisabled ·
 * range (dizi değer) · render prop · children render fn (state).
 * @id 381
 * @category Form Elemanları
 * @subcategory Slider
 */
import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react"
import { cn } from "@/lib/utils"

/* ---------- Types ---------- */

type SliderOrientation = "horizontal" | "vertical"

interface SliderState {
  values: number[]
  orientation: SliderOrientation
  isDisabled: boolean
  getThumbValueLabel: (index: number) => string
}

interface SliderContextValue {
  values: number[]
  setValue: (index: number, v: number) => void
  onChangeEnd?: (value: number | number[]) => void
  min: number
  max: number
  step: number
  formatOptions?: Intl.NumberFormatOptions
  orientation: SliderOrientation
  isDisabled: boolean
  getThumbValueLabel: (index: number) => string
}

const SliderContext = createContext<SliderContextValue | null>(null)

function useSlider(): SliderContextValue {
  const ctx = useContext(SliderContext)
  if (!ctx) throw new Error("useSlider, <Slider> içinde kullanılmalı")
  return ctx
}

interface SliderProps {
  children?: ReactNode
  className?: string
  style?: CSSProperties
  value?: number | number[]
  defaultValue?: number | number[]
  onChange?: (value: number | number[]) => void
  onChangeEnd?: (value: number | number[]) => void
  minValue?: number
  maxValue?: number
  step?: number
  formatOptions?: Intl.NumberFormatOptions
  orientation?: SliderOrientation
  isDisabled?: boolean
  "aria-label"?: string
  render?: (props: Record<string, unknown>) => ReactNode
}

function Slider({
  children,
  className,
  style,
  value: valueProp,
  defaultValue = 0,
  onChange,
  onChangeEnd,
  minValue = 0,
  maxValue = 100,
  step = 1,
  formatOptions,
  orientation = "horizontal",
  isDisabled = false,
  render,
  ...aria
}: SliderProps) {
  const [internalValues, setInternalValues] = useState<number[]>(
    Array.isArray(defaultValue) ? defaultValue : [defaultValue]
  )
  const values = valueProp != null ? (Array.isArray(valueProp) ? valueProp : [valueProp]) : internalValues

  const clamp = useCallback(
    (v: number) => {
      const stepped = Math.round((v - minValue) / step) * step + minValue
      return Math.min(maxValue, Math.max(minValue, stepped))
    },
    [minValue, maxValue, step]
  )

  const setValue = useCallback(
    (index: number, v: number) => {
      if (isDisabled) return
      const next = [...values]
      next[index] = clamp(v)
      // range: iki thumb çakışmasın (indeks sırasına göre)
      if (index > 0 && next[index] < next[index - 1]) next[index] = next[index - 1]
      if (index < next.length - 1 && next[index] > next[index + 1]) next[index] = next[index + 1]
      const single = next.length === 1
      onChange?.(single ? next[0] : next)
      if (single) setInternalValues([next[0]])
      else setInternalValues(next)
    },
    [values, isDisabled, clamp, onChange]
  )

  const getThumbValueLabel = useCallback(
    (index: number) => {
      const v = values[index] ?? 0
      if (!formatOptions) return String(v)
      try {
        return new Intl.NumberFormat("tr-TR", formatOptions).format(v)
      } catch {
        return String(v)
      }
    },
    [values, formatOptions]
  )

  const contextValue: SliderContextValue = {
    values,
    setValue,
    onChangeEnd,
    min: minValue,
    max: maxValue,
    step,
    formatOptions,
    orientation,
    isDisabled,
    getThumbValueLabel,
  }

  const rootProps: Record<string, unknown> = {
    "data-slot": "slider",
    "data-orientation": orientation,
    "data-disabled": isDisabled ? "true" : undefined,
    style,
    className: cn("flex flex-col gap-2", className),
    ...aria,
  }

  return (
    <SliderContext.Provider value={contextValue}>
      {render ? render({ ...rootProps, children }) : <div {...rootProps}>{children}</div>}
    </SliderContext.Provider>
  )
}

/* ---------- Output ---------- */

interface SliderOutputProps {
  className?: string
  children?: ReactNode | ((values: { state: SliderState }) => ReactNode)
}

function SliderOutput({ className, children }: SliderOutputProps) {
  const ctx = useSlider()
  const labels = ctx.values.map((_, i) => ctx.getThumbValueLabel(i))
  const state: SliderState = {
    values: ctx.values,
    orientation: ctx.orientation,
    isDisabled: ctx.isDisabled,
    getThumbValueLabel: ctx.getThumbValueLabel,
  }
  const content =
    typeof children === "function"
      ? children({ state })
      : children ?? labels.join(" – ")
  return (
    <output data-slot="slider-output" className={cn("text-sm text-muted-foreground", className)}>
      {content}
    </output>
  )
}

/* ---------- Track ---------- */

interface SliderTrackProps {
  className?: string
  children?: ReactNode | ((values: { state: SliderState }) => ReactNode)
}

function SliderTrack({ className, children }: SliderTrackProps) {
  const ctx = useSlider()
  const trackRef = useRef<HTMLDivElement>(null)
  const vertical = ctx.orientation === "vertical"

  const valueFromPointer = (e: React.PointerEvent | React.MouseEvent) => {
    const rect = trackRef.current!.getBoundingClientRect()
    const ratio = vertical
      ? 1 - (e.clientY - rect.top) / rect.height
      : (e.clientX - rect.left) / rect.width
    const raw = ctx.min + Math.max(0, Math.min(1, ratio)) * (ctx.max - ctx.min)
    const stepped = Math.round((raw - ctx.min) / ctx.step) * ctx.step + ctx.min
    return Math.min(ctx.max, Math.max(ctx.min, stepped))
  }

  const handleTrackClick = (e: React.MouseEvent) => {
    if (ctx.isDisabled) return
    const v = valueFromPointer(e)
    // en yakın thumb'a ata
    let idx = 0
    let best = Infinity
    ctx.values.forEach((val, i) => {
      const d = Math.abs(val - v)
      if (d < best) {
        best = d
        idx = i
      }
    })
    ctx.setValue(idx, v)
  }

  const state: SliderState = {
    values: ctx.values,
    orientation: ctx.orientation,
    isDisabled: ctx.isDisabled,
    getThumbValueLabel: ctx.getThumbValueLabel,
  }

  return (
    <div
      ref={trackRef}
      data-slot="slider-track"
      onClick={handleTrackClick}
      className={cn(
        "relative rounded-full bg-muted",
        vertical ? "h-full w-2 cursor-pointer" : "h-2 w-full cursor-pointer",
        ctx.isDisabled && "cursor-not-allowed opacity-60",
        className
      )}
    >
      {typeof children === "function" ? children({ state }) : children}
    </div>
  )
}

/* ---------- Fill ---------- */

interface SliderFillProps {
  className?: string
  style?: CSSProperties
}

function SliderFill({ className, style }: SliderFillProps) {
  const ctx = useSlider()
  const vertical = ctx.orientation === "vertical"
  const minP = ((ctx.values[0] - ctx.min) / (ctx.max - ctx.min)) * 100
  const maxP = ((ctx.values[ctx.values.length - 1] - ctx.min) / (ctx.max - ctx.min)) * 100

  const fillStyle: CSSProperties = vertical
    ? { bottom: `${minP}%`, height: `${maxP - minP}%`, ...style }
    : { left: `${minP}%`, width: `${maxP - minP}%`, ...style }

  return (
    <div
      data-slot="slider-fill"
      className={cn("absolute rounded-full bg-foreground/80", vertical ? "left-0 w-full" : "top-0 h-full", className)}
      style={fillStyle}
    />
  )
}

/* ---------- Thumb ---------- */

interface SliderThumbProps {
  index?: number
  className?: string
  name?: string
}

function SliderThumb({ index = 0, className, name }: SliderThumbProps) {
  const ctx = useSlider()
  const vertical = ctx.orientation === "vertical"
  const value = ctx.values[index] ?? ctx.min
  const pos = ((value - ctx.min) / (ctx.max - ctx.min)) * 100
  const draggingRef = useRef(false)

  const moveTo = (e: PointerEvent) => {
    const track = (e.target as HTMLElement).closest("[data-slot=slider-track]") as HTMLDivElement
    const rect = track.getBoundingClientRect()
    const ratio = vertical ? 1 - (e.clientY - rect.top) / rect.height : (e.clientX - rect.left) / rect.width
    const raw = ctx.min + Math.max(0, Math.min(1, ratio)) * (ctx.max - ctx.min)
    const stepped = Math.round((raw - ctx.min) / ctx.step) * ctx.step + ctx.min
    ctx.setValue(index, Math.min(ctx.max, Math.max(ctx.min, stepped)))
  }

  const handlePointerDown = (e: React.PointerEvent) => {
    if (ctx.isDisabled) return
    e.preventDefault()
    draggingRef.current = true
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
    const onMove = (ev: PointerEvent) => moveTo(ev)
    const onUp = (ev: PointerEvent) => {
      draggingRef.current = false
      ;(ev.target as HTMLElement).releasePointerCapture(ev.pointerId)
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerup", onUp)
      ctx.onChangeEnd?.(ctx.values.length === 1 ? ctx.values[0] : ctx.values)
    }
    window.addEventListener("pointermove", onMove)
    window.addEventListener("pointerup", onUp)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (ctx.isDisabled) return
    const delta = e.key === "Home" || e.key === "PageDown" ? ctx.min : e.key === "End" || e.key === "PageUp" ? ctx.max : ctx.step
    let next = value
    if (e.key === "ArrowRight" || e.key === "ArrowUp" || e.key === "PageUp" || e.key === "End") next = Math.min(ctx.max, next + delta)
    else if (e.key === "ArrowLeft" || e.key === "ArrowDown" || e.key === "PageDown" || e.key === "Home") next = Math.max(ctx.min, next - delta)
    else return
    e.preventDefault()
    ctx.setValue(index, next)
  }

  return (
    <div
      role="slider"
      tabIndex={ctx.isDisabled ? -1 : 0}
      aria-valuemin={ctx.min}
      aria-valuemax={ctx.max}
      aria-valuenow={Math.round(value)}
      aria-orientation={ctx.orientation}
      aria-label={name}
      data-slot="slider-thumb"
      data-dragging={draggingRef.current ? "true" : undefined}
      data-disabled={ctx.isDisabled ? "true" : undefined}
      onPointerDown={handlePointerDown}
      onKeyDown={handleKeyDown}
      className={cn(
        "absolute size-4 rounded-full border-2 border-background bg-foreground shadow outline-none transition-shadow focus-visible:ring-3 focus-visible:ring-ring/50",
        vertical ? "left-1/2 -translate-x-1/2" : "top-1/2 -translate-y-1/2",
        ctx.isDisabled && "cursor-not-allowed opacity-60",
        className
      )}
      style={vertical ? { top: `${pos}%`, marginTop: -8 } : { left: `${pos}%`, marginLeft: -8 }}
    />
  )
}

export { Slider, SliderFill, SliderOutput, SliderThumb, SliderTrack, useSlider }
export type { SliderOrientation, SliderProps, SliderState, SliderThumbProps, SliderTrackProps }
