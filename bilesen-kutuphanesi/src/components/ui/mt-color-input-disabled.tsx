/**
 * MtColorInputDisabled
 * Devre dışı durum (saf React, Mantine kaynaklı).
 * @id 1291
 * @category Seçim
 * @subcategory MtColorInput
 * @source mantine
 */
import { MtColorInput } from "@/components/ui/mt-color-input"

function MtColorInputDisabled() {
  return <MtColorInput defaultValue="#4263eb" disabled className="max-w-sm" />
}

export { MtColorInputDisabled }
