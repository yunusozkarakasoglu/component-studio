/**
 * MtRingProgressSections
 * Çoklu bölüm (saf React, Mantine kaynaklı).
 * @id 1531
 * @category Yükleme & İlerleme
 * @subcategory MtRingProgress
 * @source mantine
 */
import { MtRingProgress } from "@/components/ui/mt-ring-progress"

function MtRingProgressSections() {
  return (
    <MtRingProgress
      sections={[
        { value: 40, color: "#06b6d4" },
        { value: 25, color: "#3b82f6" },
        { value: 15, color: "#8b5cf6" },
      ]}
    />
  )
}

export { MtRingProgressSections }
