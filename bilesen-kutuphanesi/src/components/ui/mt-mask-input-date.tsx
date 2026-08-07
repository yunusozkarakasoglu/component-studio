/**
 * MtMaskInputDate
 * Tarih maskesi (saf React, Mantine kaynaklı).
 * @id 1175
 * @category Form Elemanları
 * @subcategory MtMaskInput
 * @source mantine
 */
import { MtMaskInput } from "@/components/ui/mt-mask-input"

const dateMask = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 8)
  const parts = [digits.slice(0, 2), digits.slice(2, 4), digits.slice(4, 8)]
  return parts.filter(Boolean).join(".")
}

function MtMaskInputDate() {
  return (
    <MtMaskInput
      label="Date of birth"
      placeholder="DD.MM.YYYY"
      mask={dateMask}
      className="max-w-sm"
    />
  )
}

export { MtMaskInputDate }
