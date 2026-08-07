/**
 * MtMaskInputReset
 * Sıfırlama (saf React, Mantine kaynaklı).
 * @id 1178
 * @category Form Elemanları
 * @subcategory MtMaskInput
 * @source mantine
 */
import { useRef, useState } from "react"
import { MtButton } from "@/components/ui/mt-button"
import { MtMaskInput } from "@/components/ui/mt-mask-input"

function MtMaskInputReset() {
  const [value, setValue] = useState("")
  const resetRef = useRef<HTMLInputElement>(null)

  return (
    <div className="flex max-w-sm flex-col gap-3">
      <MtMaskInput label="Value" placeholder="Type something" value={value} onChange={setValue} />
      <MtButton
        variant="outline"
        className="w-fit"
        onClick={() => {
          setValue("")
          resetRef.current?.focus()
        }}
      >
        Reset
      </MtButton>
    </div>
  )
}

export { MtMaskInputReset }
