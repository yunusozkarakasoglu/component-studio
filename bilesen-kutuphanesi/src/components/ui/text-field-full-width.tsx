/**
 * TextFieldFullWidth
 * Tam genişlik + doğrulama hatası örneği (saf React).
 * @id 291
 * @category Form Elemanları
 * @subcategory TextField
 */
import { FieldError } from "@/components/ui/field-error"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TextField } from "@/components/ui/text-field"

function TextFieldFullWidth() {
  return (
    <div className="w-[400px] space-y-4">
      <TextField fullWidth name="name">
        <Label>Your name</Label>
        <Input placeholder="John" />
      </TextField>
      <TextField fullWidth isInvalid isRequired name="password" type="password">
        <Label>Password</Label>
        <Input />
        <FieldError>Password must be longer than 8 characters</FieldError>
      </TextField>
    </div>
  )
}

export { TextFieldFullWidth }
