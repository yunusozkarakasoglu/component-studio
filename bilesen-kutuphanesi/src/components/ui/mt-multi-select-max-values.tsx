/**
 * MtMultiSelectMaxValues
 * Maksimum seçim (saf React, Mantine kaynaklı).
 * @id 1322
 * @category Combobox
 * @subcategory MtMultiSelect
 * @source mantine
 */
import { MtMultiSelect } from "@/components/ui/mt-multi-select"

function MtMultiSelectMaxValues() {
  return <MtMultiSelect data={["React", "Vue", "Angular", "Svelte"]} label="Max 2 values" className="max-w-sm" />
}

export { MtMultiSelectMaxValues }
