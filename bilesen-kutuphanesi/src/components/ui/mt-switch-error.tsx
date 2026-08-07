/**
 * MtSwitchError
 * Hata durumu (saf React, Mantine kaynaklı).
 * @id 1239
 * @category Seçim
 * @subcategory MtSwitch
 * @source mantine
 */
import { MtSwitch } from "@/components/ui/mt-switch"

function MtSwitchError() {
  return <MtSwitch label="Accept terms" error="You must enable this setting" />
}

export { MtSwitchError }
