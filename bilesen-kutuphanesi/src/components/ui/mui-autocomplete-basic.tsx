/**
 * MuiAutocompleteBasic
 * @id 1971
 * @category Seçim
 * @subcategory MuiAutocomplete
 * @source mui
 */
import { MuiAutocomplete } from "@/components/ui/mui-autocomplete"
import { MuiStack } from "@/components/ui/mui-stack"

const TOP_FILMS = ["The Shawshank Redemption", "The Godfather", "The Dark Knight", "Pulp Fiction", "Forrest Gump", "Inception"]

function MuiAutocompleteBasic() {
  return (
    <MuiStack spacing={3} className="w-full max-w-sm">
      <MuiAutocomplete label="Combo kutusu" options={TOP_FILMS} placeholder="Film seç…" />
      <MuiAutocomplete label="Serbest yazım" options={TOP_FILMS} freeSolo placeholder="Yaz veya seç…" />
    </MuiStack>
  )
}

export { MuiAutocompleteBasic }
