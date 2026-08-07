/**
 * MtPinInputRegexp
 * Regex kısıtlaması (saf React, Mantine kaynaklı).
 * @id 1285
 * @category Seçim
 * @subcategory MtPinInput
 * @source mantine
 */
import { MtPinInput } from "@/components/ui/mt-pin-input"

function MtPinInputRegexp() {
  return <MtPinInput length={4} regexp={/^[0-9]$/} label="Digits only" />
}

export { MtPinInputRegexp }
