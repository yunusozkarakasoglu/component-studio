/**
 * MtNativeSelectSections
 * Bölümler — ikon (saf React, Mantine kaynaklı).
 * @id 1188
 * @category Form Elemanları
 * @subcategory MtNativeSelect
 * @source mantine
 */
import { MtNativeSelect } from "@/components/ui/mt-native-select"

function MtNativeSelectSections() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <MtNativeSelect label="With icon" placeholder="Pick one" data={["TR", "EN", "DE"]} className="[&_select]:pl-9" />
    </div>
  )
}

export { MtNativeSelectSections }
