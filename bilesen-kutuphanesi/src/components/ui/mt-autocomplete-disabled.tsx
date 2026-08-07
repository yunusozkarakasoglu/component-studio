/**
 * MtAutocompleteDisabled
 * Devre dışı durum (saf React, Mantine kaynaklı).
 * @id 1326
 * @category Combobox
 * @subcategory MtAutocomplete
 * @source mantine
 */
import { MtAutocomplete } from "@/components/ui/mt-autocomplete"

function MtAutocompleteDisabled() {
  return <MtAutocomplete data={["React", "Vue"]} label="Disabled" disabled className="max-w-sm" />
}

export { MtAutocompleteDisabled }
