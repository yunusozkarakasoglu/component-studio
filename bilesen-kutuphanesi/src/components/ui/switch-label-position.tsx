/**
 * SwitchLabelPosition
 * Etiket konumu örneği: sonra/önce (saf React).
 * @id 410
 * @category Seçim
 * @subcategory Switch
 */
import { Switch, SwitchContent, SwitchControl, SwitchThumb } from "@/components/ui/switch"

function SwitchLabelPosition() {
  return (
    <div className="flex flex-col gap-4">
      <Switch>
        <SwitchContent>
          <SwitchControl>
            <SwitchThumb />
          </SwitchControl>
          Label after
        </SwitchContent>
      </Switch>
      <Switch>
        <SwitchContent>
          Label before
          <SwitchControl>
            <SwitchThumb />
          </SwitchControl>
        </SwitchContent>
      </Switch>
    </div>
  )
}

export { SwitchLabelPosition }
