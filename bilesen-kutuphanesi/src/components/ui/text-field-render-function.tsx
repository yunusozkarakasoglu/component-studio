/**
 * TextFieldRenderFunction
 * render prop örneği — kök DOM override (saf React).
 * @id 297
 * @category Form Elemanları
 * @subcategory TextField
 */
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TextField } from "@/components/ui/text-field"

function TextFieldRenderFunction() {
  return (
    <TextField
      className="w-full max-w-64"
      name="email"
      render={(props) => <div {...props} data-custom="foo" />}
      type="email"
    >
      <Label>Email</Label>
      <Input placeholder="Enter your email" />
    </TextField>
  )
}

export { TextFieldRenderFunction }
