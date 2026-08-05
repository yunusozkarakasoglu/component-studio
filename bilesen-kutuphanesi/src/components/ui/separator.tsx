/**
 * Separator
 * Saf React bileşen (bağımlılıksız).
 * İçerik bölümleri arasında görsel ayraç.
 *   <Separator />
 *   <Separator orientation="vertical" className="h-8" />
 * Özellikler: orientation (horizontal/vertical) · variant (solid/dashed) ·
 * className ile uzunluk.
 * @id 589
 * @category Genel
 * @subcategory Separator
 */
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface SeparatorProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
  variant?: "solid" | "dashed"
}

function Separator({ className, orientation = "horizontal", variant = "solid", ...props }: SeparatorProps) {
  return (
    <div
      data-slot="separator"
      role="separator"
      aria-orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        variant === "dashed" && "bg-transparent bg-[repeating-linear-gradient(90deg,var(--color-border)_0_4px,transparent_4px_8px)]",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
export type { SeparatorProps }
