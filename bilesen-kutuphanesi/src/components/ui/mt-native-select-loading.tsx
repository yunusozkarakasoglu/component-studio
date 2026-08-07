/**
 * MtNativeSelectLoading
 * Yükleniyor seçim (saf React, Mantine kaynaklı).
 * @id 1184
 * @category Form Elemanları
 * @subcategory MtNativeSelect
 * @source mantine
 */
import { MtNativeSelect } from "@/components/ui/mt-native-select"

function MtNativeSelectLoading() {
  return (
    <MtNativeSelect
      label="Loading select"
      placeholder="Pick one"
      data={["React", "Vue"]}
      loading
      disabled
      className="max-w-sm"
    />
  )
}

export { MtNativeSelectLoading }
