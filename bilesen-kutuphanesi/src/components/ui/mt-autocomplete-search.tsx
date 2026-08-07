/**
 * MtAutocompleteSearch
 * Arama örneği (saf React, Mantine kaynaklı).
 * @id 1324
 * @category Combobox
 * @subcategory MtAutocomplete
 * @source mantine
 */
import { MtAutocomplete } from "@/components/ui/mt-autocomplete"

function MtAutocompleteSearch() {
  return (
    <MtAutocomplete
      data={["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "kiwi", "lemon", "mango"]}
      label="Search fruits"
      placeholder="Type 'a' to see suggestions"
      className="max-w-sm"
    />
  )
}

export { MtAutocompleteSearch }
