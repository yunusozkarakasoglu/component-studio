/**
 * ShadcnButtonGroup + ShadcnButtonGroupSeparator
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Buton grubu — yatay/dikey; ayraç ile görsel bölme.
 *   <ShadcnButtonGroup>
 *     <Button variant="outline">Archive</Button>
 *     <ShadcnButtonGroupSeparator />
 *     <Button variant="outline">Report</Button>
 *   </ShadcnButtonGroup>
 * @id 755
 * @category Butonlar & Aksiyonlar
 * @subcategory ShadcnButtonGroup
 * @source shadcn
 */
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ShadcnButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
}

function ShadcnButtonGroup({ className, orientation = "horizontal", ...props }: ShadcnButtonGroupProps) {
  return (
    <div
      role="group"
      data-slot="shadcn-button-group"
      className={cn(
        "inline-flex gap-0.5",
        orientation === "vertical" ? "flex-col items-start" : "flex-row items-center",
        className
      )}
      {...props}
    />
  )
}

interface ShadcnButtonGroupSeparatorProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnButtonGroupSeparator({ className, ...props }: ShadcnButtonGroupSeparatorProps) {
  return (
    <div
      data-slot="shadcn-button-group-separator"
      role="separator"
      aria-orientation="vertical"
      className={cn("h-4 w-px bg-border", className)}
      {...props}
    />
  )
}

export { ShadcnButtonGroup, ShadcnButtonGroupSeparator }
export type { ShadcnButtonGroupProps, ShadcnButtonGroupSeparatorProps }
