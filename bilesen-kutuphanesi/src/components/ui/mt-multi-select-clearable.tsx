/**
 * MtMultiSelectClearable
 * Temizlenebilir çoklu seçim (saf React, Mantine kaynaklı).
 * @id 1317
 * @category Combobox
 * @subcategory MtMultiSelect
 * @source mantine
 */
import { MtMultiSelect } from "@/components/ui/mt-multi-select"

function MtMultiSelectClearable() {
  return <MtMultiSelect data={["React", "Vue"]} label="Clearable" clearable defaultValue={["React", "Vue"]} className="max-w-sm" />
}

export { MtMultiSelectClearable }
