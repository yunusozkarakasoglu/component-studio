/**
 * ShadcnAlertDestructive
 * Yıkıcı varyant — ödeme hatası (saf React, shadcn kaynaklı).
 * @id 873
 * @category Alert & Dialog
 * @subcategory ShadcnAlert
 * @source shadcn
 */
import { AlertCircle } from "@/components/ui/icons"
import {
  ShadcnAlert,
  ShadcnAlertDescription,
  ShadcnAlertTitle,
} from "@/components/ui/shadcn-alert"

function ShadcnAlertDestructive() {
  return (
    <ShadcnAlert variant="destructive" className="max-w-md">
      <AlertCircle className="size-4" />
      <ShadcnAlertTitle>Payment failed</ShadcnAlertTitle>
      <ShadcnAlertDescription>
        Your payment could not be processed. Please check your payment method and try again.
      </ShadcnAlertDescription>
    </ShadcnAlert>
  )
}

export { ShadcnAlertDestructive }
