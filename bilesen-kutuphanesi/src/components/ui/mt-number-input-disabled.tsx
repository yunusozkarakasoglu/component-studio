/**
 * MtNumberInputDisabled
 * Devre dışı giriş (saf React, Mantine kaynaklı).
 * @id 1152
 * @category Form Elemanları
 * @subcategory MtNumberInput
 * @source mantine
 */
import { MtNumberInput } from "@/components/ui/mt-number-input"

function MtNumberInputDisabled() {
  return <MtNumberInput disabled label="Disabled input" placeholder="Disabled input" className="max-w-sm" />
}

export { MtNumberInputDisabled }
