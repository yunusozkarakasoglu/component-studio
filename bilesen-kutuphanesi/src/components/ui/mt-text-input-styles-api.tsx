/**
 * MtTextInputStylesApi
 * Styles API — boyut/radius (saf React, Mantine kaynaklı).
 * @id 1130
 * @category Form Elemanları
 * @subcategory MtTextInput
 * @source mantine
 */
import { MtTextInput } from "@/components/ui/mt-text-input"

function MtTextInputStylesApi() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <MtTextInput label="Small" placeholder="Small input" size="sm" />
      <MtTextInput label="Large" placeholder="Large input" size="lg" />
      <MtTextInput label="Rounded" placeholder="Rounded input" className="[&_input]:rounded-full" />
    </div>
  )
}

export { MtTextInputStylesApi }
