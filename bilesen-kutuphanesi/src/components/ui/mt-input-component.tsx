/**
 * MtInputComponent
 * Bileşen prop — a etiketi (saf React, Mantine kaynaklı).
 * @id 1209
 * @category Form Elemanları
 * @subcategory MtInput
 * @source mantine
 */
import { MtInput } from "@/components/ui/mt-input"

function MtInputComponent() {
  return (
    <MtInput placeholder="Looks like input, renders as div" className="max-w-sm cursor-pointer" readOnly />
  )
}

export { MtInputComponent }
