/**
 * MuiTextFieldBasic
 * @id 1923
 * @category Form Elemanları
 * @subcategory MuiTextField
 * @source mui
 */
import { MuiTextField } from "@/components/ui/mui-text-field"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiTextFieldBasic() {
  return (
    <MuiStack spacing={3} className="w-full max-w-md">
      <MuiTextField label="Standart" variant="standard" defaultValue="Etiketli standart" />
      <MuiTextField label="Dolu" variant="filled" defaultValue="Etiketli dolu" />
      <MuiTextField label="Çerçeveli" variant="outlined" defaultValue="Etiketli çerçeveli" />
    </MuiStack>
  )
}

export { MuiTextFieldBasic }
