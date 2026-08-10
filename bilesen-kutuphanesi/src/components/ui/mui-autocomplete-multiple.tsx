/**
 * MuiAutocompleteMultiple
 * @id 1972
 * @category Seçim
 * @subcategory MuiAutocomplete
 * @source mui
 */
import { MuiAutocomplete } from "@/components/ui/mui-autocomplete"
import { MuiStack } from "@/components/ui/mui-stack"

const TAGS = ["React", "Vue", "Angular", "Svelte", "Solid", "Qwik"]

function MuiAutocompleteMultiple() {
  return (
    <MuiStack spacing={3} className="w-full max-w-sm">
      <MuiAutocomplete label="Çoklu seçim" options={TAGS} multiple placeholder="Framework seç…" />
    </MuiStack>
  )
}

export { MuiAutocompleteMultiple }
