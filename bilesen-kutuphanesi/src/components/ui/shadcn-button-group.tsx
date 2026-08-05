/**
 * ShadcnButtonGroup
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Buton + input gibi öğeleri tek grupta birleştirir (bölünmüş kenarlık).
 *   <ShadcnButtonGroup>
 *     <Input placeholder="Type to search..." />
 *     <Button variant="outline">Search</Button>
 *   </ShadcnButtonGroup>
 * @id 618
 * @category Butonlar & Aksiyonlar
 * @subcategory ShadcnButtonGroup
 * @source shadcn
 */
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ShadcnButtonGroupProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnButtonGroup({ className, ...props }: ShadcnButtonGroupProps) {
  return (
    <div
      data-slot="shadcn-button-group"
      className={cn(
        "flex w-full items-stretch overflow-hidden rounded-md border border-border shadow-xs transition-colors",
        "focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/40",
        className
      )}
      {...props}
    />
  )
}

export { ShadcnButtonGroup }
export type { ShadcnButtonGroupProps }
