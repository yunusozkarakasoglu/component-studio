/**
 * TextFieldWithDescription
 * Açıklamalı alan örneği (saf React).
 * @id 288
 * @category Form Elemanları
 * @subcategory TextField
 */
import { Description } from "@/components/ui/description"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TextField } from "@/components/ui/text-field"

function TextFieldWithDescription() {
  return (
    <TextField className="w-full max-w-64" name="username">
      <Label>Username</Label>
      <Input placeholder="Enter username" />
      <Description>Choose a unique username for your account</Description>
    </TextField>
  )
}

export { TextFieldWithDescription }
