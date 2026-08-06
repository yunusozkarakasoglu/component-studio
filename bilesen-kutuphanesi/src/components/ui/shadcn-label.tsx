/**
 * ShadcnLabel
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Erişilebilir etiket — kontrollerle ilişkilendirilir (htmlFor).
 *   <ShadcnLabel htmlFor="email">Your email address</ShadcnLabel>
 * @id 633
 * @category Form Elemanları
 * @subcategory ShadcnLabel
 * @source shadcn
 */
import type { LabelHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ShadcnLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

function ShadcnLabel({ className, ...props }: ShadcnLabelProps) {
  return (
    <label
      data-slot="shadcn-label"
      className={cn(
        "text-sm font-medium text-foreground",
        "group-data-disabled:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { ShadcnLabel }
export type { ShadcnLabelProps }
