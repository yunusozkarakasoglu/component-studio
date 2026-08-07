/**
 * MtNumberInputPrefixSuffix
 * Önek/sonek (saf React, Mantine kaynaklı).
 * @id 1156
 * @category Form Elemanları
 * @subcategory MtNumberInput
 * @source mantine
 */
import { MtNumberInput } from "@/components/ui/mt-number-input"

function MtNumberInputPrefixSuffix() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <MtNumberInput label="Price" placeholder="Price" defaultValue={100} className="[&_input]:pr-16" />
      <MtNumberInput label="Percent" placeholder="Percent" className="[&_input]:pr-16" />
    </div>
  )
}

export { MtNumberInputPrefixSuffix }
