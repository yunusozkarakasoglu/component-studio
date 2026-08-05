/**
 * InputGroupDefault
 * Temel örnek: ikon prefix'li giriş grubu (saf React).
 * İkon kendi setimizden (Mail — GravityUI Envelope karşılığı).
 * @id 335
 * @category Form Elemanları
 * @subcategory InputGroup
 */
import { Mail } from "@/components/ui/icons"
import { InputGroup, InputGroupInput, InputGroupPrefix } from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import { TextField } from "@/components/ui/text-field"

function InputGroupDefault() {
  return (
    <TextField className="w-full max-w-[280px]" name="email">
      <Label>Email address</Label>
      <InputGroup>
        <InputGroupPrefix>
          <Mail className="size-4 text-muted-foreground" />
        </InputGroupPrefix>
        <InputGroupInput className="w-full max-w-[280px]" placeholder="name@email.com" />
      </InputGroup>
    </TextField>
  )
}

export { InputGroupDefault }
