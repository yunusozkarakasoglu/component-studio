/**
 * ShadcnFieldCheckbox
 * Field + Checkbox — masaüstü öğeleri (saf React, shadcn kaynaklı).
 * Checkbox: kütüphanenin mevcut bileşeni (Heroui — saf React).
 * @id 656
 * @category Form Elemanları
 * @subcategory ShadcnField
 * @source shadcn
 */
import { Checkbox } from "@/components/ui/checkbox"
import {
  ShadcnField,
  ShadcnFieldContent,
  ShadcnFieldDescription,
  ShadcnFieldGroup,
  ShadcnFieldLabel,
  ShadcnFieldLegend,
  ShadcnFieldSeparator,
  ShadcnFieldSet,
} from "@/components/ui/shadcn-field"

function ShadcnFieldCheckbox() {
  return (
    <ShadcnFieldGroup className="w-full max-w-xs">
      <ShadcnFieldSet>
        <ShadcnFieldLegend variant="label">
          Show these items on the desktop
        </ShadcnFieldLegend>
        <ShadcnFieldDescription>
          Select the items you want to show on the desktop.
        </ShadcnFieldDescription>
        <ShadcnFieldGroup className="gap-3">
          <ShadcnField orientation="horizontal">
            <Checkbox label="Hard disks" defaultSelected />
          </ShadcnField>
          <ShadcnField orientation="horizontal">
            <Checkbox label="External disks" />
          </ShadcnField>
          <ShadcnField orientation="horizontal">
            <Checkbox label="CDs, DVDs, and iPods" />
          </ShadcnField>
          <ShadcnField orientation="horizontal">
            <Checkbox label="Connected servers" />
          </ShadcnField>
        </ShadcnFieldGroup>
      </ShadcnFieldSet>
      <ShadcnFieldSeparator />
      <ShadcnField orientation="horizontal">
        <Checkbox defaultSelected />
        <ShadcnFieldContent>
          <ShadcnFieldLabel>Sync Desktop & Documents folders</ShadcnFieldLabel>
          <ShadcnFieldDescription>
            Your Desktop & Documents folders are being synced with iCloud Drive.
          </ShadcnFieldDescription>
        </ShadcnFieldContent>
      </ShadcnField>
    </ShadcnFieldGroup>
  )
}

export { ShadcnFieldCheckbox }
