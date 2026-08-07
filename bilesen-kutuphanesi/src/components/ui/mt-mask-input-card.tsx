/**
 * MtMaskInputCard
 * Kart numarası maskesi (saf React, Mantine kaynaklı).
 * @id 1176
 * @category Form Elemanları
 * @subcategory MtMaskInput
 * @source mantine
 */
import { MtMaskInput } from "@/components/ui/mt-mask-input"

const cardMask = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 16)
  const groups = digits.match(/.{1,4}/g) ?? []
  return groups.join(" ")
}

function MtMaskInputCard() {
  return (
    <MtMaskInput
      label="Card number"
      placeholder="1234 5678 9012 3456"
      mask={cardMask}
      className="max-w-sm"
    />
  )
}

export { MtMaskInputCard }
