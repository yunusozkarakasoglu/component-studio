/**
 * MtAutocompleteError
 * Hata durumu (saf React, Mantine kaynaklı).
 * @id 1325
 * @category Combobox
 * @subcategory MtAutocomplete
 * @source mantine
 */
import { MtAutocomplete } from "@/components/ui/mt-autocomplete"

function MtAutocompleteError() {
  return <MtAutocomplete data={["React", "Vue"]} label="Required" error="This field is required" className="max-w-sm" />
}

export { MtAutocompleteError }
