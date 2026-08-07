/**
 * MtMaskInputDisabled
 * Devre dışı giriş (saf React, Mantine kaynaklı).
 * @id 1172
 * @category Form Elemanları
 * @subcategory MtMaskInput
 * @source mantine
 */
import { MtMaskInput } from "@/components/ui/mt-mask-input"

function MtMaskInputDisabled() {
  return <MtMaskInput label="Disabled" placeholder="Disabled input" disabled className="max-w-sm" />
}

export { MtMaskInputDisabled }
