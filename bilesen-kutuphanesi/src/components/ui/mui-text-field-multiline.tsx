/**
 * MuiTextFieldMultiline
 * @id 1926
 * @category Form Elemanları
 * @subcategory MuiTextField
 * @source mui
 */
import { MuiTextField } from "@/components/ui/mui-text-field"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiTextFieldMultiline() {
  return (
    <MuiStack spacing={3} className="w-full max-w-md">
      <MuiTextField label="Açıklama" multiline rows={4} placeholder="Mesajınızı yazın…" />
    </MuiStack>
  )
}

export { MuiTextFieldMultiline }
