/**
 * InputGroupCustomStyles
 * Özelleştirilmiş örnek (saf React).
 * @id 354
 * @category Form Elemanları
 * @subcategory InputGroup
 */
import { Mail } from "@/components/ui/icons"
import { InputGroup, InputGroupInput, InputGroupPrefix } from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import { TextField } from "@/components/ui/text-field"

function InputGroupCustomStyles() {
  return (
    <TextField className="w-full max-w-xs" name="email">
      <Label>Work email</Label>
      <InputGroup className="rounded-xl border border-border/80 bg-background shadow-sm">
        <InputGroupPrefix>
          <Mail className="size-4 text-muted-foreground" />
        </InputGroupPrefix>
        <InputGroupInput placeholder="you@company.com" />
      </InputGroup>
    </TextField>
  )
}

export { InputGroupCustomStyles }
