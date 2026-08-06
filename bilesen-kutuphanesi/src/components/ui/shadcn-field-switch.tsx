/**
 * ShadcnFieldSwitch
 * Field + Switch — çok faktörlü kimlik doğrulama (saf React, shadcn kaynaklı).
 * Switch: kütüphanenin mevcut bileşeni (Heroui — saf React).
 * @id 658
 * @category Form Elemanları
 * @subcategory ShadcnField
 * @source shadcn
 */
import {
  ShadcnField,
  ShadcnFieldLabel,
} from "@/components/ui/shadcn-field"
import { Switch, SwitchContent, SwitchControl, SwitchThumb } from "@/components/ui/switch"

function ShadcnFieldSwitch() {
  return (
    <ShadcnField orientation="horizontal" className="w-fit">
      <ShadcnFieldLabel>Multi-factor authentication</ShadcnFieldLabel>
      <Switch>
        <SwitchContent>
          <SwitchControl>
            <SwitchThumb />
          </SwitchControl>
        </SwitchContent>
      </Switch>
    </ShadcnField>
  )
}

export { ShadcnFieldSwitch }
