/**
 * MtChipSingle
 * Tek seçim (saf React, Mantine kaynaklı).
 * @id 1248
 * @category Seçim
 * @subcategory MtChip
 * @source mantine
 */
import { MtChip, MtChipGroup } from "@/components/ui/mt-chip"

function MtChipSingle() {
  return (
    <MtChipGroup defaultValue={["middle"]}>
      <MtChip value="left">Left</MtChip>
      <MtChip value="middle">Middle</MtChip>
      <MtChip value="right">Right</MtChip>
    </MtChipGroup>
  )
}

export { MtChipSingle }
