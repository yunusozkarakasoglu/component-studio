/**
 * MtSelectClearable
 * Temizlenebilir seçim (saf React, Mantine kaynaklı).
 * @id 1307
 * @category Combobox
 * @subcategory MtSelect
 * @source mantine
 */
import { MtSelect } from "@/components/ui/mt-select"

function MtSelectClearable() {
  return <MtSelect data={["React", "Vue"]} label="Clearable" clearable defaultValue="React" className="max-w-sm" />
}

export { MtSelectClearable }
