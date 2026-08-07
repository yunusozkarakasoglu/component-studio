/**
 * MtSwitchControlled
 * Kontrollü durum (saf React, Mantine kaynaklı).
 * @id 1242
 * @category Seçim
 * @subcategory MtSwitch
 * @source mantine
 */
import { useState } from "react"
import { MtSwitch } from "@/components/ui/mt-switch"

function MtSwitchControlled() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex flex-col gap-2">
      <MtSwitch label="Controlled switch" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
      <p className="text-xs text-muted-foreground">{checked ? "On" : "Off"}</p>
    </div>
  )
}

export { MtSwitchControlled }
