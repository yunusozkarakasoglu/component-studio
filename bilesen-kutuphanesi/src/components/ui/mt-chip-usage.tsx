/**
 * MtChipUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1244
 * @category Seçim
 * @subcategory MtChip
 * @source mantine
 */
import { MtChip, MtChipGroup } from "@/components/ui/mt-chip"

function MtChipUsage() {
  return (
    <MtChipGroup multiple defaultValue={["react"]}>
      <MtChip value="react">React</MtChip>
      <MtChip value="vue">Vue</MtChip>
      <MtChip value="angular">Angular</MtChip>
    </MtChipGroup>
  )
}

export { MtChipUsage }
