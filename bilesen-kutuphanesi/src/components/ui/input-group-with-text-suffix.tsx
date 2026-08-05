/**
 * InputGroupWithTextSuffix
 * Metin suffix örneği: .com (saf React).
 * @id 343
 * @category Form Elemanları
 * @subcategory InputGroup
 */
import { InputGroup, InputGroupInput, InputGroupSuffix } from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import { TextField } from "@/components/ui/text-field"

function InputGroupWithTextSuffix() {
  return (
    <TextField className="w-full max-w-[280px]" defaultValue="heroui" name="website">
      <Label>Website</Label>
      <InputGroup>
        <InputGroupInput className="w-full max-w-[280px]" />
        <InputGroupSuffix>.com</InputGroupSuffix>
      </InputGroup>
    </TextField>
  )
}

export { InputGroupWithTextSuffix }
