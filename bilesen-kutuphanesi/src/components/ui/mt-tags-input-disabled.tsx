/**
 * MtTagsInputDisabled
 * Devre dışı durum (saf React, Mantine kaynaklı).
 * @id 1331
 * @category Combobox
 * @subcategory MtTagsInput
 * @source mantine
 */
import { MtTagsInput } from "@/components/ui/mt-tags-input"

function MtTagsInputDisabled() {
  return <MtTagsInput data={["React"]} label="Disabled" disabled defaultValue={["React", "Vue"]} className="max-w-sm" />
}

export { MtTagsInputDisabled }
