/**
 * MtJsonInputSuccess
 * Başarı durumu (saf React, Mantine kaynaklı).
 * @id 1168
 * @category Form Elemanları
 * @subcategory MtJsonInput
 * @source mantine
 */
import { MtJsonInput } from "@/components/ui/mt-json-input"

function MtJsonInputSuccess() {
  return <MtJsonInput label="Valid JSON" defaultValue='{"key":"value"}' success="Valid JSON" className="max-w-sm" />
}

export { MtJsonInputSuccess }
