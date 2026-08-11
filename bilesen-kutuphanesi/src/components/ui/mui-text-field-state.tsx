/**
 * MuiTextFieldState
 * @id 2046
 * @category Form Elemanları
 * @subcategory MuiTextField
 * @source mui
 */
import { useState } from "react"
import { MuiTextField } from "@/components/ui/mui-text-field"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiTextFieldState() {
  const [value, setValue] = useState("Kontrollü değer")
  return (
    <MuiStack spacing={3} className="w-full max-w-md">
      <MuiTextField label="Kontrollü" value={value} onChange={(e) => setValue(e.target.value)} helperText="State ile yönetilir" />
      <MuiTextField label="Varsayılan" defaultValue="Kontrolsüz (defaultValue)" helperText="Dahili state" />
    </MuiStack>
  )
}

export { MuiTextFieldState }
