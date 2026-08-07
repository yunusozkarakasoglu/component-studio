/**
 * MtMaskInputTransform
 * Dönüşüm maskesi — büyük harf (saf React, Mantine kaynaklı).
 * @id 1179
 * @category Form Elemanları
 * @subcategory MtMaskInput
 * @source mantine
 */
import { MtMaskInput } from "@/components/ui/mt-mask-input"

const upperMask = (value: string) => value.toUpperCase()

function MtMaskInputTransform() {
  return (
    <MtMaskInput
      label="Uppercase"
      placeholder="Type lowercase → uppercase"
      mask={upperMask}
      className="max-w-sm"
    />
  )
}

export { MtMaskInputTransform }
