/**
 * MtIndicatorProcessing
 * İşleme animasyonu (saf React, Mantine kaynaklı).
 * @id 1552
 * @category Yükleme & İlerleme
 * @subcategory MtIndicator
 * @source mantine
 */
import { MtIndicator } from "@/components/ui/mt-indicator"

function MtIndicatorProcessing() {
  return (
    <div className="flex items-center gap-6">
      <MtIndicator processing color="green">
        <span className="flex size-10 items-center justify-center rounded-lg bg-muted">●</span>
      </MtIndicator>
      <MtIndicator processing color="red">
        <span className="flex size-10 items-center justify-center rounded-lg bg-muted">●</span>
      </MtIndicator>
    </div>
  )
}

export { MtIndicatorProcessing }
