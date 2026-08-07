/**
 * MtAutocompleteLimit
 * Sonuç limiti (saf React, Mantine kaynaklı).
 * @id 1328
 * @category Combobox
 * @subcategory MtAutocomplete
 * @source mantine
 */
import { MtAutocomplete } from "@/components/ui/mt-autocomplete"

function MtAutocompleteLimit() {
  return (
    <MtAutocomplete
      data={["a-1", "a-2", "a-3", "a-4", "a-5", "a-6", "a-7", "a-8"]}
      label="Limit 3 results"
      limit={3}
      className="max-w-sm"
    />
  )
}

export { MtAutocompleteLimit }
