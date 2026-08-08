/**
 * MtRingProgressSize
 * Boyut (saf React, Mantine kaynaklı).
 * @id 1532
 * @category Yükleme & İlerleme
 * @subcategory MtRingProgress
 * @source mantine
 */
import { MtRingProgress } from "@/components/ui/mt-ring-progress"

function MtRingProgressSize() {
  return (
    <div className="flex items-end gap-5">
      <MtRingProgress size={80} sections={[{ value: 70, color: "#3b82f6" }]} />
      <MtRingProgress size={120} sections={[{ value: 70, color: "#3b82f6" }]} />
      <MtRingProgress size={160} sections={[{ value: 70, color: "#3b82f6" }]} />
    </div>
  )
}

export { MtRingProgressSize }
