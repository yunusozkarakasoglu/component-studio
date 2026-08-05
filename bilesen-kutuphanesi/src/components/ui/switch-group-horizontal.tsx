/**
 * SwitchGroupHorizontal
 * Yatay grup örneği (saf React).
 * @id 412
 * @category Seçim
 * @subcategory Switch
 */
import { Switch, SwitchContent, SwitchControl, SwitchGroup, SwitchThumb } from "@/components/ui/switch"

function SwitchGroupHorizontal() {
  return (
    <SwitchGroup className="overflow-x-auto" orientation="horizontal">
      <Switch name="notifications">
        <SwitchContent>
          <SwitchControl>
            <SwitchThumb />
          </SwitchControl>
          Notifications
        </SwitchContent>
      </Switch>
      <Switch name="marketing">
        <SwitchContent>
          <SwitchControl>
            <SwitchThumb />
          </SwitchControl>
          Marketing
        </SwitchContent>
      </Switch>
      <Switch name="social">
        <SwitchContent>
          <SwitchControl>
            <SwitchThumb />
          </SwitchControl>
          Social
        </SwitchContent>
      </Switch>
    </SwitchGroup>
  )
}

export { SwitchGroupHorizontal }
