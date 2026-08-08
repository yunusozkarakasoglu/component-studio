/**
 * MtTimeValueDateobject
 * Tarih nesnesi (saf React, Mantine kaynaklı).
 * @id 1762
 * @category Takvim
 * @subcategory MtTimeValue
 * @source mantine
 */
import { MtTimeValue } from "@/components/ui/mt-time-value"

function MtTimeValueDateobject() {
  return (
    <MtTimeValue value={new Date(2025, 0, 15, 16, 45)} />
  )
}

export { MtTimeValueDateobject }
