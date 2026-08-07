/**
 * MtSelectUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1305
 * @category Combobox
 * @subcategory MtSelect
 * @source mantine
 */
import { MtSelect } from "@/components/ui/mt-select"

function MtSelectUsage() {
  return <MtSelect data={["React", "Vue", "Angular", "Svelte"]} label="Select framework" className="max-w-sm" />
}

export { MtSelectUsage }
