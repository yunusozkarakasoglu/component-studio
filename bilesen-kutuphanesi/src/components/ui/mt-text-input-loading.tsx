/**
 * MtTextInputLoading
 * Yükleniyor girişi (saf React, Mantine kaynaklı).
 * @id 1126
 * @category Form Elemanları
 * @subcategory MtTextInput
 * @source mantine
 */
import { MtTextInput } from "@/components/ui/mt-text-input"

function MtTextInputLoading() {
  return <MtTextInput placeholder="Your email" loading className="max-w-sm" />
}

export { MtTextInputLoading }
