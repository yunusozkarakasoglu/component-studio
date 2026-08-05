/**
 * SwitchRenderFunction
 * render prop örneği — kök DOM override (saf React).
 * @id 415
 * @category Seçim
 * @subcategory Switch
 */
import { Switch, SwitchContent, SwitchControl, SwitchThumb } from "@/components/ui/switch"

function SwitchRenderFunction() {
  return (
    <Switch render={(props) => <div {...props} data-custom="foo" />}>
      <SwitchContent>
        <SwitchControl>
          <SwitchThumb />
        </SwitchControl>
        Enable notifications
      </SwitchContent>
    </Switch>
  )
}

export { SwitchRenderFunction }
