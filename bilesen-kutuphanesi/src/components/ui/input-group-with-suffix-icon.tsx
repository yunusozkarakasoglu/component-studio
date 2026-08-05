/**
 * InputGroupWithSuffixIcon
 * İkon suffix örneği (saf React).
 * @id 351
 * @category Form Elemanları
 * @subcategory InputGroup
 */
import { Description } from "@/components/ui/description"
import { Mail } from "@/components/ui/icons"
import { InputGroup, InputGroupInput, InputGroupSuffix } from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import { TextField } from "@/components/ui/text-field"

function InputGroupWithSuffixIcon() {
  return (
    <TextField className="w-full max-w-[280px]" name="email">
      <Label>Email address</Label>
      <InputGroup>
        <InputGroupInput className="w-full max-w-[280px]" placeholder="name@email.com" />
        <InputGroupSuffix>
          <Mail className="size-4 text-muted-foreground" />
        </InputGroupSuffix>
      </InputGroup>
      <Description>We don&apos;t send spam</Description>
    </TextField>
  )
}

export { InputGroupWithSuffixIcon }
