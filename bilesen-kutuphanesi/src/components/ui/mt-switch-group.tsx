/**
 * MtSwitchGroup
 * Anahtar grubu (saf React, Mantine kaynaklı).
 * @id 1243
 * @category Seçim
 * @subcategory MtSwitch
 * @source mantine
 */
import { MtSwitch } from "@/components/ui/mt-switch"

function MtSwitchGroup() {
  return (
    <div className="flex flex-col gap-3">
      <MtSwitch label="Email notifications" defaultChecked />
      <MtSwitch label="Push notifications" defaultChecked />
      <MtSwitch label="SMS notifications" />
    </div>
  )
}

export { MtSwitchGroup }
