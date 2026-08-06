/**
 * ShadcnSheetNoCloseButton
 * Kapatma butonu olmayan panel (saf React, shadcn kaynaklı).
 * @id 824
 * @category Overlay
 * @subcategory ShadcnSheet
 * @source shadcn
 */
import {
  ShadcnSheet,
  ShadcnSheetContent,
  ShadcnSheetDescription,
  ShadcnSheetHeader,
  ShadcnSheetTitle,
  ShadcnSheetTrigger,
} from "@/components/ui/shadcn-sheet"

function ShadcnSheetNoCloseButton() {
  return (
    <ShadcnSheet>
      <ShadcnSheetTrigger>No Close Button</ShadcnSheetTrigger>
      <ShadcnSheetContent showCloseButton={false}>
        <ShadcnSheetHeader>
          <ShadcnSheetTitle>No Close Button</ShadcnSheetTitle>
          <ShadcnSheetDescription>
            This sheet doesn&apos;t have a close button in the top-right corner.
          </ShadcnSheetDescription>
        </ShadcnSheetHeader>
      </ShadcnSheetContent>
    </ShadcnSheet>
  )
}

export { ShadcnSheetNoCloseButton }
