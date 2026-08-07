/**
 * MtNativeSelectOptions
 * Devre dışı seçenekler (saf React, Mantine kaynaklı).
 * @id 1186
 * @category Form Elemanları
 * @subcategory MtNativeSelect
 * @source mantine
 */
import { MtNativeSelect } from "@/components/ui/mt-native-select"

function MtNativeSelectOptions() {
  return (
    <MtNativeSelect
      label="Select with disabled options"
      placeholder="Pick one"
      data={[
        { value: "react", label: "React" },
        { value: "vue", label: "Vue" },
        { value: "svelte", label: "Svelte", disabled: true },
        { value: "angular", label: "Angular" },
      ]}
      className="max-w-sm"
    />
  )
}

export { MtNativeSelectOptions }
