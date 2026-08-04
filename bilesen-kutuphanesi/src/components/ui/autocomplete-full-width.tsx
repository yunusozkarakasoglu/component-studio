/**
 * AutocompleteFullWidth
 * Full Width örneği — tam genişlik + surface (saf React).
 * @id 144
 * @category Form Elemanları
 */
import { useState } from "react"
import { Autocomplete } from "@/components/ui/autocomplete"

const states = [
  { id: "florida", name: "Florida" }, { id: "delaware", name: "Delaware" },
  { id: "california", name: "California" }, { id: "texas", name: "Texas" },
  { id: "new-york", name: "New York" }, { id: "washington", name: "Washington" },
]

function AutocompleteFullWidth() {
  const [selected, setSelected] = useState<string | null>(null)
  return (
    <div className="w-[380px] space-y-4 rounded-3xl bg-muted/20 p-6">
      <Autocomplete fullWidth items={states} placeholder="Select one" selectionMode="single" variant="secondary" value={selected} onChange={(v) => setSelected(v as string | null)} />
    </div>
  )
}

export { AutocompleteFullWidth }
