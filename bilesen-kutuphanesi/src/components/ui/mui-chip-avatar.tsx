/**
 * MuiChipAvatar
 * @id 2043
 * @category Seçim
 * @subcategory MuiChip
 * @source mui
 */
import { MuiChip } from "@/components/ui/mui-chip"
import { MuiAvatar } from "@/components/ui/mui-avatar"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiChipAvatar() {
  return (
    <MuiStack direction="row" spacing={1} className="flex-wrap">
      <MuiChip label="Yunus K." avatar={<MuiAvatar size="small" className="!size-6 text-[10px]">YK</MuiAvatar>} />
      <MuiChip label="Ayşe T." avatar={<MuiAvatar size="small" className="!size-6 bg-green-600 text-[10px]">AT</MuiAvatar>} variant="outlined" />
      <MuiChip label="Mehmet A." avatar={<MuiAvatar size="small" className="!size-6 bg-purple-600 text-[10px]">MA</MuiAvatar>} color="primary" />
    </MuiStack>
  )
}

export { MuiChipAvatar }
