/**
 * ShadcnAlertDialogSmall
 * Küçük boyut — aksesuar izni (saf React, shadcn kaynaklı).
 * @id 880
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

function ShadcnAlertDialogSmall() {
  return (
    <ShadcnAlertDialog>
      <ShadcnAlertDialogTrigger>Show Dialog</ShadcnAlertDialogTrigger>
      <ShadcnAlertDialogContent size="sm">
        <ShadcnAlertDialogHeader>
          <ShadcnAlertDialogTitle>Allow accessory to connect?</ShadcnAlertDialogTitle>
          <ShadcnAlertDialogDescription>
            Do you want to allow the USB accessory to connect to this device?
          </ShadcnAlertDialogDescription>
        </ShadcnAlertDialogHeader>
        <ShadcnAlertDialogFooter>
          <ShadcnAlertDialogCancel>Don&apos;t allow</ShadcnAlertDialogCancel>
          <ShadcnAlertDialogAction>Allow</ShadcnAlertDialogAction>
        </ShadcnAlertDialogFooter>
      </ShadcnAlertDialogContent>
    </ShadcnAlertDialog>
  )
}

export { ShadcnAlertDialogSmall }
