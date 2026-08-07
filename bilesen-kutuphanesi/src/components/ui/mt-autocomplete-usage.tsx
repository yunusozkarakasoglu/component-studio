/**
 * MtAutocompleteUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1323
 * @category Combobox
 * @subcategory MtAutocomplete
 * @source mantine
 */
import { MtAutocomplete } from "@/components/ui/mt-autocomplete"

function MtAutocompleteUsage() {
  return <MtAutocomplete data={["React", "Vue", "Angular", "Svelte"]} label="Framework" className="max-w-sm" />
}

export { MtAutocompleteUsage }
