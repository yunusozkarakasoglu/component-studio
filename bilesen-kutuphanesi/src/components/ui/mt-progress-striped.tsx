/**
 * MtProgressStriped
 * Çizgili (saf React, Mantine kaynaklı).
 * @id 1526
 * @category Yükleme & İlerleme
 * @subcategory MtProgress
 * @source mantine
 */
import { MtProgress } from "@/components/ui/mt-progress"

function MtProgressStriped() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <MtProgress value={50} striped />
      <MtProgress value={75} striped animated />
    </div>
  )
}

export { MtProgressStriped }
