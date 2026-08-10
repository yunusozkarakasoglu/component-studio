/**
 * MuiTextFieldValidation
 * @id 1924
 * @category Form Elemanları
 * @subcategory MuiTextField
 * @source mui
 */
import { useState } from "react"
import { MuiTextField } from "@/components/ui/mui-text-field"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiTextFieldValidation() {
  const [val, setVal] = useState("")
  const error = val.length > 0 && val.length < 3
  return (
    <MuiStack spacing={3} className="w-full max-w-md">
      <MuiTextField
        label="Şifre"
        type="password"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        error={error}
        helperText={error ? "Şifre en az 3 karakter olmalı" : "En az 3 karakter gereklidir"}
      />
    </MuiStack>
  )
}

export { MuiTextFieldValidation }
