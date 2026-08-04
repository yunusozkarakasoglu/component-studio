/**
 * ColorArea
 * HeroUI color-area'dan uyarlanmış — saf React (bağımlılıksız).
 * 2D renk alanı: x = saturation, y = brightness (varsayılan).
 *   <ColorArea defaultValue="rgb(116,52,255)" />
 * @id 230
 * @category Colors
 * @subcategory ColorArea
 */
import { useRef, useState, type PointerEvent } from "react"
import { cn } from "@/lib/utils"
import { Color, parseColor, type ColorChannel } from "./color"

function ColorArea({
  value,
  defaultValue,
  onChange,
  xChannel = "saturation",
  yChannel = "brightness",
  isDisabled,
  showDots,
  className,
}: {
  value?: string
  defaultValue?: string
  onChange?: (color: Color) => void
  xChannel?: ColorChannel
  yChannel?: ColorChannel
  isDisabled?: boolean
  showDots?: boolean
  className?: string
}) {
  const [internal, setInternal] = useState<string>(defaultValue ?? "hsl(219, 58%, 93%)")
  const color = parseColor(value ?? internal)
  const areaRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const setColor = (c: Color) => {
    if (!value) setInternal(c.toString("css"))
    onChange?.(c)
  }

  const updateFromPointer = (e: PointerEvent) => {
    const area = areaRef.current
    if (!area) return
    const rect = area.getBoundingClientRect()
    const x = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width))
    const y = Math.min(1, Math.max(0, 1 - (e.clientY - rect.top) / rect.height))
    // xChannel 0-100 (saturation), yChannel 0-100 (brightness/lightness)
    setColor(color.setChannel(xChannel, x * 100).setChannel(yChannel, y * 100))
  }

  const onPointerDown = (e: PointerEvent) => {
    if (isDisabled) return
    dragging.current = true
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
    updateFromPointer(e)
  }

  const x = color.getChannel(xChannel) / 100
  const y = 1 - color.getChannel(yChannel) / 100
  const hueColor = `hsl(${color.h}, 100%, 50%)`

  return (
    <div
      ref={areaRef}
      data-slot="color-area"
      data-disabled={isDisabled || undefined}
      onPointerDown={onPointerDown}
      onPointerMove={(e) => dragging.current && updateFromPointer(e)}
      onPointerUp={() => { dragging.current = false }}
      onPointerCancel={() => { dragging.current = false }}
      className={cn(
        "relative h-44 w-56 cursor-crosshair touch-none rounded-lg ring-1 ring-black/10 select-none",
        showDots && "[background-image:radial-gradient(rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:8px_8px]",
        isDisabled && "cursor-not-allowed opacity-50",
        className
      )}
      style={{
        background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, ${hueColor})`,
      }}
    >
      <span
        data-slot="color-area-thumb"
        className="absolute size-4 rounded-full border-2 border-white shadow-md"
        style={{ left: `${x * 100}%`, top: `${y * 100}%`, transform: "translate(-50%,-50%)" }}
      />
    </div>
  )
}

export { ColorArea }
