/**
 * ShadcnSwitchDescription
 * Açıklamalı anahtar (saf React, shadcn kaynaklı).
 * @id 711
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

function ShadcnSwitchDescription() {
  return (
    <ShadcnField orientation="horizontal" className="max-w-sm">
      <ShadcnFieldContent>
        <ShadcnFieldLabel htmlFor="shadcn-switch-focus-mode">
          Share across devices
        </ShadcnFieldLabel>
        <ShadcnFieldDescription>
          Focus is shared across devices, and turns off when you leave the app.
        </ShadcnFieldDescription>
      </ShadcnFieldContent>
      <ShadcnSwitch id="shadcn-switch-focus-mode" />
    </ShadcnField>
  )
}

export { ShadcnSwitchDescription }
