/**
 * MtRadioIcon
 * İkonlu radyo (saf React, Mantine kaynaklı).
 * @id 1234
 * @category Seçim
 * @subcategory MtRadio
 * @source mantine
 */
import { MtRadio, MtRadioGroup } from "@/components/ui/mt-radio"

function MtRadioIcon() {
  return (
    <MtRadioGroup defaultValue="dark">
      <MtRadio value="dark" label="🌙 Dark" />
      <MtRadio value="light" label="☀️ Light" />
    </MtRadioGroup>
  )
}

export { MtRadioIcon }
