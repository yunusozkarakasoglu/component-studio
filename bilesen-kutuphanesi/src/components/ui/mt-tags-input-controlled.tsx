/**
 * MtTagsInputControlled
 * Kontrollü durum (saf React, Mantine kaynaklı).
 * @id 1333
 * @category Combobox
 * @subcategory MtTagsInput
 * @source mantine
 */
import { useState } from "react"
import { MtTagsInput } from "@/components/ui/mt-tags-input"

function MtTagsInputControlled() {
  const [tags, setTags] = useState<string[]>([])

  return (
    <div className="flex max-w-sm flex-col gap-2">
      <MtTagsInput value={tags} onChange={setTags} data={["a", "b", "c"]} label="Controlled tags" />
      <p className="text-xs text-muted-foreground">{tags.length} tag(s)</p>
    </div>
  )
}

export { MtTagsInputControlled }
