/**
 * ColorPickerControlled
 * HeroUI Controlled örneği (saf React).
 * @id 244
 * @category Colors
 * @subcategory ColorPicker
 */
import { useState } from "react"
import { ColorPicker } from "@/components/ui/color-picker"
import { ColorSwatch } from "@/components/ui/color-swatch"
import { Color } from "@/components/ui/color"

function ColorPickerControlled() {
  const [color, setColor] = useState<Color | null>(null)
  return (
    <div className="flex flex-col gap-3">
      <ColorPicker className="w-56" value={color?.toString("css")} onChange={setColor} />
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <ColorSwatch color={color?.toString("css") ?? "#000000"} size="sm" />
        Current: <code className="font-mono">{color?.toString("hex") ?? "(none)"}</code>
      </div>
    </div>
  )
}

export { ColorPickerControlled }
