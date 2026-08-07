/**
 * MtAutocompleteControlled
 * Kontrollü durum (saf React, Mantine kaynaklı).
 * @id 1327
 * @category Combobox
 * @subcategory MtAutocomplete
 * @source mantine
 */
import { useState } from "react"
import { MtAutocomplete } from "@/components/ui/mt-autocomplete"

function MtAutocompleteControlled() {
  const [value, setValue] = useState("")

  return (
    <div className="flex max-w-sm flex-col gap-2">
      <MtAutocomplete value={value} onChange={setValue} data={["React", "Vue", "Angular"]} label="Controlled" />
      <p className="text-xs text-muted-foreground">Value: {value || "(empty)"}</p>
    </div>
  )
}

export { MtAutocompleteControlled }
