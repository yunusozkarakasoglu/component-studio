/**
 * MtPaper
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Yüzey — kart, dropdown, modal arka planı.
 *   <MtPaper p="xl" withBorder>…</MtPaper>
 * @id 1020
 * @category Genel
 * @subcategory MtPaper
 * @source mantine
 */
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface MtPaperProps extends HTMLAttributes<HTMLDivElement> {
  withBorder?: boolean
  shadow?: "xs" | "sm" | "md" | "lg" | "xl"
  radius?: "xs" | "sm" | "md" | "lg" | "xl"
  p?: string | number
}

const shadows: Record<string, string> = {
  xs: "shadow-xs",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
}

const radii: Record<string, string> = {
  xs: "rounded-sm",
  sm: "rounded",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
}

function MtPaper({ className, withBorder, shadow = "sm", radius = "sm", p, style, ...props }: MtPaperProps) {
  return (
    <div
      data-slot="mt-paper"
      className={cn(
        "bg-background text-foreground",
        shadows[shadow],
        radii[radius],
        withBorder && "border border-border",
        className
      )}
      style={{ padding: p, ...style }}
      {...props}
    />
  )
}

export { MtPaper }
export type { MtPaperProps }
