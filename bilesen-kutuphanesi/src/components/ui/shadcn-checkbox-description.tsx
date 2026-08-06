/**
 * ShadcnCheckboxDescription
 * Açıklamalı onay kutusu (saf React, shadcn kaynaklı).
 * @id 704
 * @category Checkbox
 * @subcategory ShadcnCheckbox
 * @source shadcn
 */
import { ShadcnCheckbox } from "@/components/ui/shadcn-checkbox"
import {
  ShadcnField,
  ShadcnFieldContent,
  ShadcnFieldDescription,
  ShadcnFieldGroup,
  ShadcnFieldLabel,
} from "@/components/ui/shadcn-field"

function ShadcnCheckboxDescription() {
  return (
    <ShadcnFieldGroup className="mx-auto w-72">
      <ShadcnField orientation="horizontal">
        <ShadcnCheckbox id="shadcn-terms-checkbox-desc" name="terms-checkbox-desc" defaultChecked />
        <ShadcnFieldContent>
          <ShadcnFieldLabel htmlFor="shadcn-terms-checkbox-desc">
            Accept terms and conditions
          </ShadcnFieldLabel>
          <ShadcnFieldDescription>
            By clicking this checkbox, you agree to the terms and conditions.
          </ShadcnFieldDescription>
        </ShadcnFieldContent>
      </ShadcnField>
    </ShadcnFieldGroup>
  )
}

export { ShadcnCheckboxDescription }
