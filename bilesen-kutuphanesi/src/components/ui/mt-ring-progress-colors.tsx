/**
 * MtRingProgressColors
 * Renkler (saf React, Mantine kaynaklı).
 * @id 1536
 * @category Yükleme & İlerleme
 * @subcategory MtRingProgress
 * @source mantine
 */
import { MtRingProgress } from "@/components/ui/mt-ring-progress"

function MtRingProgressColors() {
  return (
    <div className="flex flex-wrap items-center gap-5">
      <MtRingProgress sections={[{ value: 45, color: "#3b82f6" }]} />
      <MtRingProgress sections={[{ value: 65, color: "#10b981" }]} />
      <MtRingProgress sections={[{ value: 85, color: "#f59e0b" }]} />
      <MtRingProgress sections={[{ value: 35, color: "#ef4444" }]} />
      <MtRingProgress sections={[{ value: 55, color: "#8b5cf6" }]} />
    </div>
  )
}

export { MtRingProgressColors }
