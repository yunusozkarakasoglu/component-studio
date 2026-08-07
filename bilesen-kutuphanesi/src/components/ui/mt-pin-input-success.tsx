/**
 * MtPinInputSuccess
 * Başarı durumu (saf React, Mantine kaynaklı).
 * @id 1286
 * @category Seçim
 * @subcategory MtPinInput
 * @source mantine
 */
import { MtPinInput } from "@/components/ui/mt-pin-input"

function MtPinInputSuccess() {
  return <MtPinInput length={4} success defaultValue="1234" />
}

export { MtPinInputSuccess }
