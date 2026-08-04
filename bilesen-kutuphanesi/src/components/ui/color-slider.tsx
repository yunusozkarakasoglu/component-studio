/**
 * ColorSlider
 * Saf React bileşen (bağımlılıksız).
 * Tek renk kanalını ayarlayan kaydırıcı (hue/saturation/lightness/rgb/alpha).
 *   <ColorSlider channel="hue" defaultValue="hsl(0,100%,50%)" label="Hue" />
 * @id 228
 * @category Colors
 * @subcategory ColorSlider
 */
import { useRef, useState, type PointerEvent } from "react"
import { cn } from "@/lib/utils"
import { Color, parseColor, type ColorChannel } from "./color"

function channelGradient(channel: ColorChannel, color: Color): string {
  switch (channel) {
    case "hue": return "linear-gradient(to right, hsl(0,100%,50%), hsl(60,100%,50%), hsl(120,100%,50%), hsl(180,100%,50%), hsl(240,100%,50%), hsl(300,100%,50%), hsl(360,100%,50%))"
    case "saturation": return `linear-gradient(to right, hsl(${color.h},0%,${color.l}%), hsl(${color.h},100%,${color.l}%))`
    case "lightness": return `linear-gradient(to right, hsl(${color.h},${color.s}%,0%), hsl(${color.h},${color.s}%,50%), hsl(${color.h},${color.s}%,100%))`
    case "red": return "linear-gradient(to right, rgb(0,0,0), rgb(255,0,0))"
    case "green": return "linear-gradient(to right, rgb(0,0,0), rgb(0,255,0))"
    case "blue": return "linear-gradient(to right, rgb(0,0,0), rgb(0,0,255))"
    case "brightness": return `linear-gradient(to right, #000, hsl(${color.h},${color.s}%,50%))`
    case "alpha": return "linear-gradient(to right, transparent, hsl(0,0%,50%))"
  }
}

function channelMinMax(channel: ColorChannel): [number, number] {
  if (channel === "hue") return [0, 360]
  if (channel === "alpha") return [0, 1]
  return [0, 100]
}

function ColorSlider({
  channel,
  value,
  defaultValue,
  onChange,
  orientation = "horizontal",
  isDisabled,
  label,
  showOutput = true,
  className,
}: {
  channel: ColorChannel
  value?: string
  defaultValue?: string
  onChange?: (color: Color) => void
  orientation?: "horizontal" | "vertical"
  isDisabled?: boolean
  label?: string
  showOutput?: boolean
  className?: string
}) {
  const [internal, setInternal] = useState<string>(defaultValue ?? "hsl(0, 100%, 50%)")
  const color = parseColor(value ?? internal)
  const trackRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const [min, max] = channelMinMax(channel)

  const setChannel = (c: Color) => {
    if (!value) setInternal(c.toString("css"))
    onChange?.(c)
  }

  const updateFromPointer = (e: PointerEvent) => {
    const track = trackRef.current
    if (!track) return
    const rect = track.getBoundingClientRect()
    const raw = orientation === "horizontal"
      ? (e.clientX - rect.left) / rect.width
      : 1 - (e.clientY - rect.top) / rect.height
    const pct = Math.min(1, Math.max(0, raw))
    const channelValue = min + pct * (max - min)
    setChannel(color.setChannel(channel, channelValue))
  }

  const onPointerDown = (e: PointerEvent) => {
    if (isDisabled) return
    dragging.current = true
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
    updateFromPointer(e)
  }
  const onPointerMove = (e: PointerEvent) => {
    if (dragging.current) updateFromPointer(e)
  }
  const onPointerUp = () => { dragging.current = false }

  const pct = ((color.getChannel(channel) - min) / (max - min)) * 100
  const vertical = orientation === "vertical"

  return (
    <div data-slot="color-slider" data-orientation={orientation} data-disabled={isDisabled || undefined}
      className={cn("flex w-full flex-col gap-1.5", vertical && "items-center", isDisabled && "opacity-50", className)}>
      {(label || showOutput) && (
        <div className="flex w-full items-center justify-between text-xs">
          {label ? <span className="font-medium text-foreground">{label}</span> : <span />}
          {showOutput && <output className="font-mono text-muted-foreground">{Math.round(color.getChannel(channel) * 100) / 100}</output>}
        </div>
      )}
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className={cn(
          "relative cursor-pointer touch-none rounded-full ring-1 ring-black/10",
          vertical ? "h-40 w-4" : "h-4 w-full",
          orientation === "vertical" && channelGradient(channel, color).replace("to right", "to top")
        )}
        style={{ background: channelGradient(channel, color) }}
      >
        <span
          data-slot="color-slider-thumb"
          className={cn(
            "absolute size-4 rounded-full border-2 border-white shadow-md",
            vertical ? "left-1/2 -translate-x-1/2" : "top-1/2 -translate-y-1/2",
            isDisabled && "cursor-not-allowed"
          )}
          style={vertical ? { top: `${pct}%`, transform: "translate(-50%,-50%)" } : { left: `${pct}%`, transform: "translate(-50%,-50%)" }}
        />
      </div>
    </div>
  )
}

export { ColorSlider }
