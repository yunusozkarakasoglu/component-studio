/**
 * ShadcnLabelDemo
 * Temel örnek — checkbox + etiket (saf React, shadcn kaynaklı).
 * Checkbox bileşeni ayrı element olduğundan native input kullanılır.
 * @id 634
 * @category Form Elemanları
 * @subcategory ShadcnLabel
 * @source shadcn
 */
import { ShadcnLabel } from "@/components/ui/shadcn-label"

function ShadcnLabelDemo() {
  return (
    <div className="flex items-center gap-2">
      <input id="terms" type="checkbox" className="size-4 accent-blue-600" />
      <ShadcnLabel htmlFor="terms">Accept terms and conditions</ShadcnLabel>
    </div>
  )
}

export { ShadcnLabelDemo }
