/**
 * SwitchRenderProps
 * Children render prop örneği (saf React).
 * @id 414
 * @category Seçim
 * @subcategory Switch
 */
import { Switch, SwitchContent, SwitchControl, SwitchThumb } from "@/components/ui/switch"

function SwitchRenderProps() {
  return (
    <Switch>
      {({ isSelected }) => (
        <SwitchContent>
          <SwitchControl>
            <SwitchThumb />
          </SwitchControl>
          {isSelected ? "Enabled" : "Disabled"}
        </SwitchContent>
      )}
    </Switch>
  )
}

export { SwitchRenderProps }
