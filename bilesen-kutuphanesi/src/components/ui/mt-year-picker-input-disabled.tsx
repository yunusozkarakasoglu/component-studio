/**
 * MtYearPickerInputDisabled
 * Devre dışı (saf React, Mantine kaynaklı).
 * @id 1719
 * @category Takvim
 * @subcategory MtYearPickerInput
 * @source mantine
 */
import { MtYearPickerInput } from "@/components/ui/mt-year-picker-input"

function MtYearPickerInputDisabled() {
  return (
    <MtYearPickerInput label="Yıl" disabled value={new Date(2024, 0, 1)} />
  )
}

export { MtYearPickerInputDisabled }
