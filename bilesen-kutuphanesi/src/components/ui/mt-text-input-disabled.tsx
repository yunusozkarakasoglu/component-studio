/**
 * MtTextInputDisabled
 * Devre dışı giriş (saf React, Mantine kaynaklı).
 * @id 1125
 * @category Form Elemanları
 * @subcategory MtTextInput
 * @source mantine
 */
import { MtTextInput } from "@/components/ui/mt-text-input"

function MtTextInputDisabled() {
  return <MtTextInput disabled label="Disabled input" placeholder="Disabled input" className="max-w-sm" />
}

export { MtTextInputDisabled }
