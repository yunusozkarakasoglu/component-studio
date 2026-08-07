/**
 * MtPasswordInputVisibilityIcon
 * Özel görünürlük ikonu (saf React, Mantine kaynaklı).
 * @id 1146
 * @category Form Elemanları
 * @subcategory MtPasswordInput
 * @source mantine
 */
import { Eye, EyeOff } from "@/components/ui/icons"
import { MtPasswordInput } from "@/components/ui/mt-password-input"

function MtPasswordInputVisibilityIcon() {
  return (
    <MtPasswordInput
      label="Password"
      placeholder="Custom icons"
      visibilityIcon={<Eye className="size-4 text-blue-500" />}
      visibilityOffIcon={<EyeOff className="size-4 text-blue-500" />}
      className="max-w-sm"
    />
  )
}

export { MtPasswordInputVisibilityIcon }
