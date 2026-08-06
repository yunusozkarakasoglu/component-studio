/**
 * ShadcnSwitchRtl
 * RTL örneği — Arapça anahtar (saf React, shadcn kaynaklı).
 * @id 716
 * @category Switch
 * @subcategory ShadcnSwitch
 * @source shadcn
 */
import { ShadcnField, ShadcnFieldGroup, ShadcnFieldLabel } from "@/components/ui/shadcn-field"
import { ShadcnSwitch } from "@/components/ui/shadcn-switch"

function ShadcnSwitchRtl() {
  return (
    <ShadcnFieldGroup className="w-fit" dir="rtl">
      <ShadcnField orientation="horizontal">
        <ShadcnSwitch id="shadcn-switch-rtl" />
        <ShadcnFieldLabel htmlFor="shadcn-switch-rtl" dir="rtl">
          وضع الطيران
        </ShadcnFieldLabel>
      </ShadcnField>
    </ShadcnFieldGroup>
  )
}

export { ShadcnSwitchRtl }
