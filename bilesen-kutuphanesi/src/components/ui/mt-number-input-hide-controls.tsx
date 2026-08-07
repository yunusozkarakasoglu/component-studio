/**
 * MtNumberInputHideControls
 * Kontrolleri gizle (saf React, Mantine kaynaklı).
 * @id 1164
 * @category Form Elemanları
 * @subcategory MtNumberInput
 * @source mantine
 */
import { MtNumberInput } from "@/components/ui/mt-number-input"

function MtNumberInputHideControls() {
  return <MtNumberInput label="No controls" placeholder="Type a number" hideControls className="max-w-sm" />
}

export { MtNumberInputHideControls }
