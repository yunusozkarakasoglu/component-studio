/**
 * ShadcnDialogDemo
 * Temel örnek — profil düzenleme (saf React, shadcn kaynaklı).
 * @id 783
 * @category Overlay
 * @subcategory ShadcnDialog
 * @source shadcn
 */
import { ShadcnButton } from "@/components/ui/shadcn-button"
import {
  ShadcnDialog,
  ShadcnDialogContent,
  ShadcnDialogDescription,
  ShadcnDialogFooter,
  ShadcnDialogHeader,
  ShadcnDialogTitle,
  ShadcnDialogTrigger,
} from "@/components/ui/shadcn-dialog"
import { ShadcnField, ShadcnFieldGroup } from "@/components/ui/shadcn-field"
import { ShadcnInput } from "@/components/ui/shadcn-input"
import { ShadcnLabel } from "@/components/ui/shadcn-label"

function ShadcnDialogDemo() {
  return (
    <ShadcnDialog>
      <form>
        <ShadcnDialogTrigger>Open Dialog</ShadcnDialogTrigger>
        <ShadcnDialogContent className="sm:max-w-sm">
          <ShadcnDialogHeader>
            <ShadcnDialogTitle>Edit profile</ShadcnDialogTitle>
            <ShadcnDialogDescription>
              Make changes to your profile here. Click save when you&apos;re done.
            </ShadcnDialogDescription>
          </ShadcnDialogHeader>
          <ShadcnFieldGroup>
            <ShadcnField>
              <ShadcnLabel htmlFor="dialog-name">Name</ShadcnLabel>
              <ShadcnInput id="dialog-name" name="name" defaultValue="Pedro Duarte" />
            </ShadcnField>
            <ShadcnField>
              <ShadcnLabel htmlFor="dialog-username">Username</ShadcnLabel>
              <ShadcnInput id="dialog-username" name="username" defaultValue="@peduarte" />
            </ShadcnField>
          </ShadcnFieldGroup>
          <ShadcnDialogFooter>
            <ShadcnButton type="submit">Save changes</ShadcnButton>
          </ShadcnDialogFooter>
        </ShadcnDialogContent>
      </form>
    </ShadcnDialog>
  )
}

export { ShadcnDialogDemo }
