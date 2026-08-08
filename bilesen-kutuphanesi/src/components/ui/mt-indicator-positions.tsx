/**
 * MtIndicatorPositions
 * Konumlar (saf React, Mantine kaynaklı).
 * @id 1550
 * @category Yükleme & İlerleme
 * @subcategory MtIndicator
 * @source mantine
 */
import { MtIndicator } from "@/components/ui/mt-indicator"

function MtIndicatorPositions() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <MtIndicator position="top-start" color="blue"><span className="flex size-10 items-center justify-center rounded-lg bg-muted">1</span></MtIndicator>
      <MtIndicator position="top-end" color="red"><span className="flex size-10 items-center justify-center rounded-lg bg-muted">2</span></MtIndicator>
      <MtIndicator position="bottom-start" color="green"><span className="flex size-10 items-center justify-center rounded-lg bg-muted">3</span></MtIndicator>
      <MtIndicator position="bottom-end" color="grape"><span className="flex size-10 items-center justify-center rounded-lg bg-muted">4</span></MtIndicator>
    </div>
  )
}

export { MtIndicatorPositions }
