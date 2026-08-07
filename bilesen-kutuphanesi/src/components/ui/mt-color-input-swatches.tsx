/**
 * MtColorInputSwatches
 * Renk örnekleri (saf React, Mantine kaynaklı).
 * @id 1289
 * @category Seçim
 * @subcategory MtColorInput
 * @source mantine
 */
import { MtColorInput } from "@/components/ui/mt-color-input"

function MtColorInputSwatches() {
  return (
    <MtColorInput
      defaultValue="#4263eb"
      className="max-w-sm"
      swatches={["#25262b", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]}
    />
  )
}

export { MtColorInputSwatches }
