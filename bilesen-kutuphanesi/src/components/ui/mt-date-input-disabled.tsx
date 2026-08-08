/**
 * MtDateInputDisabled
 * Devre dışı (saf React, Mantine kaynaklı).
 * @id 1614
 * @category Takvim
 * @subcategory MtDateInput
 * @source mantine
 */
import { MtDateInput } from "@/components/ui/mt-date-input"

function MtDateInputDisabled() {
  return (
    <MtDateInput label="Tarih" disabled value={new Date(2025, 0, 15)} />
  )
}

export { MtDateInputDisabled }
