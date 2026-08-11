/**
 * MuiButtonFullWidth
 * @id 2072
 * @category Butonlar & Aksiyonlar
 * @subcategory MuiButton
 * @source mui
 */
import { MuiButton } from "@/components/ui/mui-button"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiButtonFullWidth() {
  return (
    <MuiStack spacing={2} className="w-full max-w-md">
      <MuiButton variant="contained" fullWidth>Tam Genişlik</MuiButton>
      <MuiButton variant="outlined" fullWidth>Çerçeveli Tam</MuiButton>
    </MuiStack>
  )
}

export { MuiButtonFullWidth }
