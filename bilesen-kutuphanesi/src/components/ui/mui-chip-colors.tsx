/**
 * MuiChipColors
 * @id 1967
 * @category Seçim
 * @subcategory MuiChip
 * @source mui
 */
import { MuiChip } from "@/components/ui/mui-chip"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiChipColors() {
  return (
    <MuiStack direction="row" spacing={1} className="flex-wrap">
      <MuiChip label="Default" />
      <MuiChip label="Primary" color="primary" />
      <MuiChip label="Secondary" color="secondary" />
      <MuiChip label="Success" color="success" />
      <MuiChip label="Error" color="error" />
      <MuiChip label="Warning" color="warning" />
      <MuiChip label="Info" color="info" />
    </MuiStack>
  )
}

export { MuiChipColors }
