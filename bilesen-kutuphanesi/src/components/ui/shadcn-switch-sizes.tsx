/**
 * ShadcnSwitchSizes
 * Boyutlar — küçük ve varsayılan (saf React, shadcn kaynaklı).
 * @id 715
 * @category Switch
 * @subcategory ShadcnSwitch
 * @source shadcn
 */
import { ShadcnField, ShadcnFieldGroup, ShadcnFieldLabel } from "@/components/ui/shadcn-field"
import { ShadcnSwitch } from "@/components/ui/shadcn-switch"

function ShadcnSwitchSizes() {
  return (
    <ShadcnFieldGroup className="w-full max-w-[10rem]">
      <ShadcnField orientation="horizontal">
        <ShadcnSwitch id="shadcn-switch-size-sm" size="sm" />
        <ShadcnFieldLabel htmlFor="shadcn-switch-size-sm">Small</ShadcnFieldLabel>
      </ShadcnField>
      <ShadcnField orientation="horizontal">
        <ShadcnSwitch id="shadcn-switch-size-default" size="default" />
        <ShadcnFieldLabel htmlFor="shadcn-switch-size-default">Default</ShadcnFieldLabel>
      </ShadcnField>
    </ShadcnFieldGroup>
  )
}

export { ShadcnSwitchSizes }
