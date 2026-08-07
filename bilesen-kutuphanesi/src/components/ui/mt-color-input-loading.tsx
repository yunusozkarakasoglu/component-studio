/**
 * MtColorInputLoading
 * Yükleniyor durumu (saf React, Mantine kaynaklı).
 * @id 1293
 * @category Seçim
 * @subcategory MtColorInput
 * @source mantine
 */
import { MtColorInput } from "@/components/ui/mt-color-input"

function MtColorInputLoading() {
  return <MtColorInput label="Loading" loading disabled className="max-w-sm" />
}

export { MtColorInputLoading }
