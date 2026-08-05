/**
 * InputGroupIconPrefixTextSuffix
 * İkon prefix + metin suffix kombinasyonu (saf React).
 * @id 344
 * @category Form Elemanları
 * @subcategory InputGroup
 */
import { Globe } from "@/components/ui/icons"
import { InputGroup, InputGroupInput, InputGroupPrefix, InputGroupSuffix } from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import { TextField } from "@/components/ui/text-field"

function InputGroupIconPrefixTextSuffix() {
  return (
    <TextField className="w-full max-w-[280px]" defaultValue="heroui" name="website">
      <Label>Website</Label>
      <InputGroup>
        <InputGroupPrefix>
          <Globe className="size-4 text-muted-foreground" />
        </InputGroupPrefix>
        <InputGroupInput className="w-full max-w-[280px]" />
        <InputGroupSuffix>.com</InputGroupSuffix>
      </InputGroup>
    </TextField>
  )
}

export { InputGroupIconPrefixTextSuffix }
