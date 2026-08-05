/**
 * FieldErrorDynamic
 * Dinamik mesaj örneği — children fonksiyon (saf React).
 * @id 379
 * @category Form Elemanları
 * @subcategory FieldError
 */
import { useState } from "react"
import { FieldError } from "@/components/ui/field-error"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TextField } from "@/components/ui/text-field"

function FieldErrorDynamic() {
  const [value, setValue] = useState("")
  const errors: string[] = []
  if (value.length > 0 && value.length < 8) errors.push("Minimum 8 characters")
  if (value.length > 0 && !/[A-Z]/.test(value)) errors.push("One uppercase letter required")
  if (value.length > 0 && !/[0-9]/.test(value)) errors.push("One number required")

  return (
    <TextField
      className="w-64"
      isInvalid={errors.length > 0}
      value={value}
      onChange={setValue}
      validate={(v) => {
        if (v.length > 0 && v.length < 8) return "Minimum 8 characters"
        if (v.length > 0 && !/[A-Z]/.test(v)) return "One uppercase letter required"
        if (v.length > 0 && !/[0-9]/.test(v)) return "One number required"
        return null
      }}
    >
      <Label>Password</Label>
      <Input type="password" placeholder="Enter password" />
      <FieldError>{(validation) => validation.validationErrors.join(", ")}</FieldError>
    </TextField>
  )
}

export { FieldErrorDynamic }
