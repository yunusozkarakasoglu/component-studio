/**
 * MtSelectDisabled
 * Devre dışı seçim (saf React, Mantine kaynaklı).
 * @id 1308
 * @category Combobox
 * @subcategory MtSelect
 * @source mantine
 */
import { MtSelect } from "@/components/ui/mt-select"

function MtSelectDisabled() {
  return <MtSelect data={["React", "Vue"]} label="Disabled" disabled defaultValue="React" className="max-w-sm" />
}

export { MtSelectDisabled }
