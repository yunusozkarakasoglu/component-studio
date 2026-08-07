/**
 * MtFieldsetUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1190
 * @category Form Elemanları
 * @subcategory MtFieldset
 * @source mantine
 */
import { MtFieldset } from "@/components/ui/mt-fieldset"
import { MtTextInput } from "@/components/ui/mt-text-input"

function MtFieldsetUsage() {
  return (
    <MtFieldset legend="Personal information" className="max-w-sm">
      <div className="flex flex-col gap-4">
        <MtTextInput label="First name" placeholder="John" />
        <MtTextInput label="Last name" placeholder="Doe" />
        <MtTextInput label="Email" placeholder="john@example.com" />
      </div>
    </MtFieldset>
  )
}

export { MtFieldsetUsage }
