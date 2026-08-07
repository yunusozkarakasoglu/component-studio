/**
 * MtCheckboxSize
 * Boyutlar (saf React, Mantine kaynaklı).
 * @id 1219
 * @category Seçim
 * @subcategory MtCheckbox
 * @source mantine
 */
import { MtCheckbox } from "@/components/ui/mt-checkbox"

function MtCheckboxSize() {
  return (
    <div className="flex items-center gap-4">
      <MtCheckbox label="xs" size="xs" />
      <MtCheckbox label="sm" size="sm" />
      <MtCheckbox label="md" size="md" />
      <MtCheckbox label="lg" size="lg" />
      <MtCheckbox label="xl" size="xl" />
    </div>
  )
}

export { MtCheckboxSize }
