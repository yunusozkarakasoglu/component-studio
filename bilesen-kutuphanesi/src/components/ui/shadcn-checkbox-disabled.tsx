/**
 * ShadcnCheckboxDisabled
 * Devre dışı onay kutusu (saf React, shadcn kaynaklı).
 * @id 705
 * @category Checkbox
 * @subcategory ShadcnCheckbox
 * @source shadcn
 */
import { ShadcnCheckbox } from "@/components/ui/shadcn-checkbox"
import {
  ShadcnField,
  ShadcnFieldGroup,
  ShadcnFieldLabel,
} from "@/components/ui/shadcn-field"

function ShadcnCheckboxDisabled() {
  return (
    <ShadcnFieldGroup className="mx-auto w-56">
      <ShadcnField orientation="horizontal" data-disabled>
        <ShadcnCheckbox id="shadcn-toggle-checkbox-disabled" name="toggle-checkbox-disabled" isDisabled />
        <ShadcnFieldLabel htmlFor="shadcn-toggle-checkbox-disabled">
          Enable notifications
        </ShadcnFieldLabel>
      </ShadcnField>
    </ShadcnFieldGroup>
  )
}

export { ShadcnCheckboxDisabled }
