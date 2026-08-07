/**
 * MtTextareaError
 * Hata durumları (saf React, Mantine kaynaklı).
 * @id 1132
 * @category Form Elemanları
 * @subcategory MtTextarea
 * @source mantine
 */
import { MtTextarea } from "@/components/ui/mt-textarea"

function MtTextareaError() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <MtTextarea label="Boolean error" placeholder="Boolean error" error />
      <MtTextarea label="With error message" placeholder="With error message" error="Invalid name" />
    </div>
  )
}

export { MtTextareaError }
