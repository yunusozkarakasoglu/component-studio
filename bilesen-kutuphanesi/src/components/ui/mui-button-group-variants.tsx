/**
 * MuiButtonGroupVariants
 * @id 1914
 * @category Butonlar & Aksiyonlar
 * @subcategory MuiButtonGroup
 * @source mui
 */
import { MuiButtonGroup } from "@/components/ui/mui-button-group"
import { MuiButton } from "@/components/ui/mui-button"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiButtonGroupVariants() {
  return (
    <MuiStack direction="row" spacing={2} className="flex-wrap">
      <MuiButtonGroup variant="contained" ariaLabel="dolu">
        <MuiButton>Dolu</MuiButton>
        <MuiButton>Butonlar</MuiButton>
      </MuiButtonGroup>
      <MuiButtonGroup variant="outlined" ariaLabel="çerçeveli">
        <MuiButton>Çerçeveli</MuiButton>
        <MuiButton>Butonlar</MuiButton>
      </MuiButtonGroup>
      <MuiButtonGroup variant="text" ariaLabel="metin">
        <MuiButton>Metin</MuiButton>
        <MuiButton>Butonlar</MuiButton>
      </MuiButtonGroup>
    </MuiStack>
  )
}

export { MuiButtonGroupVariants }
