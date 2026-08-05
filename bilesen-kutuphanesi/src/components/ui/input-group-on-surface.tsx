/**
 * InputGroupOnSurface
 * Yüzey (Surface) üzerinde secondary variant örneği (saf React).
 * @id 337
 * @category Form Elemanları
 * @subcategory InputGroup
 */
import { Description } from "@/components/ui/description"
import { Mail } from "@/components/ui/icons"
import { InputGroup, InputGroupInput, InputGroupPrefix } from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import { TextField } from "@/components/ui/text-field"

function InputGroupOnSurface() {
  return (
    <div className="rounded-2xl bg-muted/40 p-6">
      <TextField className="w-full max-w-[280px]" name="email">
        <Label>Email address</Label>
        <InputGroup variant="secondary">
          <InputGroupPrefix>
            <Mail className="size-4 text-muted-foreground" />
          </InputGroupPrefix>
          <InputGroupInput className="w-full max-w-[280px]" placeholder="name@email.com" />
        </InputGroup>
        <Description>We&apos;ll never share this with anyone else</Description>
      </TextField>
    </div>
  )
}

export { InputGroupOnSurface }
