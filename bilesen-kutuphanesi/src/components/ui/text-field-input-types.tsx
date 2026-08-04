/**
 * TextFieldInputTypes
 * Giriş tipleri örneği (password/number/email/url/tel — saf React).
 * @id 296
 * @category Form Elemanları
 * @subcategory TextField
 */
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TextField } from "@/components/ui/text-field"

function TextFieldInputTypes() {
  return (
    <div className="flex w-full max-w-64 flex-col gap-4">
      <TextField name="password" type="password">
        <Label>Password</Label>
        <Input placeholder="••••••••" />
      </TextField>

      <TextField name="age" type="number">
        <Label>Age</Label>
        <Input max="150" min="0" placeholder="21" />
      </TextField>

      <TextField name="email" type="email">
        <Label>Email</Label>
        <Input placeholder="user@example.com" />
      </TextField>

      <TextField name="website" type="url">
        <Label>Website</Label>
        <Input placeholder="https://example.com" />
      </TextField>

      <TextField name="phone" type="tel">
        <Label>Phone</Label>
        <Input placeholder="+1 (555) 000-0000" />
      </TextField>
    </div>
  )
}

export { TextFieldInputTypes }
