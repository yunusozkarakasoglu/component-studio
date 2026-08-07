/**
 * MtTagsInputUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1329
 * @category Combobox
 * @subcategory MtTagsInput
 * @source mantine
 */
import { MtTagsInput } from "@/components/ui/mt-tags-input"

function MtTagsInputUsage() {
  return <MtTagsInput data={["React", "Vue", "Angular"]} label="Technologies" defaultValue={["React"]} className="max-w-sm" />
}

export { MtTagsInputUsage }
