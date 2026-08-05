/**
 * InputGroupInvalid
 * Doğrulama hatası örnekleri (saf React).
 * @id 349
 * @category Form Elemanları
 * @subcategory InputGroup
 */
import { FieldError } from "@/components/ui/field-error"
import { Mail } from "@/components/ui/icons"
import { InputGroup, InputGroupInput, InputGroupPrefix, InputGroupSuffix } from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import { TextField } from "@/components/ui/text-field"

function InputGroupInvalid() {
  return (
    <div className="flex flex-col gap-4">
      <TextField isInvalid isRequired className="w-full max-w-[280px]" name="email">
        <Label>Email address</Label>
        <InputGroup>
          <InputGroupPrefix>
            <Mail className="size-4 text-muted-foreground" />
          </InputGroupPrefix>
          <InputGroupInput className="w-full max-w-[280px]" placeholder="name@email.com" />
        </InputGroup>
        <FieldError>Please enter a valid email address</FieldError>
      </TextField>
      <TextField isInvalid isRequired className="w-full max-w-[280px]" name="price">
        <Label>Set a price</Label>
        <InputGroup>
          <InputGroupPrefix>$</InputGroupPrefix>
          <InputGroupInput className="w-full max-w-[200px]" placeholder="0" type="number" />
          <InputGroupSuffix>USD</InputGroupSuffix>
        </InputGroup>
        <FieldError>Price must be greater than 0</FieldError>
      </TextField>
    </div>
  )
}

export { InputGroupInvalid }
