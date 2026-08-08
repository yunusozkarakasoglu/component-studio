/**
 * MtIndicatorColors
 * Renkler (saf React, Mantine kaynaklı).
 * @id 1554
 * @category Yükleme & İlerleme
 * @subcategory MtIndicator
 * @source mantine
 */
import { MtIndicator } from "@/components/ui/mt-indicator"

function MtIndicatorColors() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <MtIndicator color="blue"><span className="flex size-10 items-center justify-center rounded-lg bg-muted">1</span></MtIndicator>
      <MtIndicator color="red"><span className="flex size-10 items-center justify-center rounded-lg bg-muted">2</span></MtIndicator>
      <MtIndicator color="green"><span className="flex size-10 items-center justify-center rounded-lg bg-muted">3</span></MtIndicator>
      <MtIndicator color="yellow"><span className="flex size-10 items-center justify-center rounded-lg bg-muted">4</span></MtIndicator>
      <MtIndicator color="grape"><span className="flex size-10 items-center justify-center rounded-lg bg-muted">5</span></MtIndicator>
      <MtIndicator color="teal"><span className="flex size-10 items-center justify-center rounded-lg bg-muted">6</span></MtIndicator>
    </div>
  )
}

export { MtIndicatorColors }
