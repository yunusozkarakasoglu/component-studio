/**
 * MtMultiSelectUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1315
 * @category Combobox
 * @subcategory MtMultiSelect
 * @source mantine
 */
import { MtMultiSelect } from "@/components/ui/mt-multi-select"

function MtMultiSelectUsage() {
  return <MtMultiSelect data={["React", "Vue", "Angular", "Svelte"]} label="Select frameworks" defaultValue={["React"]} className="max-w-sm" />
}

export { MtMultiSelectUsage }
