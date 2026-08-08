/**
 * MtRingProgressUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1530
 * @category Yükleme & İlerleme
 * @subcategory MtRingProgress
 * @source mantine
 */
import { MtRingProgress } from "@/components/ui/mt-ring-progress"

function MtRingProgressUsage() {
  return <MtRingProgress sections={[{ value: 65, color: "#3b82f6" }]} />
}

export { MtRingProgressUsage }
