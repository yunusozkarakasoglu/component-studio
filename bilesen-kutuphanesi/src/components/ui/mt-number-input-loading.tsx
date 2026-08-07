/**
 * MtNumberInputLoading
 * Yükleniyor girişi (saf React, Mantine kaynaklı).
 * @id 1154
 * @category Form Elemanları
 * @subcategory MtNumberInput
 * @source mantine
 */
import { MtNumberInput } from "@/components/ui/mt-number-input"

function MtNumberInputLoading() {
  return <MtNumberInput placeholder="Loading number" loading disabled className="max-w-sm" />
}

export { MtNumberInputLoading }
