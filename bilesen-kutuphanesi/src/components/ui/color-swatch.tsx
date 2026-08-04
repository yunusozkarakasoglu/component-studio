/**
 * ColorSwatch
 * Saf React bileşen (bağımlılıksız).
 * Renk önizlemesi: size × shape + şeffaflık dama deseni.
 *   <ColorSwatch color="#0485F7" size="lg" />
 * @id 227
 * @category Colors
 * @subcategory ColorSwatch
 */
import { cn } from "@/lib/utils"
import { parseColor } from "./color"

const swatchSize: Record<string, string> = {
  xs: "size-4",
  sm: "size-6",
  md: "size-8",
  lg: "size-9",
  xl: "size-10",
}

function ColorSwatch({
  color,
  colorName,
  size = "md",
  shape = "circle",
  className,
  "aria-label": ariaLabel,
}: {
  color: string
  colorName?: string
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  shape?: "circle" | "square"
  className?: string
  "aria-label"?: string
}) {
  const c = parseColor(color)
  return (
    <span
      data-slot="color-swatch"
      role="img"
      aria-label={ariaLabel ?? colorName ?? color}
      title={colorName ?? color}
      className={cn(
        "inline-block shrink-0 border border-black/10 bg-[linear-gradient(45deg,#ccc_25%,transparent_25%,transparent_75%,#ccc_75%),linear-gradient(45deg,#ccc_25%,transparent_25%,transparent_75%,#ccc_75%)] bg-[size:8px_8px] bg-[position:0_0,4px_4px]",
        swatchSize[size],
        shape === "circle" ? "rounded-full" : "rounded-md",
        className
      )}
      style={{ backgroundColor: c.toString("css") }}
    />
  )
}

export { ColorSwatch }
