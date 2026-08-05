/**
 * InputGroupWithCopySuffix
 * Kopyalama butonlu suffix örneği (saf React).
 * @id 345
 * @category Form Elemanları
 * @subcategory InputGroup
 */
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Copy } from "@/components/ui/icons"
import { InputGroup, InputGroupInput, InputGroupSuffix } from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import { TextField } from "@/components/ui/text-field"

function InputGroupWithCopySuffix() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard?.writeText("heroui.com").catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <TextField className="w-full max-w-[280px]" defaultValue="heroui.com" name="website">
      <Label>Website</Label>
      <InputGroup>
        <InputGroupInput className="w-full max-w-[280px]" />
        <InputGroupSuffix className="pe-1">
          <Button isIconOnly aria-label={copied ? "Kopyalandı" : "Kopyala"} size="sm" variant="ghost" onPress={handleCopy}>
            {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
          </Button>
        </InputGroupSuffix>
      </InputGroup>
    </TextField>
  )
}

export { InputGroupWithCopySuffix }
