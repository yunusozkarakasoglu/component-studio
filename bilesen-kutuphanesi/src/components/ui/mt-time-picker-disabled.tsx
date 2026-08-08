/**
 * MtTimePickerDisabled
 * Devre dışı (saf React, Mantine kaynaklı).
 * @id 1731
 * @category Takvim
 * @subcategory MtTimePicker
 * @source mantine
 */
import { MtTimePicker } from "@/components/ui/mt-time-picker"

function MtTimePickerDisabled() {
  return (
    <MtTimePicker label="Saat" disabled value="10:00" />
  )
}

export { MtTimePickerDisabled }
