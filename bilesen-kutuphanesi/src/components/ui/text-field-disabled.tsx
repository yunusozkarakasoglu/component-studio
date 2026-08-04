/**
 * TextFieldDisabled
 * Devre dışı alan örneği (saf React).
 * @id 290
 * @category Form Elemanları
 * @subcategory TextField
 */
import { Description } from "@/components/ui/description"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TextField } from "@/components/ui/text-field"

function TextFieldDisabled() {
  return (
    <TextField isDisabled className="w-full max-w-64" name="accountId" defaultValue="USR-12345">
      <Label>Account ID</Label>
      <Input placeholder="Auto-generated" />
      <Description>This field cannot be edited</Description>
    </TextField>
  )
}

export { TextFieldDisabled }
