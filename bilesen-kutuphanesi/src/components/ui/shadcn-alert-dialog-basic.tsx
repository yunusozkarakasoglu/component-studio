/**
 * ShadcnAlertDialogBasic
 * Temel onay diyaloğu (saf React, shadcn kaynaklı).
 * @id 879
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

function ShadcnAlertDialogBasic() {
  return (
    <ShadcnAlertDialog>
      <ShadcnAlertDialogTrigger>Show Dialog</ShadcnAlertDialogTrigger>
      <ShadcnAlertDialogContent>
        <ShadcnAlertDialogHeader>
          <ShadcnAlertDialogTitle>Are you absolutely sure?</ShadcnAlertDialogTitle>
          <ShadcnAlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our servers.
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

export { ShadcnAlertDialogBasic }
