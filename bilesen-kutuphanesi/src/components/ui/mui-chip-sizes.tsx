/**
 * MuiChipSizes
 * @id 1968
 * @category Seçim
 * @subcategory MuiChip
 * @source mui
 */
import { MuiChip } from "@/components/ui/mui-chip"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiChipSizes() {
  return (
    <MuiStack direction="row" spacing={1} className="items-center">
      <MuiChip label="Küçük" size="small" />
      <MuiChip label="Orta" size="medium" />
    </MuiStack>
  )
}

export { MuiChipSizes }
