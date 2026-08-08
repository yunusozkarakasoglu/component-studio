/**
 * MtIndicatorLabel
 * Etiketli (saf React, Mantine kaynaklı).
 * @id 1549
 * @category Yükleme & İlerleme
 * @subcategory MtIndicator
 * @source mantine
 */
import { MtIndicator } from "@/components/ui/mt-indicator"

function MtIndicatorLabel() {
  return (
    <div className="flex items-center gap-6">
      <MtIndicator label="3">
        <span className="flex size-10 items-center justify-center rounded-lg bg-muted text-sm">💬</span>
      </MtIndicator>
      <MtIndicator label="99+">
        <span className="flex size-10 items-center justify-center rounded-lg bg-muted text-sm">📬</span>
      </MtIndicator>
    </div>
  )
}

export { MtIndicatorLabel }
