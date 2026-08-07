/**
 * MtColorInputNoEyeDropper
 * Damlalıksız (saf React, Mantine kaynaklı).
 * @id 1294
 * @category Seçim
 * @subcategory MtColorInput
 * @source mantine
 */
import { MtColorInput } from "@/components/ui/mt-color-input"

function MtColorInputNoEyeDropper() {
  return <MtColorInput defaultValue="#4263eb" eyeDropper={false} className="max-w-sm" />
}

export { MtColorInputNoEyeDropper }
