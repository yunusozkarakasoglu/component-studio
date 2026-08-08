/**
 * MtIndicatorOffset
 * Mesafe (saf React, Mantine kaynaklı).
 * @id 1551
 * @category Yükleme & İlerleme
 * @subcategory MtIndicator
 * @source mantine
 */
import { MtIndicator } from "@/components/ui/mt-indicator"

function MtIndicatorOffset() {
  return (
    <div className="flex items-center gap-8">
      <MtIndicator offset={0}><span className="flex size-10 items-center justify-center rounded-lg bg-muted">0</span></MtIndicator>
      <MtIndicator offset={6}><span className="flex size-10 items-center justify-center rounded-lg bg-muted">6</span></MtIndicator>
      <MtIndicator offset={12}><span className="flex size-10 items-center justify-center rounded-lg bg-muted">12</span></MtIndicator>
    </div>
  )
}

export { MtIndicatorOffset }
