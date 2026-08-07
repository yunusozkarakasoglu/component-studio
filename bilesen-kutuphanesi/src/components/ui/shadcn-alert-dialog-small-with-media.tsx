/**
 * ShadcnAlertDialogSmallWithMedia
 * Küçük + medyalı onay diyaloğu (saf React, shadcn kaynaklı).
 * @id 882
 * @category Alert & Dialog
 * @subcategory ShadcnAlertDialog
 * @source shadcn
 */
import { Info } from "@/components/ui/icons"
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

function ShadcnAlertDialogSmallWithMedia() {
  return (
    <ShadcnAlertDialog>
      <ShadcnAlertDialogTrigger>Show Dialog</ShadcnAlertDialogTrigger>
      <ShadcnAlertDialogContent size="sm">
        <ShadcnAlertDialogMedia>
          <Info className="size-5 text-blue-600" />
        </ShadcnAlertDialogMedia>
        <ShadcnAlertDialogHeader>
          <ShadcnAlertDialogTitle>Software update available</ShadcnAlertDialogTitle>
          <ShadcnAlertDialogDescription>
            A new version is ready to install. Restart to apply the update.
          </ShadcnAlertDialogDescription>
        </ShadcnAlertDialogHeader>
        <ShadcnAlertDialogFooter>
          <ShadcnAlertDialogCancel>Later</ShadcnAlertDialogCancel>
          <ShadcnAlertDialogAction>Update Now</ShadcnAlertDialogAction>
        </ShadcnAlertDialogFooter>
      </ShadcnAlertDialogContent>
    </ShadcnAlertDialog>
  )
}

export { ShadcnAlertDialogSmallWithMedia }
