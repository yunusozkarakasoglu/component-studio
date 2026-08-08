/**
 * MtRingProgressLabel
 * Etiketli (saf React, Mantine kaynaklı).
 * @id 1535
 * @category Yükleme & İlerleme
 * @subcategory MtRingProgress
 * @source mantine
 */
import { MtRingProgress } from "@/components/ui/mt-ring-progress"

function MtRingProgressLabel() {
  return (
    <MtRingProgress sections={[{ value: 70, color: "#10b981" }]} label="%70" />
  )
}

export { MtRingProgressLabel }
