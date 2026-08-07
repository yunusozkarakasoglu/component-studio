/**
 * MtChipDisabled
 * Devre dışı çip (saf React, Mantine kaynaklı).
 * @id 1247
 * @category Seçim
 * @subcategory MtChip
 * @source mantine
 */
import { MtChip, MtChipGroup } from "@/components/ui/mt-chip"

function MtChipDisabled() {
  return (
    <MtChipGroup multiple defaultValue={["a"]}>
      <MtChip value="a">Enabled</MtChip>
      <MtChip value="b" disabled>Disabled</MtChip>
    </MtChipGroup>
  )
}

export { MtChipDisabled }
