/**
 * MuiAutocompleteDisabled
 * @id 1973
 * @category Seçim
 * @subcategory MuiAutocomplete
 * @source mui
 */
import { MuiAutocomplete } from "@/components/ui/mui-autocomplete"
import { MuiStack } from "@/components/ui/mui-stack"

const OPTIONS = ["Seçenek A", "Seçenek B", "Seçenek C"]

function MuiAutocompleteDisabled() {
  return (
    <MuiStack spacing={3} className="w-full max-w-sm">
      <MuiAutocomplete label="Devre dışı" options={OPTIONS} disabled placeholder="Kullanılamaz" />
    </MuiStack>
  )
}

export { MuiAutocompleteDisabled }
