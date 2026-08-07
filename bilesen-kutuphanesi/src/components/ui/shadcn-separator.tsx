/**
 * ShadcnSeparator
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * İçerik ayracı — yatay/dikey.
 *   <ShadcnSeparator />  ·  <ShadcnSeparator orientation="vertical" />
 * @id 958
 * @category Genel
 * @subcategory ShadcnSeparator
 * @source shadcn
 */
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ShadcnSeparatorProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
}

function ShadcnSeparator({ className, orientation = "horizontal", ...props }: ShadcnSeparatorProps) {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      data-slot="shadcn-separator"
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className
      )}
      {...props}
    />
  )
}

export { ShadcnSeparator }
export type { ShadcnSeparatorProps }
