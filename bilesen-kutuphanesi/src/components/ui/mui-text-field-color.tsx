/**
 * MuiTextFieldColor
 * @id 1932
 * @category Form Elemanları
 * @subcategory MuiTextField
 * @source mui
 */
import { MuiTextField } from "@/components/ui/mui-text-field"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiTextFieldColor() {
  return (
    <MuiStack spacing={3} className="w-full max-w-md">
      <MuiTextField label="Primary" color="primary" defaultValue="Primary renk" />
      <MuiTextField label="Secondary" color="secondary" defaultValue="Secondary renk" />
    </MuiStack>
  )
}

export { MuiTextFieldColor }
