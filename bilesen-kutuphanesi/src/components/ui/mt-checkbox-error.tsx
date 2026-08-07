/**
 * MtCheckboxError
 * Hata durumu (saf React, Mantine kaynaklı).
 * @id 1217
 * @category Seçim
 * @subcategory MtCheckbox
 * @source mantine
 */
import { MtCheckbox } from "@/components/ui/mt-checkbox"

function MtCheckboxError() {
  return (
    <div className="flex flex-col gap-3">
      <MtCheckbox label="Required agreement" error="You must accept the terms" />
    </div>
  )
}

export { MtCheckboxError }
