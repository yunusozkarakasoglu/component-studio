/**
 * ShadcnCheckboxGroup
 * Onay kutusu listesi — FieldSet + FieldGroup (saf React, shadcn kaynaklı).
 * @id 706
 * @category Checkbox
 * @subcategory ShadcnCheckbox
 * @source shadcn
 */
import { ShadcnCheckbox } from "@/components/ui/shadcn-checkbox"
import {
  ShadcnField,
  ShadcnFieldDescription,
  ShadcnFieldGroup,
  ShadcnFieldLabel,
  ShadcnFieldLegend,
  ShadcnFieldSet,
} from "@/components/ui/shadcn-field"

function ShadcnCheckboxGroup() {
  return (
    <ShadcnFieldSet>
      <ShadcnFieldLegend variant="label">
        Show these items on the desktop:
      </ShadcnFieldLegend>
      <ShadcnFieldDescription>
        Select the items you want to show on the desktop.
      </ShadcnFieldDescription>
      <ShadcnFieldGroup className="gap-3">
        <ShadcnField orientation="horizontal">
          <ShadcnCheckbox id="shadcn-finder-hard-disks" name="finder-hard-disks" defaultChecked />
          <ShadcnFieldLabel htmlFor="shadcn-finder-hard-disks" className="font-normal">
            Hard disks
          </ShadcnFieldLabel>
        </ShadcnField>
        <ShadcnField orientation="horizontal">
          <ShadcnCheckbox id="shadcn-finder-external-disks" name="finder-external-disks" defaultChecked />
          <ShadcnFieldLabel htmlFor="shadcn-finder-external-disks" className="font-normal">
            External disks
          </ShadcnFieldLabel>
        </ShadcnField>
        <ShadcnField orientation="horizontal">
          <ShadcnCheckbox id="shadcn-finder-cds-dvds" name="finder-cds-dvds" />
          <ShadcnFieldLabel htmlFor="shadcn-finder-cds-dvds" className="font-normal">
            CDs, DVDs, and iPods
          </ShadcnFieldLabel>
        </ShadcnField>
        <ShadcnField orientation="horizontal">
          <ShadcnCheckbox id="shadcn-finder-connected-servers" name="finder-connected-servers" />
          <ShadcnFieldLabel htmlFor="shadcn-finder-connected-servers" className="font-normal">
            Connected servers
          </ShadcnFieldLabel>
        </ShadcnField>
      </ShadcnFieldGroup>
    </ShadcnFieldSet>
  )
}

export { ShadcnCheckboxGroup }
