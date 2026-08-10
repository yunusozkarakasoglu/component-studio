/**
 * MuiButtonGroupBasic
 * @id 1911
 * @category Butonlar & Aksiyonlar
 * @subcategory MuiButtonGroup
 * @source mui
 */
import { MuiButtonGroup } from "@/components/ui/mui-button-group"
import { MuiButton } from "@/components/ui/mui-button"

function MuiButtonGroupBasic() {
  return (
    <MuiButtonGroup variant="contained" ariaLabel="Temel buton grubu">
      <MuiButton>Bir</MuiButton>
      <MuiButton>İki</MuiButton>
      <MuiButton>Üç</MuiButton>
    </MuiButtonGroup>
  )
}

export { MuiButtonGroupBasic }
