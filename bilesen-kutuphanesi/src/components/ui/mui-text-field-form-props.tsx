/**
 * MuiTextFieldFormProps
 * @id 1928
 * @category Form Elemanları
 * @subcategory MuiTextField
 * @source mui
 */
import { MuiTextField } from "@/components/ui/mui-text-field"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiTextFieldFormProps() {
  return (
    <MuiStack spacing={3} className="w-full max-w-md">
      <MuiTextField label="Devre dışı" disabled defaultValue="Devre dışı değer" />
      <MuiTextField label="Gerekli" required defaultValue="Gerekli alan" />
      <MuiTextField label="Hata" error helperText="Yanlış giriş" defaultValue="Hatalı değer" />
      <MuiTextField label="Salt okunur" readOnly defaultValue="Salt okunur değer" />
    </MuiStack>
  )
}

export { MuiTextFieldFormProps }
