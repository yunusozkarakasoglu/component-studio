/**
 * ShadcnAlertBasic
 * Temel uyarı (saf React, shadcn kaynaklı).
 * @id 872
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

function ShadcnAlertBasic() {
  return (
    <ShadcnAlert className="max-w-md">
      <CheckCircle className="size-4" />
      <ShadcnAlertTitle>Account updated successfully</ShadcnAlertTitle>
      <ShadcnAlertDescription>
        Your profile information has been saved. Changes will be reflected immediately.
      </ShadcnAlertDescription>
    </ShadcnAlert>
  )
}

export { ShadcnAlertBasic }
