/**
 * InputGroupPasswordToggle
 * Şifre görünürlük değiştirme örneği (saf React).
 * @id 347
 * @category Form Elemanları
 * @subcategory InputGroup
 */
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff } from "@/components/ui/icons"
import { InputGroup, InputGroupInput, InputGroupSuffix } from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import { TextField } from "@/components/ui/text-field"

function InputGroupPasswordToggle() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <TextField className="w-full max-w-[280px]" name="password">
      <Label>Password</Label>
      <InputGroup>
        <InputGroupInput
          className="w-full max-w-[280px]"
          type={isVisible ? "text" : "password"}
          defaultValue={isVisible ? "87$2h.3diua" : ""}
          placeholder={isVisible ? "" : "••••••••"}
        />
        <InputGroupSuffix className="pe-1">
          <Button
            isIconOnly
            aria-label={isVisible ? "Hide password" : "Show password"}
            size="sm"
            variant="ghost"
            onPress={() => setIsVisible(!isVisible)}
          >
            {isVisible ? <Eye className="size-4" /> : <EyeOff className="size-4" />}
          </Button>
        </InputGroupSuffix>
      </InputGroup>
    </TextField>
  )
}

export { InputGroupPasswordToggle }
