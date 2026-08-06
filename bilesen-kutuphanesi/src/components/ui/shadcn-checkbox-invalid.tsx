/**
 * ShadcnCheckboxInvalid
 * Geçersiz durum — data-invalid (saf React, shadcn kaynaklı).
 * @id 702
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

function ShadcnCheckboxInvalid() {
  return (
    <ShadcnFieldGroup className="mx-auto w-56">
      <ShadcnField orientation="horizontal" data-invalid>
        <ShadcnCheckbox id="shadcn-terms-checkbox-invalid" name="terms-checkbox-invalid" aria-invalid />
        <ShadcnFieldLabel htmlFor="shadcn-terms-checkbox-invalid">
          Accept terms and conditions
        </ShadcnFieldLabel>
      </ShadcnField>
    </ShadcnFieldGroup>
  )
}

export { ShadcnCheckboxInvalid }
