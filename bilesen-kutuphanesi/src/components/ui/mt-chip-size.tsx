/**
 * MtChipSize
 * Boyutlar (saf React, Mantine kaynaklı).
 * @id 1246
 * @category Seçim
 * @subcategory MtChip
 * @source mantine
 */
import { MtChip, MtChipGroup } from "@/components/ui/mt-chip"

function MtChipSize() {
  return (
    <div className="flex flex-col gap-4">
      <MtChipGroup multiple>
        <MtChip value="xs" size="xs">Extra small</MtChip>
        <MtChip value="sm" size="sm">Small</MtChip>
      </MtChipGroup>
      <MtChipGroup multiple>
        <MtChip value="md" size="md">Medium</MtChip>
        <MtChip value="lg" size="lg">Large</MtChip>
      </MtChipGroup>
    </div>
  )
}

export { MtChipSize }
