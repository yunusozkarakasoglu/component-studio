/**
 * InputGroupVariants
 * primary/secondary variant örneği (saf React).
 * @id 336
 * @category Form Elemanları
 * @subcategory InputGroup
 */
import { Mail } from "@/components/ui/icons"
import { InputGroup, InputGroupInput, InputGroupPrefix } from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import { TextField } from "@/components/ui/text-field"

function InputGroupVariants() {
  return (
    <div className="flex flex-col gap-4">
      <TextField className="w-[280px]" name="primary">
        <Label>Primary variant</Label>
        <InputGroup variant="primary">
          <InputGroupPrefix>
            <Mail className="size-4 text-muted-foreground" />
          </InputGroupPrefix>
          <InputGroupInput placeholder="name@email.com" />
        </InputGroup>
      </TextField>
      <TextField className="w-[280px]" name="secondary">
        <Label>Secondary variant</Label>
        <InputGroup variant="secondary">
          <InputGroupPrefix>
            <Mail className="size-4 text-muted-foreground" />
          </InputGroupPrefix>
          <InputGroupInput placeholder="name@email.com" />
        </InputGroup>
      </TextField>
    </div>
  )
}

export { InputGroupVariants }
