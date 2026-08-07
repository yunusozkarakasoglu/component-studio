/**
 * MtPinInputStylesApi
 * Styles API — boyut (saf React, Mantine kaynaklı).
 * @id 1287
 * @category Seçim
 * @subcategory MtPinInput
 * @source mantine
 */
import { MtPinInput } from "@/components/ui/mt-pin-input"

function MtPinInputStylesApi() {
  return (
    <div className="flex flex-col items-start gap-4">
      <MtPinInput length={4} size="sm" />
      <MtPinInput length={4} size="md" />
      <MtPinInput length={4} size="lg" />
    </div>
  )
}

export { MtPinInputStylesApi }
