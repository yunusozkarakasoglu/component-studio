/**
 * InputGroupWithTextPrefix
 * Metin prefix örneği: https:// (saf React).
 * @id 342
 * @category Form Elemanları
 * @subcategory InputGroup
 */
import { InputGroup, InputGroupInput, InputGroupPrefix } from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import { TextField } from "@/components/ui/text-field"

function InputGroupWithTextPrefix() {
  return (
    <TextField className="w-full max-w-[280px]" defaultValue="heroui.com" name="website">
      <Label>Website</Label>
      <InputGroup>
        <InputGroupPrefix>https://</InputGroupPrefix>
        <InputGroupInput className="w-full max-w-[280px]" />
      </InputGroup>
    </TextField>
  )
}

export { InputGroupWithTextPrefix }
