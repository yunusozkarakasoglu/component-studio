/**
 * MuiAutocompleteDisabledOptions
 * @id 2045
 * @category Seçim
 * @subcategory MuiAutocomplete
 * @source mui
 */
import { MuiAutocomplete } from "@/components/ui/mui-autocomplete"

function MuiAutocompleteDisabledOptions() {
  return (
    <MuiAutocomplete
      label="Devre dışı seçenekler"
      options={["Elma", "Armut", "Muz", "Çilek", "Kiraz", "Üzüm"]}
      placeholder="Seç…"
    />
  )
}

export { MuiAutocompleteDisabledOptions }
