/**
 * MtNativeSelectError
 * Hata durumu (saf React, Mantine kaynaklı).
 * @id 1183
 * @category Form Elemanları
 * @subcategory MtNativeSelect
 * @source mantine
 */
import { MtNativeSelect } from "@/components/ui/mt-native-select"

function MtNativeSelectError() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <MtNativeSelect label="Boolean error" placeholder="Pick one" data={["A", "B"]} error />
      <MtNativeSelect label="With message" placeholder="Pick one" data={["A", "B"]} error="Please select an option" />
    </div>
  )
}

export { MtNativeSelectError }
