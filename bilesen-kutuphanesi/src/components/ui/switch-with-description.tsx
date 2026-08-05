/**
 * SwitchWithDescription
 * Açıklamalı örnek (saf React).
 * @id 407
 * @category Seçim
 * @subcategory Switch
 */
import { Description } from "@/components/ui/description"
import { Switch, SwitchContent, SwitchControl, SwitchThumb } from "@/components/ui/switch"

function SwitchWithDescription() {
  return (
    <div className="max-w-sm">
      <Switch>
        <SwitchContent>
          <SwitchControl>
            <SwitchThumb />
          </SwitchControl>
          Public profile
        </SwitchContent>
        <Description>Allow others to see your profile information</Description>
      </Switch>
    </div>
  )
}

export { SwitchWithDescription }
