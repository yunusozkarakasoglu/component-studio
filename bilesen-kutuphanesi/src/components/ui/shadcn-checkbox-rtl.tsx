/**
 * ShadcnCheckboxRtl
 * RTL örneği — Arapça onay kutusu (saf React, shadcn kaynaklı).
 * @id 708
 * @category Checkbox
 * @subcategory ShadcnCheckbox
 * @source shadcn
 */
import { ShadcnCheckbox } from "@/components/ui/shadcn-checkbox"
import { ShadcnField, ShadcnFieldGroup, ShadcnFieldLabel } from "@/components/ui/shadcn-field"

function ShadcnCheckboxRtl() {
  return (
    <ShadcnFieldGroup className="mx-auto w-56" dir="rtl">
      <ShadcnField orientation="horizontal">
        <ShadcnCheckbox id="shadcn-terms-checkbox-rtl" name="terms-checkbox-rtl" />
        <ShadcnFieldLabel htmlFor="shadcn-terms-checkbox-rtl" dir="rtl">
          أوافق على الشروط والأحكام
        </ShadcnFieldLabel>
      </ShadcnField>
    </ShadcnFieldGroup>
  )
}

export { ShadcnCheckboxRtl }
