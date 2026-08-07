/**
 * MtRadioUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1228
 * @category Seçim
 * @subcategory MtRadio
 * @source mantine
 */
import { MtRadio, MtRadioGroup } from "@/components/ui/mt-radio"

function MtRadioUsage() {
  return (
    <MtRadioGroup defaultValue="react" label="Select framework">
      <MtRadio value="react" label="React" />
      <MtRadio value="vue" label="Vue" />
      <MtRadio value="angular" label="Angular" />
    </MtRadioGroup>
  )
}

export { MtRadioUsage }
