/**
 * ShadcnAlertColors
 * Özel renkler (saf React, shadcn kaynaklı).
 * @id 875
 * @category Alert & Dialog
 * @subcategory ShadcnAlert
 * @source shadcn
 */
import { AlertTriangle } from "@/components/ui/icons"
import {
  ShadcnAlert,
  ShadcnAlertDescription,
  ShadcnAlertTitle,
} from "@/components/ui/shadcn-alert"

function ShadcnAlertColors() {
  return (
    <ShadcnAlert className="max-w-md border-amber-300 bg-amber-50 text-amber-900 dark:bg-amber-950 dark:text-amber-200">
      <AlertTriangle className="size-4" />
      <ShadcnAlertTitle>Warning</ShadcnAlertTitle>
      <ShadcnAlertDescription>
        Your account will expire soon. Please renew your subscription to continue.
      </ShadcnAlertDescription>
    </ShadcnAlert>
  )
}

export { ShadcnAlertColors }
