/**
 * MtProgressSizes
 * Boyutlar (saf React, Mantine kaynaklı).
 * @id 1524
 * @category Yükleme & İlerleme
 * @subcategory MtProgress
 * @source mantine
 */
import { MtProgress } from "@/components/ui/mt-progress"

function MtProgressSizes() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <MtProgress value={70} size="xs" />
      <MtProgress value={70} size="sm" />
      <MtProgress value={70} size="md" />
      <MtProgress value={70} size="lg" />
      <MtProgress value={70} size="xl" />
    </div>
  )
}

export { MtProgressSizes }
