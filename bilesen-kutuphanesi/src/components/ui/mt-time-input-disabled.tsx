/**
 * MtTimeInputDisabled
 * Devre dışı (saf React, Mantine kaynaklı).
 * @id 1703
 * @category Takvim
 * @subcategory MtTimeInput
 * @source mantine
 */
import { MtTimeInput } from "@/components/ui/mt-time-input"

function MtTimeInputDisabled() {
  return (
    <MtTimeInput label="Saat" disabled value="14:30" />
  )
}

export { MtTimeInputDisabled }
