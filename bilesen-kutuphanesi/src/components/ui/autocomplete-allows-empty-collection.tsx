/**
 * AutocompleteAllowsEmptyCollection
 * HeroUI Allows Empty Collection örneği — boş koleksiyon (saf React).
 * @id 149
 * @category Form Elemanları
 */
import { Autocomplete } from "@/components/ui/autocomplete"
import { Label } from "@/components/ui/label"

function AutocompleteAllowsEmptyCollection() {
  return (
    <div className="w-[256px]">
      <Label className="mb-1.5">State</Label>
      <Autocomplete allowsEmptyCollection items={[]} placeholder="Select one" selectionMode="single" />
    </div>
  )
}

export { AutocompleteAllowsEmptyCollection }
