/**
 * MtSemiCircleThickness
 * Kalınlıklar (saf React, Mantine kaynaklı).
 * @id 1543
 * @category Yükleme & İlerleme
 * @subcategory MtSemiCircleProgress
 * @source mantine
 */
import { MtSemiCircleProgress } from "@/components/ui/mt-semi-circle-progress"

function MtSemiCircleThickness() {
  return (
    <div className="flex flex-wrap items-start gap-6">
      <MtSemiCircleProgress thickness={6} value={60} label="%60" />
      <MtSemiCircleProgress thickness={12} value={60} label="%60" />
      <MtSemiCircleProgress thickness={20} value={60} label="%60" />
    </div>
  )
}

export { MtSemiCircleThickness }
