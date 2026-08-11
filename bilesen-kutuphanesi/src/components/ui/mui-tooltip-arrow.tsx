/**
 * MuiTooltipArrow
 * @id 2069
 * @category Overlay
 * @subcategory MuiTooltip
 * @source mui
 */
import { MuiTooltip } from "@/components/ui/mui-tooltip"
import { MuiButton } from "@/components/ui/mui-button"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiTooltipArrow() {
  return (
    <MuiStack direction="row" spacing={2}>
      <MuiTooltip title="Ok işaretli ipucu" placement="top" arrow>
        <MuiButton variant="outlined">Ok</MuiButton>
      </MuiTooltip>
      <MuiTooltip title="İpucu" placement="bottom">
        <MuiButton variant="outlined">Düz</MuiButton>
      </MuiTooltip>
    </MuiStack>
  )
}

export { MuiTooltipArrow }
