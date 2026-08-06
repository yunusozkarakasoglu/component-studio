/**
 * ShadcnSwitchDisabled
 * Devre dışı anahtar (saf React, shadcn kaynaklı).
 * @id 713
 * @category Switch
 * @subcategory ShadcnSwitch
 * @source shadcn
 */
import { ShadcnField, ShadcnFieldLabel } from "@/components/ui/shadcn-field"
import { ShadcnSwitch } from "@/components/ui/shadcn-switch"

function ShadcnSwitchDisabled() {
  return (
    <ShadcnField orientation="horizontal" data-disabled className="w-fit">
      <ShadcnSwitch id="shadcn-switch-disabled-unchecked" isDisabled />
      <ShadcnFieldLabel htmlFor="shadcn-switch-disabled-unchecked">Disabled</ShadcnFieldLabel>
    </ShadcnField>
  )
}

export { ShadcnSwitchDisabled }
