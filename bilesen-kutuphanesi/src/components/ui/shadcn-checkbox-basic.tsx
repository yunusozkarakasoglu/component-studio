/**
 * ShadcnCheckboxBasic
 * Temel kullanım — Field + FieldLabel (saf React, shadcn kaynaklı).
 * @id 703
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

function ShadcnCheckboxBasic() {
  return (
    <ShadcnFieldGroup className="mx-auto w-56">
      <ShadcnField orientation="horizontal">
        <ShadcnCheckbox id="shadcn-terms-checkbox-basic" name="terms-checkbox-basic" />
        <ShadcnFieldLabel htmlFor="shadcn-terms-checkbox-basic">
          Accept terms and conditions
        </ShadcnFieldLabel>
      </ShadcnField>
    </ShadcnFieldGroup>
  )
}

export { ShadcnCheckboxBasic }
