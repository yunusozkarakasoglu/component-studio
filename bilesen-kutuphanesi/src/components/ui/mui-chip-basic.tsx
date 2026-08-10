/**
 * MuiChipBasic
 * @id 1965
 * @category Seçim
 * @subcategory MuiChip
 * @source mui
 */
import { MuiChip } from "@/components/ui/mui-chip"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiChipBasic() {
  return (
    <MuiStack direction="row" spacing={1} className="flex-wrap">
      <MuiChip label="Dolu Çip" />
      <MuiChip label="Çerçeveli Çip" variant="outlined" />
    </MuiStack>
  )
}

export { MuiChipBasic }
