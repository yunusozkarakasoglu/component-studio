/**
 * ShadcnDialogCloseButton
 * Özel kapatma butonu — paylaşım linki (saf React, shadcn kaynaklı).
 * @id 784
 * @category Overlay
 * @subcategory ShadcnDialog
 * @source shadcn
 */
import {
  ShadcnDialog,
  ShadcnDialogClose,
  ShadcnDialogContent,
  ShadcnDialogDescription,
  ShadcnDialogFooter,
  ShadcnDialogHeader,
  ShadcnDialogTitle,
  ShadcnDialogTrigger,
} from "@/components/ui/shadcn-dialog"
import { ShadcnInput } from "@/components/ui/shadcn-input"
import { ShadcnLabel } from "@/components/ui/shadcn-label"

function ShadcnDialogCloseButton() {
  return (
    <ShadcnDialog>
      <ShadcnDialogTrigger>Share</ShadcnDialogTrigger>
      <ShadcnDialogContent className="sm:max-w-md">
        <ShadcnDialogHeader>
          <ShadcnDialogTitle>Share link</ShadcnDialogTitle>
          <ShadcnDialogDescription>
            Anyone who has this link will be able to view this.
          </ShadcnDialogDescription>
        </ShadcnDialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <ShadcnLabel htmlFor="dialog-link" className="sr-only">Link</ShadcnLabel>
            <ShadcnInput id="dialog-link" defaultValue="https://ui.shadcn.com/docs/installation" readOnly />
          </div>
        </div>
        <ShadcnDialogFooter className="sm:justify-start">
          <ShadcnDialogClose>Close</ShadcnDialogClose>
        </ShadcnDialogFooter>
      </ShadcnDialogContent>
    </ShadcnDialog>
  )
}

export { ShadcnDialogCloseButton }
