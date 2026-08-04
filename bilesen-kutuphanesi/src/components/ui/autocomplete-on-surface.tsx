/**
 * AutocompleteOnSurface
 * In Surface örneği — surface üzerinde secondary varyant (saf React).
 * @id 155
 * @category Form Elemanları
 */
import { useState } from "react"
import { Autocomplete } from "@/components/ui/autocomplete"
import { Label } from "@/components/ui/label"

const states = [
  { id: "florida", name: "Florida" }, { id: "delaware", name: "Delaware" },
  { id: "california", name: "California" }, { id: "texas", name: "Texas" },
]

function AutocompleteOnSurface() {
  const [selected, setSelected] = useState<string | null>(null)
  return (
    <div className="w-[320px] rounded-3xl bg-muted/20 p-6">
      <Label className="mb-1.5">State</Label>
      <Autocomplete fullWidth items={states} placeholder="Select one" selectionMode="single" variant="secondary" value={selected} onChange={(v) => setSelected(v as string | null)} />
    </div>
  )
}

export { AutocompleteOnSurface }
