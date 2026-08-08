/**
 * MtIndicatorSizes
 * Boyutlar (saf React, Mantine kaynaklı).
 * @id 1553
 * @category Yükleme & İlerleme
 * @subcategory MtIndicator
 * @source mantine
 */
import { MtIndicator } from "@/components/ui/mt-indicator"

function MtIndicatorSizes() {
  return (
    <div className="flex items-center gap-8">
      <MtIndicator size={8}><span className="flex size-10 items-center justify-center rounded-lg bg-muted">S</span></MtIndicator>
      <MtIndicator size={14}><span className="flex size-10 items-center justify-center rounded-lg bg-muted">M</span></MtIndicator>
      <MtIndicator size={20}><span className="flex size-10 items-center justify-center rounded-lg bg-muted">L</span></MtIndicator>
    </div>
  )
}

export { MtIndicatorSizes }
