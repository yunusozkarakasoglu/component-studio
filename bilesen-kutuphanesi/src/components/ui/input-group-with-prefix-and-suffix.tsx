/**
 * InputGroupWithPrefixAndSuffix
 * Metin prefix + suffix kombinasyonu (saf React).
 * @id 352
 * @category Form Elemanları
 * @subcategory InputGroup
 */
import { Description } from "@/components/ui/description"
import { InputGroup, InputGroupInput, InputGroupPrefix, InputGroupSuffix } from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import { TextField } from "@/components/ui/text-field"

function InputGroupWithPrefixAndSuffix() {
  return (
    <TextField className="w-full max-w-[280px]" defaultValue="10" name="price">
      <Label>Set a price</Label>
      <InputGroup>
        <InputGroupPrefix>$</InputGroupPrefix>
        <InputGroupInput className="w-full max-w-[200px]" type="number" />
        <InputGroupSuffix>USD</InputGroupSuffix>
      </InputGroup>
      <Description>What customers would pay</Description>
    </TextField>
  )
}

export { InputGroupWithPrefixAndSuffix }
