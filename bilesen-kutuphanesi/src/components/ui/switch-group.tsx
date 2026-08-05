/**
 * SwitchGroup
 * Grup örneği — dikey (saf React).
 * @id 411
 * @category Seçim
 * @subcategory Switch
 */
import { Switch, SwitchContent, SwitchControl, SwitchGroup, SwitchThumb } from "@/components/ui/switch"

function SwitchGroupVertical() {
  return (
    <SwitchGroup>
      <Switch name="notifications">
        <SwitchContent>
          <SwitchControl>
            <SwitchThumb />
          </SwitchControl>
          Allow Notifications
        </SwitchContent>
      </Switch>
      <Switch name="marketing">
        <SwitchContent>
          <SwitchControl>
            <SwitchThumb />
          </SwitchControl>
          Marketing emails
        </SwitchContent>
      </Switch>
      <Switch name="social">
        <SwitchContent>
          <SwitchControl>
            <SwitchThumb />
          </SwitchControl>
          Social media updates
        </SwitchContent>
      </Switch>
    </SwitchGroup>
  )
}

export { SwitchGroupVertical }
