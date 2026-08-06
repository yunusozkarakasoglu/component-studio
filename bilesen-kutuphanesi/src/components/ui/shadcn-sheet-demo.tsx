/**
 * ShadcnSheetDemo
 * Temel örnek — profil düzenleme paneli (saf React, shadcn kaynaklı).
 * @id 822
 * @category Overlay
 * @subcategory ShadcnSheet
 * @source shadcn
 */
import { ShadcnButton } from "@/components/ui/shadcn-button"
import { ShadcnInput } from "@/components/ui/shadcn-input"
import { ShadcnLabel } from "@/components/ui/shadcn-label"
import {
  ShadcnSheet,
  ShadcnSheetClose,
  ShadcnSheetContent,
  ShadcnSheetDescription,
  ShadcnSheetFooter,
  ShadcnSheetHeader,
  ShadcnSheetTitle,
  ShadcnSheetTrigger,
} from "@/components/ui/shadcn-sheet"

function ShadcnSheetDemo() {
  return (
    <ShadcnSheet>
      <ShadcnSheetTrigger>Open</ShadcnSheetTrigger>
      <ShadcnSheetContent>
        <ShadcnSheetHeader>
          <ShadcnSheetTitle>Edit profile</ShadcnSheetTitle>
          <ShadcnSheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </ShadcnSheetDescription>
        </ShadcnSheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6">
          <div className="grid gap-3">
            <ShadcnLabel htmlFor="sheet-demo-name">Name</ShadcnLabel>
            <ShadcnInput id="sheet-demo-name" defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-3">
            <ShadcnLabel htmlFor="sheet-demo-username">Username</ShadcnLabel>
            <ShadcnInput id="sheet-demo-username" defaultValue="@peduarte" />
          </div>
        </div>
        <ShadcnSheetFooter>
          <ShadcnButton type="submit">Save changes</ShadcnButton>
          <ShadcnSheetClose>Close</ShadcnSheetClose>
        </ShadcnSheetFooter>
      </ShadcnSheetContent>
    </ShadcnSheet>
  )
}

export { ShadcnSheetDemo }
