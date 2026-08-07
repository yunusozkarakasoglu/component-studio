/**
 * MtFieldsetDisabled
 * Devre dışı alan grubu (saf React, Mantine kaynaklı).
 * @id 1191
 * @category Form Elemanları
 * @subcategory MtFieldset
 * @source mantine
 */
import { MtFieldset } from "@/components/ui/mt-fieldset"
import { MtTextInput } from "@/components/ui/mt-text-input"

function MtFieldsetDisabled() {
  return (
    <MtFieldset legend="Disabled group" className="max-w-sm opacity-60">
      <div className="flex flex-col gap-4">
        <MtTextInput label="First name" placeholder="John" disabled />
        <MtTextInput label="Last name" placeholder="Doe" disabled />
      </div>
    </MtFieldset>
  )
}

export { MtFieldsetDisabled }
