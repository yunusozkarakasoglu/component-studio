/**
 * InputGroupRequired
 * Zorunlu alan örnekleri — metin prefix/suffix (saf React).
 * @id 339
 * @category Form Elemanları
 * @subcategory InputGroup
 */
import { Description } from "@/components/ui/description"
import { Mail } from "@/components/ui/icons"
import { InputGroup, InputGroupInput, InputGroupPrefix, InputGroupSuffix } from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import { TextField } from "@/components/ui/text-field"

function InputGroupRequired() {
  return (
    <div className="flex flex-col gap-4">
      <TextField isRequired className="w-full max-w-[280px]" name="email">
        <Label>Email address</Label>
        <InputGroup>
          <InputGroupPrefix>
            <Mail className="size-4 text-muted-foreground" />
          </InputGroupPrefix>
          <InputGroupInput className="w-full max-w-[280px]" placeholder="name@email.com" />
        </InputGroup>
      </TextField>
      <TextField isRequired className="w-full max-w-[280px]" name="price">
        <Label>Set a price</Label>
        <InputGroup>
          <InputGroupPrefix>$</InputGroupPrefix>
          <InputGroupInput className="w-full max-w-[200px]" placeholder="0" type="number" />
          <InputGroupSuffix>USD</InputGroupSuffix>
        </InputGroup>
        <Description>What customers would pay</Description>
      </TextField>
    </div>
  )
}

export { InputGroupRequired }
