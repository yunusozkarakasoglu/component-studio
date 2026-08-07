/**
 * MtJsonInputLoading
 * Yükleniyor girişi (saf React, Mantine kaynaklı).
 * @id 1167
 * @category Form Elemanları
 * @subcategory MtJsonInput
 * @source mantine
 */
import { MtJsonInput } from "@/components/ui/mt-json-input"

function MtJsonInputLoading() {
  return <MtJsonInput label="Loading" loading disabled className="max-w-sm" />
}

export { MtJsonInputLoading }
