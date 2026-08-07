/**
 * MtTagsInputSearchable
 * Önerilerle etiket girişi (saf React, Mantine kaynaklı).
 * @id 1330
 * @category Combobox
 * @subcategory MtTagsInput
 * @source mantine
 */
import { MtTagsInput } from "@/components/ui/mt-tags-input"

function MtTagsInputSearchable() {
  return (
    <MtTagsInput
      data={["Apple", "Banana", "Cherry", "Date", "Fig", "Grape"]}
      label="Fruits"
      placeholder="Type to add or pick a suggestion"
      className="max-w-sm"
    />
  )
}

export { MtTagsInputSearchable }
