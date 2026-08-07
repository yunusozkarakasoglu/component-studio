/**
 * ShadcnAlertDemo
 * Temel örnek — başarı + bilgi bildirimi (saf React, shadcn kaynaklı).
 * @id 871
 * @category Alert & Dialog
 * @subcategory ShadcnAlert
 * @source shadcn
 */
import { CheckCircle, Info } from "@/components/ui/icons"
import {
  ShadcnAlert,
  ShadcnAlertDescription,
  ShadcnAlertTitle,
} from "@/components/ui/shadcn-alert"

function ShadcnAlertDemo() {
  return (
    <div className="grid w-full max-w-md items-start gap-4">
      <ShadcnAlert>
        <CheckCircle className="size-4" />
        <ShadcnAlertTitle>Payment successful</ShadcnAlertTitle>
        <ShadcnAlertDescription>
          Your payment of $29.99 has been processed. A receipt has been sent to your email address.
        </ShadcnAlertDescription>
      </ShadcnAlert>
      <ShadcnAlert>
        <Info className="size-4" />
        <ShadcnAlertTitle>New feature available</ShadcnAlertTitle>
        <ShadcnAlertDescription>
          We&apos;ve added dark mode support. You can enable it in your account settings.
        </ShadcnAlertDescription>
      </ShadcnAlert>
    </div>
  )
}

export { ShadcnAlertDemo }
