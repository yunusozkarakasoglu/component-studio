/**
 * InputGroupWithTextArea
 * TextArea'lı giriş grubu örneği — prompt alanı (saf React).
 * Tooltip bileşeni gelmediği için butonlar tooltipsiz kullanılır.
 * @id 353
 * @category Form Elemanları
 * @subcategory InputGroup
 */
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp, AtSign, Mic, Plus, Plug } from "@/components/ui/icons"
import { InputGroup, InputGroupPrefix, InputGroupSuffix, InputGroupTextArea } from "@/components/ui/input-group"
import { TextField } from "@/components/ui/text-field"

function InputGroupWithTextArea() {
  const [value, setValue] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = () => {
    if (!value.trim()) return
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setValue("")
    }, 1000)
  }

  return (
    <TextField fullWidth aria-label="Prompt input" className="w-sm sm:w-lg" name="prompt">
      <InputGroup fullWidth className="flex flex-col gap-2 rounded-3xl py-2">
        <InputGroupPrefix className="px-3 py-0">
          <Button aria-label="Add context" size="sm" variant="outline">
            <AtSign />
            Add Context
          </Button>
        </InputGroupPrefix>
        <InputGroupTextArea
          className="w-full resize-none px-3.5 py-0"
          placeholder="Assign tasks or ask anything..."
          rows={5}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <InputGroupSuffix className="flex w-full items-center gap-1.5 px-3 py-0">
          <Button isIconOnly aria-label="Attach file" size="sm" variant="tertiary">
            <Plus />
          </Button>
          <Button isIconOnly aria-label="Connect Apps" size="sm" variant="tertiary">
            <Plug />
          </Button>
          <div className="ms-auto flex items-center gap-1.5">
            <Button isIconOnly aria-label="Voice input" size="sm" variant="ghost">
              <Mic />
            </Button>
            <Button
              isIconOnly
              aria-label="Send prompt"
              isDisabled={!value.trim()}
              isPending={isSubmitting}
              onPress={handleSubmit}
            >
              {({ isPending }) => (isPending ? <ArrowUp /> : <ArrowUp />)}
            </Button>
          </div>
        </InputGroupSuffix>
      </InputGroup>
    </TextField>
  )
}

export { InputGroupWithTextArea }
