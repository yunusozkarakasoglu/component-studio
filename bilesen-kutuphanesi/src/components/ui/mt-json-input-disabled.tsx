/**
 * MtJsonInputDisabled
 * Devre dışı giriş (saf React, Mantine kaynaklı).
 * @id 1166
 * @category Form Elemanları
 * @subcategory MtJsonInput
 * @source mantine
 */
import { MtJsonInput } from "@/components/ui/mt-json-input"

function MtJsonInputDisabled() {
  return <MtJsonInput label="Read only" defaultValue='{"a":1}' disabled className="max-w-sm" />
}

export { MtJsonInputDisabled }
