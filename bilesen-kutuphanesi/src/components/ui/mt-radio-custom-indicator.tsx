/**
 * MtRadioCustomIndicator
 * Özel gösterge (saf React, Mantine kaynaklı).
 * @id 1235
 * @category Seçim
 * @subcategory MtRadio
 * @source mantine
 */
import { MtRadio, MtRadioGroup } from "@/components/ui/mt-radio"

function MtRadioCustomIndicator() {
  return (
    <MtRadioGroup defaultValue="x">
      <MtRadio value="x" label="Custom size" className="[&_span]:size-5 [&_span]:peer-checked:border-emerald-600 [&_span>span]:bg-emerald-600" />
    </MtRadioGroup>
  )
}

export { MtRadioCustomIndicator }
