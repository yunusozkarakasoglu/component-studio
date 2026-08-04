/**
 * TextFieldWithError
 * Hata mesajlı alan örneği (saf React).
 * @id 294
 * @category Form Elemanları
 * @subcategory TextField
 */
import { FieldError } from "@/components/ui/field-error"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TextField } from "@/components/ui/text-field"

function TextFieldWithError() {
  return (
    <TextField isInvalid className="w-full max-w-64" name="email" type="email">
      <Label>Email</Label>
      <Input placeholder="user@example.com" />
      <FieldError>Please enter a valid email address</FieldError>
    </TextField>
  )
}

export { TextFieldWithError }
