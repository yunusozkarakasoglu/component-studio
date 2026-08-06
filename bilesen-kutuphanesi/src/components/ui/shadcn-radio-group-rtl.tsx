/**
 * ShadcnRadioGroupRtl
 * RTL örneği — Arapça radyo grubu (saf React, shadcn kaynaklı).
 * @id 724
 * @category RadioGroup
 * @subcategory ShadcnRadioGroup
 * @source shadcn
 */
import { ShadcnField, ShadcnFieldLabel } from "@/components/ui/shadcn-field"
import { ShadcnRadioGroup, ShadcnRadioGroupItem } from "@/components/ui/shadcn-radio-group"

function ShadcnRadioGroupRtl() {
  return (
    <ShadcnRadioGroup defaultValue="ar" className="w-fit" >
      <div dir="rtl">
        <ShadcnField orientation="horizontal">
          <ShadcnRadioGroupItem value="ar" id="shadcn-lang-ar" />
          <ShadcnFieldLabel htmlFor="shadcn-lang-ar" dir="rtl">
            العربية
          </ShadcnFieldLabel>
        </ShadcnField>
        <ShadcnField orientation="horizontal">
          <ShadcnRadioGroupItem value="en" id="shadcn-lang-en" />
          <ShadcnFieldLabel htmlFor="shadcn-lang-en">English</ShadcnFieldLabel>
        </ShadcnField>
      </div>
    </ShadcnRadioGroup>
  )
}

export { ShadcnRadioGroupRtl }
