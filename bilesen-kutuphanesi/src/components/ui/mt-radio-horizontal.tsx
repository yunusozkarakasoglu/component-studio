/**
 * MtRadioHorizontal
 * Yatay düzen (saf React, Mantine kaynaklı).
 * @id 1229
 * @category Seçim
 * @subcategory MtRadio
 * @source mantine
 */
import { MtRadio, MtRadioGroup } from "@/components/ui/mt-radio"

function MtRadioHorizontal() {
  return (
    <MtRadioGroup defaultValue="1" orientation="horizontal">
      <MtRadio value="1" label="One" />
      <MtRadio value="2" label="Two" />
      <MtRadio value="3" label="Three" />
    </MtRadioGroup>
  )
}

export { MtRadioHorizontal }
