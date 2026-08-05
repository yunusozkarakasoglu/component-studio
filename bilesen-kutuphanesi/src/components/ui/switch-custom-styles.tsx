/**
 * SwitchCustomStyles
 * Özelleştirilmiş örnek — otomatik kaydetme (saf React).
 * @id 416
 * @category Seçim
 * @subcategory Switch
 */
import { Description } from "@/components/ui/description"
import { Label } from "@/components/ui/label"
import { Switch, SwitchContent, SwitchControl, SwitchThumb } from "@/components/ui/switch"

function SwitchCustomStyles() {
  return (
    <Switch id="autosave">
      <SwitchContent>
        <SwitchControl className="data-[selected=true]:bg-emerald-600">
          <SwitchThumb />
        </SwitchControl>
        <div className="flex flex-col gap-0.5">
          <Label htmlFor="autosave">Auto-save drafts</Label>
          <Description>Changes are saved as you type.</Description>
        </div>
      </SwitchContent>
    </Switch>
  )
}

export { SwitchCustomStyles }
