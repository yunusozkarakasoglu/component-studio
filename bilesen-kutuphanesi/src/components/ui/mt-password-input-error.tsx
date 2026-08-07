/**
 * MtPasswordInputError
 * Hata durumu (saf React, Mantine kaynaklı).
 * @id 1141
 * @category Form Elemanları
 * @subcategory MtPasswordInput
 * @source mantine
 */
import { MtPasswordInput } from "@/components/ui/mt-password-input"

function MtPasswordInputError() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <MtPasswordInput label="Boolean error" placeholder="Boolean error" error />
      <MtPasswordInput label="With error message" placeholder="With error message" error="Password is too short" />
    </div>
  )
}

export { MtPasswordInputError }
