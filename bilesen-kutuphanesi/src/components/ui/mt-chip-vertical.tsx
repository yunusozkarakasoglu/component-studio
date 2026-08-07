/**
 * MtChipVertical
 * Dikey düzen (saf React, Mantine kaynaklı).
 * @id 1249
 * @category Seçim
 * @subcategory MtChip
 * @source mantine
 */
import { MtChip, MtChipGroup } from "@/components/ui/mt-chip"

function MtChipVertical() {
  return (
    <MtChipGroup multiple orientation="vertical">
      <MtChip value="a">First option</MtChip>
      <MtChip value="b">Second option</MtChip>
      <MtChip value="c">Third option</MtChip>
    </MtChipGroup>
  )
}

export { MtChipVertical }
