/**
 * InputGroupFullWidth
 * Tam genişlik örneği — ikon prefix/suffix (saf React).
 * @id 341
 * @category Form Elemanları
 * @subcategory InputGroup
 */
import { Eye, Mail } from "@/components/ui/icons"
import { InputGroup, InputGroupInput, InputGroupPrefix, InputGroupSuffix } from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import { TextField } from "@/components/ui/text-field"

function InputGroupFullWidth() {
  return (
    <div className="w-[400px] space-y-4">
      <TextField fullWidth name="email">
        <Label>Email address</Label>
        <InputGroup fullWidth>
          <InputGroupPrefix>
            <Mail className="size-4 text-muted-foreground" />
          </InputGroupPrefix>
          <InputGroupInput placeholder="name@email.com" />
        </InputGroup>
      </TextField>
      <TextField fullWidth name="password">
        <Label>Password</Label>
        <InputGroup fullWidth>
          <InputGroupInput placeholder="Enter password" type="password" />
          <InputGroupSuffix>
            <Eye className="size-4 text-muted-foreground" />
          </InputGroupSuffix>
        </InputGroup>
      </TextField>
    </div>
  )
}

export { InputGroupFullWidth }
