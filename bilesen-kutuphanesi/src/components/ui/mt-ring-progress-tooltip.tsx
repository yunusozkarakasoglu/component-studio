/**
 * MtRingProgressTooltip
 * Araç ipucu (saf React, Mantine kaynaklı).
 * @id 1537
 * @category Yükleme & İlerleme
 * @subcategory MtRingProgress
 * @source mantine
 */
import { MtRingProgress } from "@/components/ui/mt-ring-progress"
import { MtTooltip } from "@/components/ui/mt-tooltip"

function MtRingProgressTooltip() {
  return (
    <div className="flex items-center gap-5">
      <MtTooltip label="40% — completed tasks">
        <MtRingProgress sections={[{ value: 40, color: "#06b6d4" }]} />
      </MtTooltip>
      <MtTooltip label="60% — in review">
        <MtRingProgress sections={[{ value: 60, color: "#3b82f6" }]} />
      </MtTooltip>
    </div>
  )
}

export { MtRingProgressTooltip }
