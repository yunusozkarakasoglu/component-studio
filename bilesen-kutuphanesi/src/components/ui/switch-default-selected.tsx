/**
 * SwitchDefaultSelected
 * Varsayılan seçili örnek (saf React).
 * @id 408
 * @category Seçim
 * @subcategory Switch
 */
import { Switch, SwitchContent, SwitchControl, SwitchThumb } from "@/components/ui/switch"

function SwitchDefaultSelected() {
  return (
    <Switch defaultSelected>
      <SwitchContent>
        <SwitchControl>
          <SwitchThumb />
        </SwitchControl>
        Enable notifications
      </SwitchContent>
    </Switch>
  )
}

export { SwitchDefaultSelected }
