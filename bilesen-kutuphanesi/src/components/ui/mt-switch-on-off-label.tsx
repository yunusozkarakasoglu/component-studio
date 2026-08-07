/**
 * MtSwitchOnOffLabel
 * Açık/kapalı etiketleri (saf React, Mantine kaynaklı).
 * @id 1240
 * @category Seçim
 * @subcategory MtSwitch
 * @source mantine
 */
import { MtSwitch } from "@/components/ui/mt-switch"

function MtSwitchOnOffLabel() {
  return (
    <div className="flex flex-col gap-3">
      <MtSwitch size="md" onLabel="ON" offLabel="OFF" defaultChecked />
      <MtSwitch size="lg" onLabel="Y" offLabel="N" />
    </div>
  )
}

export { MtSwitchOnOffLabel }
