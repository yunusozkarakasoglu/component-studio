/**
 * MtJsonInputStylesApi
 * Styles API (saf React, Mantine kaynaklı).
 * @id 1170
 * @category Form Elemanları
 * @subcategory MtJsonInput
 * @source mantine
 */
import { MtJsonInput } from "@/components/ui/mt-json-input"

function MtJsonInputStylesApi() {
  return <MtJsonInput label="Monospace" defaultValue='{"key":42}' className="max-w-sm" />
}

export { MtJsonInputStylesApi }
