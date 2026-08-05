/**
 * SwitchControlled
 * Kontrollü örnek — durum göstergesi (saf React).
 * @id 409
 * @category Seçim
 * @subcategory Switch
 */
import { useState } from "react"
import { Switch, SwitchContent, SwitchControl, SwitchThumb } from "@/components/ui/switch"

function SwitchControlled() {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <div className="flex flex-col gap-4">
      <Switch isSelected={isSelected} onChange={setIsSelected}>
        <SwitchContent>
          <SwitchControl>
            <SwitchThumb />
          </SwitchControl>
          Enable notifications
        </SwitchContent>
      </Switch>
      <p className="text-sm text-muted-foreground">Switch is {isSelected ? "on" : "off"}</p>
    </div>
  )
}

export { SwitchControlled }
