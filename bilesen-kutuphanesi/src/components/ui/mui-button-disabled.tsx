/**
 * MuiButtonDisabled
 * @id 1903
 * @category Butonlar & Aksiyonlar
 * @subcategory MuiButton
 * @source mui
 */
import { MuiButton } from "@/components/ui/mui-button"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiButtonDisabled() {
  return (
    <MuiStack direction="row" spacing={2} className="flex-wrap">
      <MuiButton variant="contained" disabled>Contained</MuiButton>
      <MuiButton variant="outlined" disabled>Outlined</MuiButton>
      <MuiButton variant="text" disabled>Text</MuiButton>
    </MuiStack>
  )
}

export { MuiButtonDisabled }
