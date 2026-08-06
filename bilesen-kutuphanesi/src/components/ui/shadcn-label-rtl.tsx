/**
 * ShadcnLabelRtl
 * RTL örneği — Arapça etiket (saf React, shadcn kaynaklı).
 * @id 635
 * @category Form Elemanları
 * @subcategory ShadcnLabel
 * @source shadcn
 */
import { ShadcnLabel } from "@/components/ui/shadcn-label"

function ShadcnLabelRtl() {
  return (
    <div className="flex items-center gap-2" dir="rtl">
      <input id="terms-rtl" type="checkbox" className="size-4 accent-blue-600" />
      <ShadcnLabel htmlFor="terms-rtl">قبول الشروط والأحكام</ShadcnLabel>
    </div>
  )
}

export { ShadcnLabelRtl }
