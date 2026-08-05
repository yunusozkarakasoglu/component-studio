/**
 * InputGroupWithPrefixIcon
 * İkon prefix örneği (saf React).
 * @id 350
 * @category Form Elemanları
 * @subcategory InputGroup
 */
import { Description } from "@/components/ui/description"
import { Mail } from "@/components/ui/icons"
import { InputGroup, InputGroupInput, InputGroupPrefix } from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import { TextField } from "@/components/ui/text-field"

function InputGroupWithPrefixIcon() {
  return (
    <TextField className="w-full max-w-[280px]" name="email">
      <Label>Email address</Label>
      <InputGroup>
        <InputGroupPrefix>
          <Mail className="size-4 text-muted-foreground" />
        </InputGroupPrefix>
        <InputGroupInput className="w-full max-w-[280px]" placeholder="name@email.com" />
      </InputGroup>
      <Description>We&apos;ll never share this with anyone else</Description>
    </TextField>
  )
}

export { InputGroupWithPrefixIcon }
