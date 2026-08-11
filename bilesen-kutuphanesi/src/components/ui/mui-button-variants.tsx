/**
 * MuiButtonVariants
 * @id 2071
 * @category Butonlar & Aksiyonlar
 * @subcategory MuiButton
 * @source mui
 */
import { MuiButton } from "@/components/ui/mui-button"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiButtonVariants() {
  return (
    <MuiStack spacing={2} className="w-full max-w-md">
      <MuiStack direction="row" spacing={1}>
        <MuiButton variant="text">Metin</MuiButton>
        <MuiButton variant="contained">Dolu</MuiButton>
        <MuiButton variant="outlined">Çerçeveli</MuiButton>
      </MuiStack>
      <MuiStack direction="row" spacing={1}>
        <MuiButton variant="text" color="secondary">Metin</MuiButton>
        <MuiButton variant="contained" color="secondary">Dolu</MuiButton>
        <MuiButton variant="outlined" color="secondary">Çerçeveli</MuiButton>
      </MuiStack>
      <MuiStack direction="row" spacing={1}>
        <MuiButton variant="text" color="error">Metin</MuiButton>
        <MuiButton variant="contained" color="error">Dolu</MuiButton>
        <MuiButton variant="outlined" color="error">Çerçeveli</MuiButton>
      </MuiStack>
    </MuiStack>
  )
}

export { MuiButtonVariants }
