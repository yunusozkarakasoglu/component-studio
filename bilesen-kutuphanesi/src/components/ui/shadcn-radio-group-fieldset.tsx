/**
 * ShadcnRadioGroupFieldset
 * FieldSet + FieldLegend — abonelik planı (saf React, shadcn kaynaklı).
 * @id 721
 * @category RadioGroup
 * @subcategory ShadcnRadioGroup
 * @source shadcn
 */
import {
  ShadcnField,
  ShadcnFieldDescription,
  ShadcnFieldLabel,
  ShadcnFieldLegend,
  ShadcnFieldSet,
} from "@/components/ui/shadcn-field"
import { ShadcnRadioGroup, ShadcnRadioGroupItem } from "@/components/ui/shadcn-radio-group"

function ShadcnRadioGroupFieldset() {
  return (
    <ShadcnFieldSet className="w-full max-w-xs">
      <ShadcnFieldLegend variant="label">Subscription Plan</ShadcnFieldLegend>
      <ShadcnFieldDescription>
        Yearly and lifetime plans offer significant savings.
      </ShadcnFieldDescription>
      <ShadcnRadioGroup defaultValue="monthly">
        <ShadcnField orientation="horizontal">
          <ShadcnRadioGroupItem value="monthly" id="shadcn-plan-monthly" />
          <ShadcnFieldLabel htmlFor="shadcn-plan-monthly" className="font-normal">
            Monthly ($9.99/month)
          </ShadcnFieldLabel>
        </ShadcnField>
        <ShadcnField orientation="horizontal">
          <ShadcnRadioGroupItem value="yearly" id="shadcn-plan-yearly" />
          <ShadcnFieldLabel htmlFor="shadcn-plan-yearly" className="font-normal">
            Yearly ($99.99/year)
          </ShadcnFieldLabel>
        </ShadcnField>
        <ShadcnField orientation="horizontal">
          <ShadcnRadioGroupItem value="lifetime" id="shadcn-plan-lifetime" />
          <ShadcnFieldLabel htmlFor="shadcn-plan-lifetime" className="font-normal">
            Lifetime ($299.99)
          </ShadcnFieldLabel>
        </ShadcnField>
      </ShadcnRadioGroup>
    </ShadcnFieldSet>
  )
}

export { ShadcnRadioGroupFieldset }
