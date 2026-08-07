/**
 * MtPasswordInputSuccess
 * Başarı durumu (saf React, Mantine kaynaklı).
 * @id 1144
 * @category Form Elemanları
 * @subcategory MtPasswordInput
 * @source mantine
 */
import { MtPasswordInput } from "@/components/ui/mt-password-input"

function MtPasswordInputSuccess() {
  return <MtPasswordInput label="Password" placeholder="Your password" success="Password is strong" className="max-w-sm" />
}

export { MtPasswordInputSuccess }
