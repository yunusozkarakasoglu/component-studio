/**
 * SwitchSizes
 * Boyut örneği: sm/md/lg (saf React).
 * @id 403
 * @category Seçim
 * @subcategory Switch
 */
import { Switch, SwitchContent, SwitchControl, SwitchThumb } from "@/components/ui/switch"

function SwitchSizes() {
  return (
    <div className="flex gap-6">
      <Switch size="sm">
        <SwitchContent>
          <SwitchControl>
            <SwitchThumb />
          </SwitchControl>
          Small
        </SwitchContent>
      </Switch>
      <Switch size="md">
        <SwitchContent>
          <SwitchControl>
            <SwitchThumb />
          </SwitchControl>
          Medium
        </SwitchContent>
      </Switch>
      <Switch size="lg">
        <SwitchContent>
          <SwitchControl>
            <SwitchThumb />
          </SwitchControl>
          Large
        </SwitchContent>
      </Switch>
    </div>
  )
}

export { SwitchSizes }
