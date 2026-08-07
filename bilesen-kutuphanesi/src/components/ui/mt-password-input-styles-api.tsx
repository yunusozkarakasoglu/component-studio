/**
 * MtPasswordInputStylesApi
 * Styles API — boyut (saf React, Mantine kaynaklı).
 * @id 1149
 * @category Form Elemanları
 * @subcategory MtPasswordInput
 * @source mantine
 */
import { MtPasswordInput } from "@/components/ui/mt-password-input"

function MtPasswordInputStylesApi() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <MtPasswordInput label="Small" placeholder="Small password" size="sm" />
      <MtPasswordInput label="Large" placeholder="Large password" size="lg" />
    </div>
  )
}

export { MtPasswordInputStylesApi }
