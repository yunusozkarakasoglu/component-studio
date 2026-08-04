/**
 * AutocompleteControlledMultiple
 * Controlled Multiple örneği (saf React).
 * @id 152
 * @category Form Elemanları
 */
import { useState } from "react"
import { Autocomplete } from "@/components/ui/autocomplete"
import { Label } from "@/components/ui/label"

const items = [
  { id: "california", name: "California" }, { id: "texas", name: "Texas" },
  { id: "florida", name: "Florida" }, { id: "new-york", name: "New York" },
]

function AutocompleteControlledMultiple() {
  const [selected, setSelected] = useState<string[]>(["california", "texas"])
  return (
    <div className="w-[256px] space-y-2">
      <Label className="mb-1.5">States</Label>
      <Autocomplete items={items} placeholder="Select states" selectionMode="multiple" value={selected} onChange={(v) => setSelected((v ?? []) as string[])} />
      <p className="text-sm text-muted-foreground">Selected: {selected.length ? selected.join(", ") : "None"}</p>
    </div>
  )
}

export { AutocompleteControlledMultiple }
