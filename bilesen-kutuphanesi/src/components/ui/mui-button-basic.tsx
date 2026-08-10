/**
 * MuiButtonBasic
 * @id 1897
 * @category Butonlar & Aksiyonlar
 * @subcategory MuiButton
 * @source mui
 */
import { MuiButton } from "@/components/ui/mui-button"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiButtonBasic() {
  return (
    <MuiStack direction="row" spacing={2} className="flex-wrap">
      <MuiButton variant="text">Text</MuiButton>
      <MuiButton variant="contained">Contained</MuiButton>
      <MuiButton variant="outlined">Outlined</MuiButton>
    </MuiStack>
  )
}

export { MuiButtonBasic }
