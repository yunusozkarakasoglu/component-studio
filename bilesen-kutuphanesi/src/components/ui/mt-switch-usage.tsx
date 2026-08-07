/**
 * MtSwitchUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1236
 * @category Seçim
 * @subcategory MtSwitch
 * @source mantine
 */
import { MtSwitch } from "@/components/ui/mt-switch"

function MtSwitchUsage() {
  return (
    <div className="flex flex-col gap-3">
      <MtSwitch label="Enable notifications" defaultChecked />
      <MtSwitch label="Receive emails" />
    </div>
  )
}

export { MtSwitchUsage }
