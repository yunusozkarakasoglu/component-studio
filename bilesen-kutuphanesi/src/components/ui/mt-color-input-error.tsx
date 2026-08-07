/**
 * MtColorInputError
 * Hata durumu (saf React, Mantine kaynaklı).
 * @id 1292
 * @category Seçim
 * @subcategory MtColorInput
 * @source mantine
 */
import { MtColorInput } from "@/components/ui/mt-color-input"

function MtColorInputError() {
  return <MtColorInput label="Brand color" error="Invalid color" className="max-w-sm" />
}

export { MtColorInputError }
