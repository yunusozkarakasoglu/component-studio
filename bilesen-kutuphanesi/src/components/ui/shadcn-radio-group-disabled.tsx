/**
 * ShadcnRadioGroupDisabled
 * Kısmen devre dışı radyo öğesi (saf React, shadcn kaynaklı).
 * @id 722
 * @category RadioGroup
 * @subcategory ShadcnRadioGroup
 * @source shadcn
 */
import { ShadcnField, ShadcnFieldLabel } from "@/components/ui/shadcn-field"
import { ShadcnRadioGroup, ShadcnRadioGroupItem } from "@/components/ui/shadcn-radio-group"

function ShadcnRadioGroupDisabled() {
  return (
    <ShadcnRadioGroup defaultValue="option2" className="w-fit">
      <ShadcnField orientation="horizontal" data-disabled>
        <ShadcnRadioGroupItem value="option1" id="shadcn-disabled-1" isDisabled />
        <ShadcnFieldLabel htmlFor="shadcn-disabled-1" className="font-normal">
          Disabled
        </ShadcnFieldLabel>
      </ShadcnField>
      <ShadcnField orientation="horizontal">
        <ShadcnRadioGroupItem value="option2" id="shadcn-disabled-2" />
        <ShadcnFieldLabel htmlFor="shadcn-disabled-2" className="font-normal">
          Option 2
        </ShadcnFieldLabel>
      </ShadcnField>
      <ShadcnField orientation="horizontal">
        <ShadcnRadioGroupItem value="option3" id="shadcn-disabled-3" />
        <ShadcnFieldLabel htmlFor="shadcn-disabled-3" className="font-normal">
          Option 3
        </ShadcnFieldLabel>
      </ShadcnField>
    </ShadcnRadioGroup>
  )
}

export { ShadcnRadioGroupDisabled }
