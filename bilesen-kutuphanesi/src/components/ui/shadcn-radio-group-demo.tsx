/**
 * ShadcnRadioGroupDemo
 * Temel örnek — konfor seçimi (saf React, shadcn kaynaklı).
 * @id 718
 * @category RadioGroup
 * @subcategory ShadcnRadioGroup
 * @source shadcn
 */
import { ShadcnLabel } from "@/components/ui/shadcn-label"
import { ShadcnRadioGroup, ShadcnRadioGroupItem } from "@/components/ui/shadcn-radio-group"

function ShadcnRadioGroupDemo() {
  return (
    <ShadcnRadioGroup defaultValue="comfortable" className="w-fit">
      <div className="flex items-center gap-3">
        <ShadcnRadioGroupItem value="default" id="shadcn-r1" />
        <ShadcnLabel htmlFor="shadcn-r1">Default</ShadcnLabel>
      </div>
      <div className="flex items-center gap-3">
        <ShadcnRadioGroupItem value="comfortable" id="shadcn-r2" />
        <ShadcnLabel htmlFor="shadcn-r2">Comfortable</ShadcnLabel>
      </div>
      <div className="flex items-center gap-3">
        <ShadcnRadioGroupItem value="compact" id="shadcn-r3" />
        <ShadcnLabel htmlFor="shadcn-r3">Compact</ShadcnLabel>
      </div>
    </ShadcnRadioGroup>
  )
}

export { ShadcnRadioGroupDemo }
