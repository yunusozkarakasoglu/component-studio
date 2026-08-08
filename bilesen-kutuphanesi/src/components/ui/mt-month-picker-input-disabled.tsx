/**
 * MtMonthPickerInputDisabled
 * Devre dışı (saf React, Mantine kaynaklı).
 * @id 1693
 * @category Takvim
 * @subcategory MtMonthPickerInput
 * @source mantine
 */
import { MtMonthPickerInput } from "@/components/ui/mt-month-picker-input"

function MtMonthPickerInputDisabled() {
  return (
    <MtMonthPickerInput label="Ay" disabled value={new Date(2025, 5, 1)} />
  )
}

export { MtMonthPickerInputDisabled }
