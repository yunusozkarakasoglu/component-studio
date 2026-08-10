/**
 * MuiButtonSizes
 * @id 1899
 * @category Butonlar & Aksiyonlar
 * @subcategory MuiButton
 * @source mui
 */
import { MuiButton } from "@/components/ui/mui-button"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiButtonSizes() {
  return (
    <MuiStack direction="row" spacing={2} className="flex-wrap items-center">
      <MuiButton variant="contained" size="small">Small</MuiButton>
      <MuiButton variant="contained" size="medium">Medium</MuiButton>
      <MuiButton variant="contained" size="large">Large</MuiButton>
    </MuiStack>
  )
}

export { MuiButtonSizes }
