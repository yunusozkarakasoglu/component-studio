/**
 * FieldErrorBasic
 * Temel örnek: kullanıcı adı doğrulama hatası (saf React).
 * @id 378
 * @category Form Elemanları
 * @subcategory FieldError
 */
import { useState } from "react"
import { FieldError } from "@/components/ui/field-error"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TextField } from "@/components/ui/text-field"

function FieldErrorBasic() {
  const [value, setValue] = useState("")
  const isInvalid = value.length > 0 && value.length < 3

  return (
    <TextField className="w-64" isInvalid={isInvalid} value={value} onChange={setValue}>
      <Label htmlFor="username">Username</Label>
      <Input id="username" placeholder="Enter username" />
      <FieldError>Username must be at least 3 characters</FieldError>
    </TextField>
  )
}

export { FieldErrorBasic }
