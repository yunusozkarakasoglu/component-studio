/**
 * MtTextareaLoading
 * Yükleniyor alanı (saf React, Mantine kaynaklı).
 * @id 1134
 * @category Form Elemanları
 * @subcategory MtTextarea
 * @source mantine
 */
import { MtTextarea } from "@/components/ui/mt-textarea"

function MtTextareaLoading() {
  return <MtTextarea placeholder="Loading textarea" loading disabled className="max-w-sm" />
}

export { MtTextareaLoading }
