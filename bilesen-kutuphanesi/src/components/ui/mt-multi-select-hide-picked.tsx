/**
 * MtMultiSelectHidePicked
 * Seçilenleri gizle (saf React, Mantine kaynaklı).
 * @id 1319
 * @category Combobox
 * @subcategory MtMultiSelect
 * @source mantine
 */
import { MtMultiSelect } from "@/components/ui/mt-multi-select"

function MtMultiSelectHidePicked() {
  return (
    <MtMultiSelect
      searchable
      hidePickedOptions
      data={["React", "Vue", "Angular", "Svelte"]}
      label="Hide picked options"
      defaultValue={["React"]}
      className="max-w-sm"
    />
  )
}

export { MtMultiSelectHidePicked }
