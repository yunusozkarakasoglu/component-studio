/**
 * MuiTextFieldHiddenLabel
 * @id 1933
 * @category Form Elemanları
 * @subcategory MuiTextField
 * @source mui
 */
import { MuiTextField } from "@/components/ui/mui-text-field"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiTextFieldHiddenLabel() {
  return (
    <MuiStack spacing={3} className="w-full max-w-md">
      <MuiTextField hiddenLabel label="Gizli etiket" defaultValue="Görünür etiketsiz, aria etiketli" />
      <MuiTextField label="Yer tutucu" placeholder="Placeholder kullanımı" />
    </MuiStack>
  )
}

export { MuiTextFieldHiddenLabel }
