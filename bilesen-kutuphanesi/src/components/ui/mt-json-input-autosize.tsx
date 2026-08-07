/**
 * MtJsonInputAutosize
 * Otomatik boyut (saf React, Mantine kaynaklı).
 * @id 1169
 * @category Form Elemanları
 * @subcategory MtJsonInput
 * @source mantine
 */
import { MtJsonInput } from "@/components/ui/mt-json-input"

function MtJsonInputAutosize() {
  return <MtJsonInput label="Autosize" autosize minRows={2} placeholder="{}" className="max-w-sm" />
}

export { MtJsonInputAutosize }
