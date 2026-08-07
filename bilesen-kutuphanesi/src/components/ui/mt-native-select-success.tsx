/**
 * MtNativeSelectSuccess
 * Başarı durumu (saf React, Mantine kaynaklı).
 * @id 1185
 * @category Form Elemanları
 * @subcategory MtNativeSelect
 * @source mantine
 */
import { MtNativeSelect } from "@/components/ui/mt-native-select"

function MtNativeSelectSuccess() {
  return (
    <MtNativeSelect
      label="Select"
      placeholder="Pick one"
      data={["React", "Vue"]}
      success="Valid selection"
      className="max-w-sm"
    />
  )
}

export { MtNativeSelectSuccess }
