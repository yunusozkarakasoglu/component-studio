/**
 * MuiButtonGroupOrientation
 * @id 2067
 * @category Butonlar & Aksiyonlar
 * @subcategory MuiButtonGroup
 * @source mui
 */
import { MuiButtonGroup } from "@/components/ui/mui-button-group"
import { MuiButton } from "@/components/ui/mui-button"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiButtonGroupOrientation() {
  return (
    <MuiStack direction="row" spacing={3} className="flex-wrap items-start">
      <MuiButtonGroup orientation="column" variant="outlined" ariaLabel="dikey">
        <MuiButton>Üst</MuiButton>
        <MuiButton>Orta</MuiButton>
        <MuiButton>Alt</MuiButton>
      </MuiButtonGroup>
      <MuiButtonGroup variant="contained" ariaLabel="yatay">
        <MuiButton>Bir</MuiButton>
        <MuiButton>İki</MuiButton>
        <MuiButton>Üç</MuiButton>
      </MuiButtonGroup>
    </MuiStack>
  )
}

export { MuiButtonGroupOrientation }
