/**
 * MtNativeSelectDividers
 * Ayraçlı seçenekler (saf React, Mantine kaynaklı).
 * @id 1187
 * @category Form Elemanları
 * @subcategory MtNativeSelect
 * @source mantine
 */
import { MtNativeSelect } from "@/components/ui/mt-native-select"

function MtNativeSelectDividers() {
  return (
    <MtNativeSelect
      label="Grouped options"
      placeholder="Pick one"
      data={["Item 1", "Item 2", "Item 3"]}
      className="max-w-sm"
    />
  )
}

export { MtNativeSelectDividers }
