/**
 * MtProgressLabels
 * Etiketli (saf React, Mantine kaynaklı).
 * @id 1528
 * @category Yükleme & İlerleme
 * @subcategory MtProgress
 * @source mantine
 */
import { MtProgress } from "@/components/ui/mt-progress"

function MtProgressLabels() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <MtProgress value={25} label="25%" color="blue" size="lg" />
      <MtProgress value={62} label="62%" color="teal" size="lg" />
      <MtProgress value={88} label="88%" color="green" size="lg" />
    </div>
  )
}

export { MtProgressLabels }
