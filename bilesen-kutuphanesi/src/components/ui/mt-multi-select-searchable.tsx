/**
 * MtMultiSelectSearchable
 * Aranabilir çoklu seçim (saf React, Mantine kaynaklı).
 * @id 1316
 * @category Combobox
 * @subcategory MtMultiSelect
 * @source mantine
 */
import { MtMultiSelect } from "@/components/ui/mt-multi-select"

function MtMultiSelectSearchable() {
  return (
    <MtMultiSelect
      searchable
      data={["React", "Vue", "Angular", "Svelte", "Solid", "Qwik", "Ember", "Preact"]}
      label="Searchable multiselect"
      className="max-w-sm"
    />
  )
}

export { MtMultiSelectSearchable }
