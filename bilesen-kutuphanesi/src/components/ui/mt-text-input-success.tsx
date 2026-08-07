/**
 * MtTextInputSuccess
 * Başarı durumu (saf React, Mantine kaynaklı).
 * @id 1128
 * @category Form Elemanları
 * @subcategory MtTextInput
 * @source mantine
 */
import { MtTextInput } from "@/components/ui/mt-text-input"

function MtTextInputSuccess() {
  return <MtTextInput label="Text Input" placeholder="Text Input" success="Looks good!" className="max-w-sm" />
}

export { MtTextInputSuccess }
