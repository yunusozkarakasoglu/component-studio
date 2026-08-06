/**
 * ShadcnDrawerSwipeHandle
 * Sürükleme tutamacı — varsayılan ve tutamaçsız (saf React, shadcn kaynaklı).
 * @id 829
 * @category Overlay
 * @subcategory ShadcnDrawer
 * @source shadcn
 */
import {
  ShadcnDrawer,
  ShadcnDrawerClose,
  ShadcnDrawerContent,
  ShadcnDrawerDescription,
  ShadcnDrawerFooter,
  ShadcnDrawerHeader,
  ShadcnDrawerTitle,
  ShadcnDrawerTrigger,
} from "@/components/ui/shadcn-drawer"

function ShadcnDrawerSwipeHandle() {
  return (
    <div className="flex flex-wrap gap-2">
      <ShadcnDrawer>
        <ShadcnDrawerTrigger>With Handle</ShadcnDrawerTrigger>
        <ShadcnDrawerContent>
          <ShadcnDrawerHeader>
            <ShadcnDrawerTitle>Swipe Handle</ShadcnDrawerTitle>
            <ShadcnDrawerDescription>
              Drag the handle to dismiss this drawer.
            </ShadcnDrawerDescription>
          </ShadcnDrawerHeader>
          <ShadcnDrawerFooter>
            <ShadcnDrawerClose>Close</ShadcnDrawerClose>
          </ShadcnDrawerFooter>
        </ShadcnDrawerContent>
      </ShadcnDrawer>
      <ShadcnDrawer>
        <ShadcnDrawerTrigger>Without Handle</ShadcnDrawerTrigger>
        <ShadcnDrawerContent showHandle={false}>
          <ShadcnDrawerHeader>
            <ShadcnDrawerTitle>No Handle</ShadcnDrawerTitle>
            <ShadcnDrawerDescription>
              This drawer has no swipe handle.
            </ShadcnDrawerDescription>
          </ShadcnDrawerHeader>
          <ShadcnDrawerFooter>
            <ShadcnDrawerClose>Close</ShadcnDrawerClose>
          </ShadcnDrawerFooter>
        </ShadcnDrawerContent>
      </ShadcnDrawer>
    </div>
  )
}

export { ShadcnDrawerSwipeHandle }
