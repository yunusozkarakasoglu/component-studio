/**
 * SwitchWithoutLabel
 * Etiketsiz anahtar örneği (saf React).
 * @id 406
 * @category Seçim
 * @subcategory Switch
 */
import { Switch, SwitchContent, SwitchControl, SwitchThumb } from "@/components/ui/switch"

function SwitchWithoutLabel() {
  return (
    <Switch aria-label="Enable notifications">
      <SwitchContent>
        <SwitchControl>
          <SwitchThumb />
        </SwitchControl>
      </SwitchContent>
    </Switch>
  )
}

export { SwitchWithoutLabel }
