/**
 * MtMultiSelectControlled
 * Kontrollü durum (saf React, Mantine kaynaklı).
 * @id 1321
 * @category Combobox
 * @subcategory MtMultiSelect
 * @source mantine
 */
import { useState } from "react"
import { MtMultiSelect } from "@/components/ui/mt-multi-select"

function MtMultiSelectControlled() {
  const [value, setValue] = useState<string[]>(["React"])

  return (
    <div className="flex max-w-sm flex-col gap-2">
      <MtMultiSelect value={value} onChange={setValue} data={["React", "Vue", "Angular"]} label="Controlled" />
      <p className="text-xs text-muted-foreground">Selected: {value.join(", ") || "none"}</p>
    </div>
  )
}

export { MtMultiSelectControlled }
