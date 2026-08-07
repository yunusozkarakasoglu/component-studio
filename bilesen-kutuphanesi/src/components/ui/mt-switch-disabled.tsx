/**
 * MtSwitchDisabled
 * Devre dışı durum (saf React, Mantine kaynaklı).
 * @id 1238
 * @category Seçim
 * @subcategory MtSwitch
 * @source mantine
 */
import { MtSwitch } from "@/components/ui/mt-switch"

function MtSwitchDisabled() {
  return (
    <div className="flex flex-col gap-3">
      <MtSwitch label="Disabled unchecked" disabled />
      <MtSwitch label="Disabled checked" defaultChecked disabled />
    </div>
  )
}

export { MtSwitchDisabled }
