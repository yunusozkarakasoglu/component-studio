/**
 * MuiTextFieldSizes
 * @id 1927
 * @category Form Elemanları
 * @subcategory MuiTextField
 * @source mui
 */
import { MuiTextField } from "@/components/ui/mui-text-field"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiTextFieldSizes() {
  return (
    <MuiStack spacing={3} className="w-full max-w-md">
      <MuiTextField label="Küçük" size="small" placeholder="Small boyut" />
      <MuiTextField label="Orta" size="medium" placeholder="Medium boyut" />
      <MuiTextField label="Tam genişlik" fullWidth placeholder="fullWidth" />
    </MuiStack>
  )
}

export { MuiTextFieldSizes }
