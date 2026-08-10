/**
 * MuiTooltipBasic
 * @id 1989
 * @category Overlay
 * @subcategory MuiTooltip
 * @source mui
 */
import { MuiTooltip } from "@/components/ui/mui-tooltip"
import { MuiButton } from "@/components/ui/mui-button"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiTooltipBasic() {
  return (
    <MuiStack direction="row" spacing={4} className="flex-wrap items-center">
      <MuiTooltip title="Üstte görünür" placement="top">
        <MuiButton variant="outlined">Üst</MuiButton>
      </MuiTooltip>
      <MuiTooltip title="Altta görünür" placement="bottom">
        <MuiButton variant="outlined">Alt</MuiButton>
      </MuiTooltip>
      <MuiTooltip title="Solda görünür" placement="left">
        <MuiButton variant="outlined">Sol</MuiButton>
      </MuiTooltip>
      <MuiTooltip title="Sağda görünür" placement="right">
        <MuiButton variant="outlined">Sağ</MuiButton>
      </MuiTooltip>
    </MuiStack>
  )
}

export { MuiTooltipBasic }
