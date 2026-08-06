/**
 * ShadcnFieldRtl
 * RTL örneği — Arapça form alanı (saf React, shadcn kaynaklı).
 * @id 661
 * @category Form Elemanları
 * @subcategory ShadcnField
 * @source shadcn
 */
import {
  ShadcnField,
  ShadcnFieldDescription,
  ShadcnFieldLabel,
} from "@/components/ui/shadcn-field"
import { ShadcnInput } from "@/components/ui/shadcn-input"

function ShadcnFieldRtl() {
  return (
    <ShadcnField className="w-full max-w-xs" dir="rtl">
      <ShadcnFieldLabel htmlFor="field-rtl-name" dir="rtl">الاسم</ShadcnFieldLabel>
      <ShadcnInput id="field-rtl-name" dir="rtl" placeholder="أدخل اسمك" />
      <ShadcnFieldDescription dir="rtl">سيظهر اسمك في ملفك الشخصي.</ShadcnFieldDescription>
    </ShadcnField>
  )
}

export { ShadcnFieldRtl }
