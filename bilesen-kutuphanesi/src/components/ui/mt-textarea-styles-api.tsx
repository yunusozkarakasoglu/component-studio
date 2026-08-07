/**
 * MtTextareaStylesApi
 * Styles API — yükseklik (saf React, Mantine kaynaklı).
 * @id 1138
 * @category Form Elemanları
 * @subcategory MtTextarea
 * @source mantine
 */
import { MtTextarea } from "@/components/ui/mt-textarea"

function MtTextareaStylesApi() {
  return (
    <MtTextarea label="Tall textarea" placeholder="Tall textarea" minRows={8} className="max-w-sm" />
  )
}

export { MtTextareaStylesApi }
