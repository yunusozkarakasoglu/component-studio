/**
 * AutocompleteControlled
 * Controlled örneği (saf React).
 * @id 151
 * @category Form Elemanları
 */
import { useState } from "react"
import { Autocomplete } from "@/components/ui/autocomplete"
import { Label } from "@/components/ui/label"

const states = [
  { id: "california", name: "California" }, { id: "texas", name: "Texas" },
  { id: "florida", name: "Florida" }, { id: "new-york", name: "New York" },
]

function AutocompleteControlled() {
  const [state, setState] = useState<string | null>("california")
  const selectedState = states.find((s) => s.id === state)
  return (
    <div className="w-[256px] space-y-2">
      <Label className="mb-1.5">State (controlled)</Label>
      <Autocomplete items={states} placeholder="Select a state" selectionMode="single" value={state} onChange={(v) => setState(v as string | null)} />
      <p className="text-sm text-muted-foreground">Selected: {selectedState?.name || "None"}</p>
    </div>
  )
}

export { AutocompleteControlled }
