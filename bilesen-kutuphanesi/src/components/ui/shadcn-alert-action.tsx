/**
 * ShadcnAlertActionExample
 * Aksiyon butonlu uyarı (saf React, shadcn kaynaklı).
 * @id 874
 * @category Alert & Dialog
 * @subcategory ShadcnAlert
 * @source shadcn
 */
import {
  ShadcnAlert,
  ShadcnAlertAction,
  ShadcnAlertDescription,
  ShadcnAlertTitle,
} from "@/components/ui/shadcn-alert"
import { ShadcnButton } from "@/components/ui/shadcn-button"

function ShadcnAlertActionExample() {
  return (
    <ShadcnAlert className="max-w-md">
      <ShadcnAlertTitle>Dark mode is now available</ShadcnAlertTitle>
      <ShadcnAlertDescription>
        Enable it under your profile settings to get started.
      </ShadcnAlertDescription>
      <ShadcnAlertAction>
        <ShadcnButton size="xs">Enable</ShadcnButton>
      </ShadcnAlertAction>
    </ShadcnAlert>
  )
}

export { ShadcnAlertActionExample }
