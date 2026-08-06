/**
 * ShadcnRadioGroupDescription
 * Açıklamalı radyo öğeleri (saf React, shadcn kaynaklı).
 * @id 719
 * @category RadioGroup
 * @subcategory ShadcnRadioGroup
 * @source shadcn
 */
import {
  ShadcnField,
  ShadcnFieldContent,
  ShadcnFieldDescription,
  ShadcnFieldLabel,
} from "@/components/ui/shadcn-field"
import { ShadcnRadioGroup, ShadcnRadioGroupItem } from "@/components/ui/shadcn-radio-group"

function ShadcnRadioGroupDescription() {
  return (
    <ShadcnRadioGroup defaultValue="comfortable" className="w-fit">
      <ShadcnField orientation="horizontal">
        <ShadcnRadioGroupItem value="default" id="shadcn-desc-r1" />
        <ShadcnFieldContent>
          <ShadcnFieldLabel htmlFor="shadcn-desc-r1">Default</ShadcnFieldLabel>
          <ShadcnFieldDescription>Standard spacing for most use cases.</ShadcnFieldDescription>
        </ShadcnFieldContent>
      </ShadcnField>
      <ShadcnField orientation="horizontal">
        <ShadcnRadioGroupItem value="comfortable" id="shadcn-desc-r2" />
        <ShadcnFieldContent>
          <ShadcnFieldLabel htmlFor="shadcn-desc-r2">Comfortable</ShadcnFieldLabel>
          <ShadcnFieldDescription>More space between elements.</ShadcnFieldDescription>
        </ShadcnFieldContent>
      </ShadcnField>
      <ShadcnField orientation="horizontal">
        <ShadcnRadioGroupItem value="compact" id="shadcn-desc-r3" />
        <ShadcnFieldContent>
          <ShadcnFieldLabel htmlFor="shadcn-desc-r3">Compact</ShadcnFieldLabel>
          <ShadcnFieldDescription>Minimal spacing for dense layouts.</ShadcnFieldDescription>
        </ShadcnFieldContent>
      </ShadcnField>
    </ShadcnRadioGroup>
  )
}

export { ShadcnRadioGroupDescription }
