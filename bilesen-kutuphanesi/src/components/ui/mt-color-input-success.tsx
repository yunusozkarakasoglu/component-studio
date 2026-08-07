/**
 * MtColorInputSuccess
 * Başarı durumu (saf React, Mantine kaynaklı).
 * @id 1295
 * @category Seçim
 * @subcategory MtColorInput
 * @source mantine
 */
import { MtColorInput } from "@/components/ui/mt-color-input"

function MtColorInputSuccess() {
  return <MtColorInput defaultValue="#40c057" success="Valid color" className="max-w-sm" />
}

export { MtColorInputSuccess }
