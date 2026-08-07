/**
 * ShadcnAlertRtl
 * RTL örneği — Arapça uyarı (saf React, shadcn kaynaklı).
 * @id 876
 * @category Alert & Dialog
 * @subcategory ShadcnAlert
 * @source shadcn
 */
import { CheckCircle } from "@/components/ui/icons"
import {
  ShadcnAlert,
  ShadcnAlertDescription,
  ShadcnAlertTitle,
} from "@/components/ui/shadcn-alert"

function ShadcnAlertRtl() {
  return (
    <ShadcnAlert className="max-w-md" dir="rtl">
      <CheckCircle className="size-4" />
      <ShadcnAlertTitle>تم الدفع بنجاح</ShadcnAlertTitle>
      <ShadcnAlertDescription>
        تمت معالجة دفعتك البالغة 29.99 دولارًا. تم إرسال إيصال إلى بريدك الإلكتروني.
      </ShadcnAlertDescription>
    </ShadcnAlert>
  )
}

export { ShadcnAlertRtl }
