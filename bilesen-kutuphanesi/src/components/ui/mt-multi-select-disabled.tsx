/**
 * MtMultiSelectDisabled
 * Devre dışı çoklu seçim (saf React, Mantine kaynaklı).
 * @id 1318
 * @category Combobox
 * @subcategory MtMultiSelect
 * @source mantine
 */
import { MtMultiSelect } from "@/components/ui/mt-multi-select"

function MtMultiSelectDisabled() {
  return <MtMultiSelect data={["React", "Vue"]} label="Disabled" disabled defaultValue={["React"]} className="max-w-sm" />
}

export { MtMultiSelectDisabled }
