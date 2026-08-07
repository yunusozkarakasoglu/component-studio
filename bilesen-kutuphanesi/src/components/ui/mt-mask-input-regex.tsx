/**
 * MtMaskInputRegex
 * Regex maskesi — kod (saf React, Mantine kaynaklı).
 * @id 1177
 * @category Form Elemanları
 * @subcategory MtMaskInput
 * @source mantine
 */
import { MtMaskInput } from "@/components/ui/mt-mask-input"

const codeMask = (value: string) => value.replace(/[^a-zA-Z0-9-]/g, "").toUpperCase().slice(0, 10)

function MtMaskInputRegex() {
  return (
    <MtMaskInput
      label="Product code"
      placeholder="ABC-123-DEF"
      mask={codeMask}
      className="max-w-sm"
    />
  )
}

export { MtMaskInputRegex }
