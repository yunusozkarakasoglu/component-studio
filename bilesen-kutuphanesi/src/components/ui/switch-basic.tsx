/**
 * SwitchBasic
 * Temel örnek (saf React).
 * @id 402
 * @category Seçim
 * @subcategory Switch
 */
import { Switch, SwitchContent, SwitchControl, SwitchThumb } from "@/components/ui/switch"

function SwitchBasic() {
  return (
    <Switch>
      <SwitchContent>
        <SwitchControl>
          <SwitchThumb />
        </SwitchControl>
        Enable notifications
      </SwitchContent>
    </Switch>
  )
}

export { SwitchBasic }
