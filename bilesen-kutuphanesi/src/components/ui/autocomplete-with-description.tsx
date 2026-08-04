/**
 * AutocompleteWithDescription
 * With Description örneği (saf React).
 * @id 145
 * @category Form Elemanları
 */
import { useState } from "react"
import { Autocomplete } from "@/components/ui/autocomplete"
import { Description } from "@/components/ui/description"
import { Label } from "@/components/ui/label"

const states = [
  { id: "florida", name: "Florida" }, { id: "delaware", name: "Delaware" },
  { id: "california", name: "California" }, { id: "texas", name: "Texas" },
  { id: "new-york", name: "New York" }, { id: "washington", name: "Washington" },
]

function AutocompleteWithDescription() {
  const [selected, setSelected] = useState<string | null>(null)
  return (
    <div className="w-[256px]">
      <Label className="mb-1.5">State</Label>
      <Autocomplete items={states} placeholder="Select one" selectionMode="single" value={selected} onChange={(v) => setSelected(v as string | null)} />
      <Description>Select your state of residence</Description>
    </div>
  )
}

export { AutocompleteWithDescription }
