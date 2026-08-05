/**
 * SwitchDisabled
 * Devre dışı örnek (saf React).
 * @id 405
 * @category Seçim
 * @subcategory Switch
 */
import { Switch, SwitchContent, SwitchControl, SwitchThumb } from "@/components/ui/switch"

function SwitchDisabled() {
  return (
    <Switch isDisabled>
      <SwitchContent>
        <SwitchControl>
          <SwitchThumb />
        </SwitchControl>
        Enable notifications
      </SwitchContent>
    </Switch>
  )
}

export { SwitchDisabled }
