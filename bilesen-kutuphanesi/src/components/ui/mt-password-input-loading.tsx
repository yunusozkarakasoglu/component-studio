/**
 * MtPasswordInputLoading
 * Yükleniyor şifre girişi (saf React, Mantine kaynaklı).
 * @id 1142
 * @category Form Elemanları
 * @subcategory MtPasswordInput
 * @source mantine
 */
import { MtPasswordInput } from "@/components/ui/mt-password-input"

function MtPasswordInputLoading() {
  return <MtPasswordInput placeholder="Your password" loading disabled className="max-w-sm" />
}

export { MtPasswordInputLoading }
