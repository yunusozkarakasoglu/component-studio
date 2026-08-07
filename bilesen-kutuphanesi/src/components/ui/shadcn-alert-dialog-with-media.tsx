/**
 * ShadcnAlertDialogWithMedia
 * Medyalı onay diyaloğu — ikon (saf React, shadcn kaynaklı).
 * @id 881
 * @category Alert & Dialog
 * @subcategory ShadcnAlertDialog
 * @source shadcn
 */
import { AlertTriangle } from "@/components/ui/icons"
import {
  ShadcnAlertDialog,
  ShadcnAlertDialogAction,
  ShadcnAlertDialogCancel,
  ShadcnAlertDialogContent,
  ShadcnAlertDialogDescription,
  ShadcnAlertDialogFooter,
  ShadcnAlertDialogHeader,
  ShadcnAlertDialogMedia,
  ShadcnAlertDialogTitle,
  ShadcnAlertDialogTrigger,
} from "@/components/ui/shadcn-alert-dialog"

function ShadcnAlertDialogWithMedia() {
  return (
    <ShadcnAlertDialog>
      <ShadcnAlertDialogTrigger>Show Dialog</ShadcnAlertDialogTrigger>
      <ShadcnAlertDialogContent>
        <ShadcnAlertDialogMedia>
          <AlertTriangle className="size-5 text-amber-600" />
        </ShadcnAlertDialogMedia>
        <ShadcnAlertDialogHeader>
          <ShadcnAlertDialogTitle>Unsaved changes</ShadcnAlertDialogTitle>
          <ShadcnAlertDialogDescription>
            You have unsaved changes. Are you sure you want to leave?
          </ShadcnAlertDialogDescription>
        </ShadcnAlertDialogHeader>
        <ShadcnAlertDialogFooter>
          <ShadcnAlertDialogCancel>Stay</ShadcnAlertDialogCancel>
          <ShadcnAlertDialogAction>Leave</ShadcnAlertDialogAction>
        </ShadcnAlertDialogFooter>
      </ShadcnAlertDialogContent>
    </ShadcnAlertDialog>
  )
}

export { ShadcnAlertDialogWithMedia }
