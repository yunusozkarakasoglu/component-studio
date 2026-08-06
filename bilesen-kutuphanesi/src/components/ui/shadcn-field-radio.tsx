/**
 * ShadcnFieldRadio
 * Field + RadioGroup — abonelik planı (saf React, shadcn kaynaklı).
 * RadioGroup: kütüphanenin mevcut bileşeni (Heroui — saf React).
 * @id 657
 * @category Form Elemanları
 * @subcategory ShadcnField
 * @source shadcn
 */
import { Radio, RadioGroup } from "@/components/ui/radio-group"
import {
  ShadcnField,
  ShadcnFieldDescription,
  ShadcnFieldLegend,
  ShadcnFieldSet,
} from "@/components/ui/shadcn-field"

function ShadcnFieldRadio() {
  return (
    <ShadcnFieldSet className="w-full max-w-xs">
      <ShadcnFieldLegend variant="label">Subscription Plan</ShadcnFieldLegend>
      <ShadcnFieldDescription>
        Yearly and lifetime plans offer significant savings.
      </ShadcnFieldDescription>
      <RadioGroup defaultValue="monthly">
        <ShadcnField orientation="horizontal">
          <Radio value="monthly">Monthly ($9.99/month)</Radio>
        </ShadcnField>
        <ShadcnField orientation="horizontal">
          <Radio value="yearly">Yearly ($99.99/year)</Radio>
        </ShadcnField>
        <ShadcnField orientation="horizontal">
          <Radio value="lifetime">Lifetime ($299.99)</Radio>
        </ShadcnField>
      </RadioGroup>
    </ShadcnFieldSet>
  )
}

export { ShadcnFieldRadio }
