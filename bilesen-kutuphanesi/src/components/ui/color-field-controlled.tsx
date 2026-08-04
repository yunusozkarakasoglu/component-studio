/**
 * ColorFieldControlled
 * HeroUI Controlled örneği (saf React).
 * @id 239
 * @category Colors
 * @subcategory ColorField
 */
import { useState } from "react"
import { ColorField } from "@/components/ui/color-field"
import { ColorSwatch } from "@/components/ui/color-swatch"
import { Color } from "@/components/ui/color"

function ColorFieldControlled() {
  const [color, setColor] = useState<Color | null>(null)
  return (
    <div className="flex flex-col gap-3">
      <ColorField className="w-[280px]" value={color?.toString("css") ?? null} onChange={setColor} label="Color" />
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <ColorSwatch color={color?.toString("css") ?? "#000000"} size="sm" />
        Current: <code className="font-mono">{color?.toString("hex") ?? "(none)"}</code>
      </div>
    </div>
  )
}

export { ColorFieldControlled }
