/**
 * MtRadioDisabled
 * Devre dışı durum (saf React, Mantine kaynaklı).
 * @id 1230
 * @category Seçim
 * @subcategory MtRadio
 * @source mantine
 */
import { MtRadio, MtRadioGroup } from "@/components/ui/mt-radio"

function MtRadioDisabled() {
  return (
    <MtRadioGroup defaultValue="1">
      <MtRadio value="1" label="Enabled" />
      <MtRadio value="2" label="Disabled" disabled />
    </MtRadioGroup>
  )
}

export { MtRadioDisabled }
