/**
 * AutocompleteMultipleSelect
 * Multiple Select örneği (saf React).
 * @id 150
 * @category Form Elemanları
 */
import { useState } from "react"
import { Autocomplete } from "@/components/ui/autocomplete"
import { Label } from "@/components/ui/label"

const states = [
  { id: "california", name: "California" }, { id: "texas", name: "Texas" },
  { id: "florida", name: "Florida" }, { id: "new-york", name: "New York" },
  { id: "illinois", name: "Illinois" }, { id: "pennsylvania", name: "Pennsylvania" },
]

function AutocompleteMultipleSelect() {
  const [selected, setSelected] = useState<string[]>([])
  return (
    <div className="w-[256px]">
      <Label className="mb-1.5">States</Label>
      <Autocomplete items={states} placeholder="Select states" selectionMode="multiple" value={selected} onChange={(v) => setSelected((v ?? []) as string[])} />
    </div>
  )
}

export { AutocompleteMultipleSelect }
