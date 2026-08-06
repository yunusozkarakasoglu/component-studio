/**
 * ShadcnDrawerNested
 * İç içe çekmeceler (saf React, shadcn kaynaklı).
 * @id 830
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

function ShadcnDrawerNested() {
  return (
    <ShadcnDrawer>
      <ShadcnDrawerTrigger>Open</ShadcnDrawerTrigger>
      <ShadcnDrawerContent>
        <ShadcnDrawerHeader>
          <ShadcnDrawerTitle>Outer Drawer</ShadcnDrawerTitle>
          <ShadcnDrawerDescription>
            You can nest another drawer inside this one.
          </ShadcnDrawerDescription>
        </ShadcnDrawerHeader>
        <ShadcnDrawer>
          <ShadcnDrawerTrigger>Open Inner</ShadcnDrawerTrigger>
          <ShadcnDrawerContent>
            <ShadcnDrawerHeader>
              <ShadcnDrawerTitle>Inner Drawer</ShadcnDrawerTitle>
              <ShadcnDrawerDescription>
                This is the nested drawer content.
              </ShadcnDrawerDescription>
            </ShadcnDrawerHeader>
            <ShadcnDrawerFooter>
              <ShadcnDrawerClose>Close Inner</ShadcnDrawerClose>
            </ShadcnDrawerFooter>
          </ShadcnDrawerContent>
        </ShadcnDrawer>
        <ShadcnDrawerFooter>
          <ShadcnDrawerClose>Close</ShadcnDrawerClose>
        </ShadcnDrawerFooter>
      </ShadcnDrawerContent>
    </ShadcnDrawer>
  )
}

export { ShadcnDrawerNested }
