/**
 * ShadcnDialogStickyFooter
 * Yapışkan ayak — içerik kayarken görünür kalır (saf React, shadcn kaynaklı).
 * @id 786
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

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

function ShadcnDialogStickyFooter() {
  return (
    <ShadcnDialog>
      <ShadcnDialogTrigger>Sticky Footer</ShadcnDialogTrigger>
      <ShadcnDialogContent>
        <ShadcnDialogHeader>
          <ShadcnDialogTitle>Sticky Footer</ShadcnDialogTitle>
          <ShadcnDialogDescription>
            This dialog has a sticky footer that stays visible while the content scrolls.
          </ShadcnDialogDescription>
        </ShadcnDialogHeader>
        <div className="max-h-[50vh] overflow-y-auto">
          {Array.from({ length: 10 }).map((_, index) => (
            <p key={index} className="mb-4 leading-normal">{LOREM}</p>
          ))}
        </div>
        <ShadcnDialogFooter>
          <ShadcnDialogClose>Close</ShadcnDialogClose>
        </ShadcnDialogFooter>
      </ShadcnDialogContent>
    </ShadcnDialog>
  )
}

export { ShadcnDialogStickyFooter }
