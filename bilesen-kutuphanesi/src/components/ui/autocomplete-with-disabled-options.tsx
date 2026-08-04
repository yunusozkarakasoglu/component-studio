/**
 * AutocompleteWithDisabledOptions
 * HeroUI With Disabled Options örneği (saf React).
 * @id 148
 * @category Form Elemanları
 */
import { useState } from "react"
import { Autocomplete } from "@/components/ui/autocomplete"
import { Label } from "@/components/ui/label"

const animals = [
  { id: "dog", name: "Dog" }, { id: "cat", name: "Cat" }, { id: "bird", name: "Bird" },
  { id: "kangaroo", name: "Kangaroo" }, { id: "elephant", name: "Elephant" }, { id: "tiger", name: "Tiger" },
]

function AutocompleteWithDisabledOptions() {
  const [selected, setSelected] = useState<string | null>(null)
  return (
    <div className="w-[256px]">
      <Label className="mb-1.5">Animal</Label>
      <Autocomplete disabledKeys={["cat", "kangaroo"]} items={animals} placeholder="Select an animal" selectionMode="single" value={selected} onChange={(v) => setSelected(v as string | null)} />
    </div>
  )
}

export { AutocompleteWithDisabledOptions }
