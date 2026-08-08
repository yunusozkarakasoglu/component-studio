/**
 * MtDateTimePickerDisabled
 * Devre dışı (saf React, Mantine kaynaklı).
 * @id 1665
 * @category Takvim
 * @subcategory MtDateTimePicker
 * @source mantine
 */
import { MtDateTimePicker } from "@/components/ui/mt-date-time-picker"

function MtDateTimePickerDisabled() {
  return (
    <MtDateTimePicker label="Tarih ve saat" disabled value={new Date(2025, 2, 20, 14, 30)} />
  )
}

export { MtDateTimePickerDisabled }
