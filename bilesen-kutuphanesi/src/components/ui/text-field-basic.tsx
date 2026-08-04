/**
 * TextFieldBasic
 * Temel örnek: Label + Input (saf React).
 * @id 286
 * @category Form Elemanları
 * @subcategory TextField
 */
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TextField } from "@/components/ui/text-field"

function TextFieldBasic() {
  return (
    <TextField className="w-full max-w-64" name="email" type="email">
      <Label>Email</Label>
      <Input placeholder="Enter your email" />
    </TextField>
  )
}

export { TextFieldBasic }
