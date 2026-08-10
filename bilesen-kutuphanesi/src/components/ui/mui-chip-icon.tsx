/**
 * MuiChipIcon
 * @id 1969
 * @category Seçim
 * @subcategory MuiChip
 * @source mui
 */
import { MuiChip } from "@/components/ui/mui-chip"
import { MuiStack } from "@/components/ui/mui-stack"
import { Tag, Smile } from "@/components/ui/icons"

function MuiChipIcon() {
  return (
    <MuiStack direction="row" spacing={1} className="flex-wrap">
      <MuiChip label="Etiket" icon={<Tag className="size-3.5" />} />
      <MuiChip label="Yüz" icon={<Smile className="size-3.5" />} />
      <MuiChip label="Çerçeveli" variant="outlined" icon={<Tag className="size-3.5" />} />
    </MuiStack>
  )
}

export { MuiChipIcon }
