/**
 * MtMaskInputUsage
 * Temel kullanım — telefon maskesi (saf React, Mantine kaynaklı).
 * @id 1171
 * @category Form Elemanları
 * @subcategory MtMaskInput
 * @source mantine
 */
import { MtMaskInput } from "@/components/ui/mt-mask-input"

const phoneMask = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 10)
  const parts = [digits.slice(0, 3), digits.slice(3, 6), digits.slice(6, 8), digits.slice(8, 10)]
  return parts.filter(Boolean).join(" ")
}

function MtMaskInputUsage() {
  return (
    <MtMaskInput
      label="Phone number"
      placeholder="555 000 00 00"
      mask={phoneMask}
      className="max-w-sm"
    />
  )
}

export { MtMaskInputUsage }
