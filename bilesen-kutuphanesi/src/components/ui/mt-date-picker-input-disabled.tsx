/**
 * MtDatePickerInputDisabled
 * Devre dışı (saf React, Mantine kaynaklı).
 * @id 1644
 * @category Takvim
 * @subcategory MtDatePickerInput
 * @source mantine
 */
import { MtDatePickerInput } from "@/components/ui/mt-date-picker-input"

function MtDatePickerInputDisabled() {
  return (
    <MtDatePickerInput label="Tarih" disabled value={new Date(2025, 3, 10)} />
  )
}

export { MtDatePickerInputDisabled }
