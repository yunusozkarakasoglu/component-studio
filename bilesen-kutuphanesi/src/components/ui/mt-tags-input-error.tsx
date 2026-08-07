/**
 * MtTagsInputError
 * Hata durumu (saf React, Mantine kaynaklı).
 * @id 1332
 * @category Combobox
 * @subcategory MtTagsInput
 * @source mantine
 */
import { MtTagsInput } from "@/components/ui/mt-tags-input"

function MtTagsInputError() {
  return <MtTagsInput data={["React"]} label="Tags" error="Invalid tag" className="max-w-sm" />
}

export { MtTagsInputError }
