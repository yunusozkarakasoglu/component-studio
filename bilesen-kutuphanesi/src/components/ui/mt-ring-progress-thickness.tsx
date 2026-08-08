/**
 * MtRingProgressThickness
 * Kalınlık (saf React, Mantine kaynaklı).
 * @id 1533
 * @category Yükleme & İlerleme
 * @subcategory MtRingProgress
 * @source mantine
 */
import { MtRingProgress } from "@/components/ui/mt-ring-progress"

function MtRingProgressThickness() {
  return (
    <div className="flex items-center gap-5">
      <MtRingProgress thickness={6} sections={[{ value: 60, color: "#3b82f6" }]} />
      <MtRingProgress thickness={12} sections={[{ value: 60, color: "#3b82f6" }]} />
      <MtRingProgress thickness={20} sections={[{ value: 60, color: "#3b82f6" }]} />
    </div>
  )
}

export { MtRingProgressThickness }
