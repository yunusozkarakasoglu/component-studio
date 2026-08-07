/**
 * MtNativeSelectUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1181
 * @category Form Elemanları
 * @subcategory MtNativeSelect
 * @source mantine
 */
import { MtNativeSelect } from "@/components/ui/mt-native-select"

function MtNativeSelectUsage() {
  return (
    <MtNativeSelect
      label="Select your favorite library/framework"
      placeholder="Pick one"
      data={["React", "Vue", "Angular", "Svelte"]}
      className="max-w-sm"
    />
  )
}

export { MtNativeSelectUsage }
