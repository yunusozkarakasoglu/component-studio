/**
 * InputGroupDisabled
 * Devre dışı alan örnekleri (saf React).
 * @id 340
 * @category Form Elemanları
 * @subcategory InputGroup
 */
import { Mail } from "@/components/ui/icons"
import { InputGroup, InputGroupInput, InputGroupPrefix, InputGroupSuffix } from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import { TextField } from "@/components/ui/text-field"

function InputGroupDisabled() {
  return (
    <div className="flex flex-col gap-4">
      <TextField isDisabled className="w-full max-w-[280px]" defaultValue="name@email.com" name="email">
        <Label>Email address</Label>
        <InputGroup>
          <InputGroupPrefix>
            <Mail className="size-4 text-muted-foreground" />
          </InputGroupPrefix>
          <InputGroupInput className="w-full max-w-[280px]" />
        </InputGroup>
      </TextField>
      <TextField isDisabled className="w-full max-w-[280px]" defaultValue="10" name="price">
        <Label>Set a price</Label>
        <InputGroup>
          <InputGroupPrefix>$</InputGroupPrefix>
          <InputGroupInput className="w-full max-w-[200px]" type="number" />
          <InputGroupSuffix>USD</InputGroupSuffix>
        </InputGroup>
      </TextField>
    </div>
  )
}

export { InputGroupDisabled }
