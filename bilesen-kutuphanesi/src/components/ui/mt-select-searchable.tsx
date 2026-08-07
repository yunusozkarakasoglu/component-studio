/**
 * MtSelectSearchable
 * Aranabilir seçim (saf React, Mantine kaynaklı).
 * @id 1306
 * @category Combobox
 * @subcategory MtSelect
 * @source mantine
 */
import { MtSelect } from "@/components/ui/mt-select"

function MtSelectSearchable() {
  return (
    <MtSelect
      searchable
      data={["React", "Vue", "Angular", "Svelte", "Solid", "Qwik", "Ember", "Preact"]}
      label="Searchable select"
      className="max-w-sm"
    />
  )
}

export { MtSelectSearchable }
