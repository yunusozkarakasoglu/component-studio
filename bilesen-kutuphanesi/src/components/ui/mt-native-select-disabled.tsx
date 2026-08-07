/**
 * MtNativeSelectDisabled
 * Devre dışı seçim (saf React, Mantine kaynaklı).
 * @id 1182
 * @category Form Elemanları
 * @subcategory MtNativeSelect
 * @source mantine
 */
import { MtNativeSelect } from "@/components/ui/mt-native-select"

function MtNativeSelectDisabled() {
  return (
    <MtNativeSelect
      label="Disabled select"
      placeholder="Pick one"
      data={["React", "Vue", "Angular"]}
      disabled
      className="max-w-sm"
    />
  )
}

export { MtNativeSelectDisabled }
