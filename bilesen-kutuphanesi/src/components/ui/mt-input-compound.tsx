/**
 * MtInputCompound
 * Compound — label + description + input (saf React, Mantine kaynaklı).
 * @id 1200
 * @category Form Elemanları
 * @subcategory MtInput
 * @source mantine
 */
import { MtInput, MtInputWrapper } from "@/components/ui/mt-input"

function MtInputCompound() {
  return (
    <MtInputWrapper
      label="Email"
      description="We will not share your email"
      required
      className="max-w-sm"
    >
      <MtInput placeholder="your@email.com" type="email" />
    </MtInputWrapper>
  )
}

export { MtInputCompound }
