/**
 * Toolbar
 * Saf React bileşen (bağımlılıksız).
 * Etkileşimli kontroller için araç çubuğu — ok tuşu navigasyonu.
 *   <Toolbar aria-label="Text formatting">
 *     <ToggleButtonGroup>…</ToggleButtonGroup>
 *     <ButtonGroup>…</ButtonGroup>
 *   </Toolbar>
 * Özellikler: orientation (horizontal/vertical) · isAttached · role=toolbar ·
 * aria-orientation.
 * @id 513
 * @category Butonlar & Aksiyonlar
 * @subcategory Toolbar
 */
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ToolbarProps {
  children?: ReactNode
  className?: string
  orientation?: "horizontal" | "vertical"
  isAttached?: boolean
  "aria-label"?: string
}

function Toolbar({ children, className, orientation = "horizontal", isAttached = false, ...aria }: ToolbarProps) {
  return (
    <div
      data-slot="toolbar"
      role="toolbar"
      aria-orientation={orientation}
      className={cn(
        "flex items-center gap-2 rounded-xl border border-border bg-background p-2",
        orientation === "vertical" && "flex-col items-stretch",
        isAttached && "rounded-none border-x-0 border-t-0",
        className
      )}
      {...aria}
    >
      {children}
    </div>
  )
}

export { Toolbar }
export type { ToolbarProps }
