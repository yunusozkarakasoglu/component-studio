/**
 * ShadcnTextareaRtl
 * RTL örneği — Arapça metin alanı (saf React, shadcn kaynaklı).
 * @id 642
 * @category Form Elemanları
 * @subcategory ShadcnTextarea
 * @source shadcn
 */
import { ShadcnField, ShadcnFieldDescription, ShadcnFieldLabel } from "@/components/ui/shadcn-field"
import { ShadcnTextarea } from "@/components/ui/shadcn-textarea"

function ShadcnTextareaRtl() {
  return (
    <ShadcnField dir="rtl" className="w-full max-w-xs">
      <ShadcnFieldLabel htmlFor="feedback" dir="rtl">التعليقات</ShadcnFieldLabel>
      <ShadcnTextarea id="feedback" dir="rtl" placeholder="تعليقاتك تساعدنا على التحسين..." rows={4} />
      <ShadcnFieldDescription dir="rtl">شاركنا أفكارك حول خدمتنا.</ShadcnFieldDescription>
    </ShadcnField>
  )
}

export { ShadcnTextareaRtl }
