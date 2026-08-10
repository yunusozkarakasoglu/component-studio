/**
 * MuiButtonColors
 * @id 1898
 * @category Butonlar & Aksiyonlar
 * @subcategory MuiButton
 * @source mui
 */
import { MuiButton } from "@/components/ui/mui-button"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiButtonColors() {
  return (
    <MuiStack direction="row" spacing={2} className="flex-wrap">
      <MuiButton variant="contained" color="primary">Primary</MuiButton>
      <MuiButton variant="contained" color="secondary">Secondary</MuiButton>
      <MuiButton variant="contained" color="success">Success</MuiButton>
      <MuiButton variant="contained" color="error">Error</MuiButton>
      <MuiButton variant="contained" color="info">Info</MuiButton>
      <MuiButton variant="contained" color="warning">Warning</MuiButton>
    </MuiStack>
  )
}

export { MuiButtonColors }
