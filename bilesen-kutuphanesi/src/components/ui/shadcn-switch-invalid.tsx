/**
 * ShadcnSwitchInvalid
 * Geçersiz durum (saf React, shadcn kaynaklı).
 * @id 714
 * @category Switch
 * @subcategory ShadcnSwitch
 * @source shadcn
 */
import {
  ShadcnField,
  ShadcnFieldContent,
  ShadcnFieldDescription,
  ShadcnFieldLabel,
} from "@/components/ui/shadcn-field"
import { ShadcnSwitch } from "@/components/ui/shadcn-switch"

function ShadcnSwitchInvalid() {
  return (
    <ShadcnField orientation="horizontal" className="max-w-sm" data-invalid>
      <ShadcnFieldContent>
        <ShadcnFieldLabel htmlFor="shadcn-switch-terms">
          Accept terms and conditions
        </ShadcnFieldLabel>
        <ShadcnFieldDescription>
          You must accept the terms and conditions to continue.
        </ShadcnFieldDescription>
      </ShadcnFieldContent>
      <ShadcnSwitch id="shadcn-switch-terms" aria-invalid />
    </ShadcnField>
  )
}

export { ShadcnSwitchInvalid }
