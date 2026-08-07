/**
 * MtNativeSelectStylesApi
 * Styles API — boyut (saf React, Mantine kaynaklı).
 * @id 1189
 * @category Form Elemanları
 * @subcategory MtNativeSelect
 * @source mantine
 */
import { MtNativeSelect } from "@/components/ui/mt-native-select"

function MtNativeSelectStylesApi() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <MtNativeSelect label="Small" placeholder="Pick one" data={["A", "B"]} className="[&_select]:h-8" />
      <MtNativeSelect label="Large" placeholder="Pick one" data={["A", "B"]} className="[&_select]:h-10" />
    </div>
  )
}

export { MtNativeSelectStylesApi }
