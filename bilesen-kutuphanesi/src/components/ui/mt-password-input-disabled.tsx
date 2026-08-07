/**
 * MtPasswordInputDisabled
 * Devre dışı şifre girişi (saf React, Mantine kaynaklı).
 * @id 1140
 * @category Form Elemanları
 * @subcategory MtPasswordInput
 * @source mantine
 */
import { MtPasswordInput } from "@/components/ui/mt-password-input"

function MtPasswordInputDisabled() {
  return <MtPasswordInput disabled label="Disabled password input" placeholder="Disabled password input" className="max-w-sm" />
}

export { MtPasswordInputDisabled }
