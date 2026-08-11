/**
 * MuiSwitchControlled
 * @id 2059
 * @category Seçim
 * @subcategory MuiSwitch
 * @source mui
 */
import { useState } from "react"
import { MuiSwitch } from "@/components/ui/mui-switch"

function MuiSwitchControlled() {
  const [on, setOn] = useState(false)
  return (
    <div className="flex items-center gap-3">
      <MuiSwitch checked={on} onChange={(e) => setOn(e.target.checked)} />
      <span className="text-sm text-gray-700">{on ? "Açık" : "Kapalı"}</span>
    </div>
  )
}

export { MuiSwitchControlled }
