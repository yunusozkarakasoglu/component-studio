/**
 * ShadcnDialogScrollableContent
 * Kaydırılabilir içerik — başlık sabit (saf React, shadcn kaynaklı).
 * @id 787
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

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

function ShadcnDialogScrollableContent() {
  return (
    <ShadcnDialog>
      <ShadcnDialogTrigger>Scrollable Content</ShadcnDialogTrigger>
      <ShadcnDialogContent>
        <ShadcnDialogHeader>
          <ShadcnDialogTitle>Scrollable Content</ShadcnDialogTitle>
          <ShadcnDialogDescription>
            This is a dialog with scrollable content.
          </ShadcnDialogDescription>
        </ShadcnDialogHeader>
        <div className="max-h-[50vh] overflow-y-auto">
          {Array.from({ length: 10 }).map((_, index) => (
            <p key={index} className="mb-4 leading-normal">{LOREM}</p>
          ))}
        </div>
      </ShadcnDialogContent>
    </ShadcnDialog>
  )
}

export { ShadcnDialogScrollableContent }
