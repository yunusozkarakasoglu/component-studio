/**
 * AutocompleteDefault
 * Usage örneği — çoklu seçim (saf React).
 * @id 142
 * @category Form Elemanları
 */
import { useState } from "react"
import { Autocomplete } from "@/components/ui/autocomplete"
import { Label } from "@/components/ui/label"

const states = [
  { id: "florida", name: "Florida" }, { id: "delaware", name: "Delaware" },
  { id: "california", name: "California" }, { id: "texas", name: "Texas" },
  { id: "new-york", name: "New York" }, { id: "washington", name: "Washington" },
]

function AutocompleteDefault() {
  const [selected, setSelected] = useState<string[]>([])
  return (
    <div className="w-[256px]">
      <Label className="mb-1.5">States to Visit</Label>
      <Autocomplete items={states} placeholder="Select states" selectionMode="multiple" value={selected} onChange={(v) => setSelected((v ?? []) as string[])} />
    </div>
  )
}

export { AutocompleteDefault }
