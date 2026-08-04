/**
 * ColorPicker
 * Saf React bileşen (bağımlılıksız).
 * Tetikleyici + popover içinde alan/kaydırıcı/input/örnekler.
 *   <ColorPicker defaultValue="#0485F7" swatches={[...]} />
 * @id 232
 * @category Colors
 * @subcategory ColorPicker
 */
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { ChevronsUpDown } from "./icons"
import { Color, parseColor } from "./color"
import { ColorArea } from "./color-area"
import { ColorField } from "./color-field"
import { ColorSlider } from "./color-slider"
import { ColorSwatch } from "./color-swatch"
import { ColorSwatchPicker } from "./color-swatch-picker"

function ColorPicker({
  value,
  defaultValue,
  onChange,
  label,
  swatches,
  isDisabled,
  className,
}: {
  value?: string
  defaultValue?: string
  onChange?: (color: Color) => void
  label?: string
  swatches?: string[]
  isDisabled?: boolean
  className?: string
}) {
  const [internal, setInternal] = useState<string>(defaultValue ?? "#0485F7")
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const color = parseColor(value ?? internal)

  const setColor = (c: Color) => {
    if (!value) setInternal(c.toString("css"))
    onChange?.(c)
  }

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onDown)
    return () => document.removeEventListener("mousedown", onDown)
  }, [open])

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        disabled={isDisabled}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className={cn(
          "flex h-10 w-full items-center gap-2 rounded-lg border border-border bg-background px-2.5 text-sm outline-none transition-colors hover:border-black/40 focus-visible:ring-3 focus-visible:ring-ring/50",
          isDisabled && "cursor-not-allowed opacity-50"
        )}
      >
        <ColorSwatch color={color.toString("css")} size="sm" />
        <span className="min-w-0 flex-1 truncate text-left font-mono text-xs">{color.toString("hex")}</span>
        {label && <span className="text-xs text-muted-foreground">{label}</span>}
        <ChevronsUpDown className={cn("size-4 shrink-0 text-muted-foreground transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div data-slot="color-picker-popover" className="absolute top-full z-40 mt-1.5 w-64 rounded-xl border border-border bg-popover p-3 shadow-lg">
          <ColorArea value={color.toString("css")} onChange={setColor} />
          <div className="mt-3 flex flex-col gap-2.5">
            <ColorSlider channel="hue" value={color.toString("css")} onChange={setColor} showOutput={false} />
            <ColorSlider channel="saturation" value={color.toString("css")} onChange={setColor} showOutput={false} />
          </div>
          <div className="mt-3">
            <ColorField value={color.toString("css")} onChange={(c) => c && setColor(c)} />
          </div>
          {swatches && swatches.length > 0 && (
            <div className="mt-3 border-t border-border pt-3">
              <ColorSwatchPicker
                colors={swatches}
                value={[color.toString("css")]}
                onChange={(vals) => vals.length && setColor(parseColor(vals[vals.length - 1]))}
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export { ColorPicker }

