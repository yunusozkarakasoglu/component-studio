/**
 * ShadcnAlertDialogDemo
 * Temel örnek — hesap silme onayı (saf React, shadcn kaynaklı).
 * @id 878
 * @category Alert & Dialog
 * @subcategory ShadcnAlertDialog
 * @source shadcn
 */
import {
  ShadcnAlertDialog,
  ShadcnAlertDialogAction,
  ShadcnAlertDialogCancel,
  ShadcnAlertDialogContent,
  ShadcnAlertDialogDescription,
  ShadcnAlertDialogFooter,
  ShadcnAlertDialogHeader,
  ShadcnAlertDialogTitle,
  ShadcnAlertDialogTrigger,
} from "@/components/ui/shadcn-alert-dialog"

function ShadcnAlertDialogDemo() {
  return (
    <ShadcnAlertDialog>
      <ShadcnAlertDialogTrigger>Show Dialog</ShadcnAlertDialogTrigger>
      <ShadcnAlertDialogContent>
        <ShadcnAlertDialogHeader>
          <ShadcnAlertDialogTitle>Are you absolutely sure?</ShadcnAlertDialogTitle>
          <ShadcnAlertDialogDescription>
            This action cannot be undone. This will permanently delete your account from our servers.
          </ShadcnAlertDialogDescription>
        </ShadcnAlertDialogHeader>
        <ShadcnAlertDialogFooter>
          <ShadcnAlertDialogCancel>Cancel</ShadcnAlertDialogCancel>
          <ShadcnAlertDialogAction>Continue</ShadcnAlertDialogAction>
        </ShadcnAlertDialogFooter>
      </ShadcnAlertDialogContent>
    </ShadcnAlertDialog>
  )
}

export { ShadcnAlertDialogDemo }
