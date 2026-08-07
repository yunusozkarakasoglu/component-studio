/**
 * MtInputFocusStyles
 * Özel odak stilleri (saf React, Mantine kaynaklı).
 * @id 1202
 * @category Form Elemanları
 * @subcategory MtInput
 * @source mantine
 */
import { MtInput } from "@/components/ui/mt-input"

function MtInputFocusStyles() {
  return (
    <MtInput
      placeholder="Focus me"
      className="max-w-sm focus-visible:border-purple-500 focus-visible:ring-purple-500/30"
    />
  )
}

export { MtInputFocusStyles }
