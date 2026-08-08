/**
 * MtSemiCircleSize
 * Boyutlar (saf React, Mantine kaynaklı).
 * @id 1542
 * @category Yükleme & İlerleme
 * @subcategory MtSemiCircleProgress
 * @source mantine
 */
import { MtSemiCircleProgress } from "@/components/ui/mt-semi-circle-progress"

function MtSemiCircleSize() {
  return (
    <div className="flex flex-wrap items-start gap-6">
      <MtSemiCircleProgress size={140} value={60} label="%60" />
      <MtSemiCircleProgress size={200} value={60} label="%60" />
      <MtSemiCircleProgress size={260} value={60} label="%60" />
    </div>
  )
}

export { MtSemiCircleSize }
