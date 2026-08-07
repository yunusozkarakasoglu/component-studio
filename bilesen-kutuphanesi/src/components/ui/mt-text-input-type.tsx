/**
 * MtTextInputType
 * Tip çeşitleri (saf React, Mantine kaynaklı).
 * @id 1129
 * @category Form Elemanları
 * @subcategory MtTextInput
 * @source mantine
 */
import { MtTextInput } from "@/components/ui/mt-text-input"

function MtTextInputType() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <MtTextInput type="password" label="Password input" placeholder="Password input" />
      <MtTextInput type="date" label="Date input" placeholder="Date input" />
      <MtTextInput type="datetime-local" label="Date time input" placeholder="Date time input" />
    </div>
  )
}

export { MtTextInputType }
