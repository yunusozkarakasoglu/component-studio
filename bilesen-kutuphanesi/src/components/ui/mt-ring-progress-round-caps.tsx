/**
 * MtRingProgressRoundCaps
 * Yuvarlak uçlar (saf React, Mantine kaynaklı).
 * @id 1534
 * @category Yükleme & İlerleme
 * @subcategory MtRingProgress
 * @source mantine
 */
import { MtRingProgress } from "@/components/ui/mt-ring-progress"

function MtRingProgressRoundCaps() {
  return (
    <div className="flex items-center gap-5">
      <MtRingProgress roundCaps sections={[{ value: 80, color: "#3b82f6" }]} />
      <MtRingProgress sections={[{ value: 80, color: "#3b82f6" }]} />
    </div>
  )
}

export { MtRingProgressRoundCaps }
