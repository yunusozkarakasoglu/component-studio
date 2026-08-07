/**
 * MtChipVariants
 * Varyantlar (saf React, Mantine kaynaklı).
 * @id 1245
 * @category Seçim
 * @subcategory MtChip
 * @source mantine
 */
import { MtChip, MtChipGroup } from "@/components/ui/mt-chip"

function MtChipVariants() {
  return (
    <div className="flex flex-col gap-4">
      <MtChipGroup multiple defaultValue={["a"]}>
        <MtChip value="a" variant="filled">Filled</MtChip>
        <MtChip value="b" variant="outline">Outline</MtChip>
        <MtChip value="c" variant="light">Light</MtChip>
      </MtChipGroup>
    </div>
  )
}

export { MtChipVariants }
