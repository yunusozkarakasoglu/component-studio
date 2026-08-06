/**
 * ShadcnFieldFieldset
 * FieldSet + FieldGroup — adres bilgileri (saf React, shadcn kaynaklı).
 * @id 655
 * @category Form Elemanları
 * @subcategory ShadcnField
 * @source shadcn
 */
import {
  ShadcnField,
  ShadcnFieldDescription,
  ShadcnFieldGroup,
  ShadcnFieldLabel,
  ShadcnFieldLegend,
  ShadcnFieldSet,
} from "@/components/ui/shadcn-field"
import { ShadcnInput } from "@/components/ui/shadcn-input"

function ShadcnFieldFieldset() {
  return (
    <ShadcnFieldSet className="w-full max-w-sm">
      <ShadcnFieldLegend>Address Information</ShadcnFieldLegend>
      <ShadcnFieldDescription>
        We need your address to deliver your order.
      </ShadcnFieldDescription>
      <ShadcnFieldGroup>
        <ShadcnField>
          <ShadcnFieldLabel htmlFor="fieldset-street">Street Address</ShadcnFieldLabel>
          <ShadcnInput id="fieldset-street" type="text" placeholder="123 Main St" />
        </ShadcnField>
        <div className="grid grid-cols-2 gap-4">
          <ShadcnField>
            <ShadcnFieldLabel htmlFor="fieldset-city">City</ShadcnFieldLabel>
            <ShadcnInput id="fieldset-city" type="text" placeholder="New York" />
          </ShadcnField>
          <ShadcnField>
            <ShadcnFieldLabel htmlFor="fieldset-zip">Postal Code</ShadcnFieldLabel>
            <ShadcnInput id="fieldset-zip" type="text" placeholder="90502" />
          </ShadcnField>
        </div>
      </ShadcnFieldGroup>
    </ShadcnFieldSet>
  )
}

export { ShadcnFieldFieldset }
