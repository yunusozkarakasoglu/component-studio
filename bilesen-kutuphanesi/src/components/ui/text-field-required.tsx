/**
 * TextFieldRequired
 * Zorunlu alan örneği (saf React).
 * @id 289
 * @category Form Elemanları
 * @subcategory TextField
 */
import { Description } from "@/components/ui/description"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TextField } from "@/components/ui/text-field"

function TextFieldRequired() {
  return (
    <TextField isRequired className="w-full max-w-64" name="fullName">
      <Label>Full Name</Label>
      <Input placeholder="John Doe" />
      <Description>This field is required</Description>
    </TextField>
  )
}

export { TextFieldRequired }
