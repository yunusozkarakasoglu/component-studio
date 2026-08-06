/**
 * ShadcnCheckboxDemo
 * Temel örnek — koşul onayı (saf React, shadcn kaynaklı).
 * @id 700
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
import { ShadcnLabel } from "@/components/ui/shadcn-label"

function ShadcnCheckboxDemo() {
  return (
    <ShadcnFieldGroup className="max-w-sm">
      <ShadcnField orientation="horizontal">
        <ShadcnCheckbox id="shadcn-terms-checkbox" name="terms-checkbox" />
        <ShadcnLabel htmlFor="shadcn-terms-checkbox">Accept terms and conditions</ShadcnLabel>
      </ShadcnField>
      <ShadcnField orientation="horizontal">
        <ShadcnCheckbox id="shadcn-terms-checkbox-2" name="terms-checkbox-2" defaultChecked />
        <ShadcnFieldContent>
          <ShadcnFieldLabel htmlFor="shadcn-terms-checkbox-2">
            Accept terms and conditions
          </ShadcnFieldLabel>
          <ShadcnFieldDescription>
            By clicking this checkbox, you agree to the terms.
          </ShadcnFieldDescription>
        </ShadcnFieldContent>
      </ShadcnField>
      <ShadcnField orientation="horizontal" data-disabled>
        <ShadcnCheckbox id="shadcn-toggle-checkbox" name="toggle-checkbox" isDisabled />
        <ShadcnFieldLabel htmlFor="shadcn-toggle-checkbox">Enable notifications</ShadcnFieldLabel>
      </ShadcnField>
    </ShadcnFieldGroup>
  )
}

export { ShadcnCheckboxDemo }
