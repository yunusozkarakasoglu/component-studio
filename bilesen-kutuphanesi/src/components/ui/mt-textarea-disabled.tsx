/**
 * MtTextareaDisabled
 * Devre dışı alan (saf React, Mantine kaynaklı).
 * @id 1133
 * @category Form Elemanları
 * @subcategory MtTextarea
 * @source mantine
 */
import { MtTextarea } from "@/components/ui/mt-textarea"

function MtTextareaDisabled() {
  return <MtTextarea disabled label="Disabled textarea" placeholder="Disabled textarea" className="max-w-sm" />
}

export { MtTextareaDisabled }
