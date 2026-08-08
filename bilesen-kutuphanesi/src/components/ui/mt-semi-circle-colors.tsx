/**
 * MtSemiCircleColors
 * Renkler (saf React, Mantine kaynaklı).
 * @id 1544
 * @category Yükleme & İlerleme
 * @subcategory MtSemiCircleProgress
 * @source mantine
 */
import { MtSemiCircleProgress } from "@/components/ui/mt-semi-circle-progress"

function MtSemiCircleColors() {
  return (
    <div className="flex flex-wrap items-start gap-6">
      <MtSemiCircleProgress value={45} color="#3b82f6" label="%45" />
      <MtSemiCircleProgress value={65} color="#10b981" label="%65" />
      <MtSemiCircleProgress value={85} color="#f59e0b" label="%85" />
      <MtSemiCircleProgress value={30} color="#ef4444" label="%30" />
    </div>
  )
}

export { MtSemiCircleColors }
