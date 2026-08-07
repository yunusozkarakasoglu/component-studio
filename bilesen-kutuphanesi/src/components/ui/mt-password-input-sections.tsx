/**
 * MtPasswordInputSections
 * Sol bölüm — kilit ikonu (saf React, Mantine kaynaklı).
 * @id 1143
 * @category Form Elemanları
 * @subcategory MtPasswordInput
 * @source mantine
 */
import { Lock } from "@/components/ui/icons"
import { MtPasswordInput } from "@/components/ui/mt-password-input"

function MtPasswordInputSections() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <MtPasswordInput leftSection={<Lock className="size-4" />} label="Password" placeholder="Your password" />
    </div>
  )
}

export { MtPasswordInputSections }
