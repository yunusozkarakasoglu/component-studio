/**
 * MtJsonInputUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1165
 * @category Form Elemanları
 * @subcategory MtJsonInput
 * @source mantine
 */
import { MtJsonInput } from "@/components/ui/mt-json-input"

function MtJsonInputUsage() {
  return <MtJsonInput label="Your configuration" placeholder="{'key': 'value'}" className="max-w-sm" />
}

export { MtJsonInputUsage }
