/**
 * ShadcnDialogNoCloseButton
 * Kapatma butonu olmayan dialog (saf React, shadcn kaynaklı).
 * @id 785
 * @category Overlay
 * @subcategory ShadcnDialog
 * @source shadcn
 */
import {
  ShadcnDialog,
  ShadcnDialogContent,
  ShadcnDialogDescription,
  ShadcnDialogHeader,
  ShadcnDialogTitle,
  ShadcnDialogTrigger,
} from "@/components/ui/shadcn-dialog"

function ShadcnDialogNoCloseButton() {
  return (
    <ShadcnDialog>
      <ShadcnDialogTrigger>No Close Button</ShadcnDialogTrigger>
      <ShadcnDialogContent showCloseButton={false}>
        <ShadcnDialogHeader>
          <ShadcnDialogTitle>No Close Button</ShadcnDialogTitle>
          <ShadcnDialogDescription>
            This dialog doesn&apos;t have a close button in the top-right corner.
          </ShadcnDialogDescription>
        </ShadcnDialogHeader>
      </ShadcnDialogContent>
    </ShadcnDialog>
  )
}

export { ShadcnDialogNoCloseButton }
