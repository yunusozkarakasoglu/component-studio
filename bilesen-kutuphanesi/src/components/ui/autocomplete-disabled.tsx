/**
 * AutocompleteDisabled
 * HeroUI Disabled örneği — devre dışı (saf React).
 * @id 147
 * @category Form Elemanları
 */
import { Autocomplete } from "@/components/ui/autocomplete"
import { Label } from "@/components/ui/label"

const states = [
  { id: "florida", name: "Florida" }, { id: "delaware", name: "Delaware" },
  { id: "california", name: "California" }, { id: "texas", name: "Texas" },
]

function AutocompleteDisabled() {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-[256px]">
        <Label className="mb-1.5">State</Label>
        <Autocomplete isDisabled defaultValue="california" items={states} placeholder="Select one" selectionMode="single" />
      </div>
      <div className="w-[256px]">
        <Label className="mb-1.5">States</Label>
        <Autocomplete isDisabled defaultValue={["florida", "texas"]} items={states} placeholder="Select multiple" selectionMode="multiple" />
      </div>
    </div>
  )
}

export { AutocompleteDisabled }
