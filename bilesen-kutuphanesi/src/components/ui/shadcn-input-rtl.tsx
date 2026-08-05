/**
 * ShadcnInputRtl
 * Sağdan sola (RTL) input örneği (saf React, shadcn kaynaklı).
 * @id 632
 * @category Form Elemanları
 * @subcategory ShadcnInput
 * @source shadcn
 */
import { ShadcnField, ShadcnFieldLabel, ShadcnInput } from "@/components/ui/shadcn-input"

function ShadcnInputRtl() {
  return (
    <ShadcnField className="w-full max-w-72" dir="rtl">
      <ShadcnFieldLabel htmlFor="input-rtl">الاسم</ShadcnFieldLabel>
      <ShadcnInput id="input-rtl" placeholder="أدخل اسمك" className="text-right" />
    </ShadcnField>
  )
}

export { ShadcnInputRtl }
