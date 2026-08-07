/**
 * MtColorInputFormat
 * Format — rgba (saf React, Mantine kaynaklı).
 * @id 1290
 * @category Seçim
 * @subcategory MtColorInput
 * @source mantine
 */
import { MtColorInput } from "@/components/ui/mt-color-input"

function MtColorInputFormat() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <MtColorInput format="hex" defaultValue="#4263eb" label="HEX" />
      <MtColorInput format="rgba" defaultValue="rgba(66, 99, 235, 1)" label="RGBA" />
      <MtColorInput format="hsl" defaultValue="hsl(225, 80%, 59%)" label="HSL" />
    </div>
  )
}

export { MtColorInputFormat }
