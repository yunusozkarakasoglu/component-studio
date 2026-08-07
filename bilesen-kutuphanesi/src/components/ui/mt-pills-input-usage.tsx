/**
 * MtPillsInputUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1296
 * @category Seçim
 * @subcategory MtPillsInput
 * @source mantine
 */
import { MtPillsInput } from "@/components/ui/mt-pills-input"

function MtPillsInputUsage() {
  return <MtPillsInput defaultValue={["React", "Vue"]} label="Technologies" className="max-w-sm" />
}

export { MtPillsInputUsage }
