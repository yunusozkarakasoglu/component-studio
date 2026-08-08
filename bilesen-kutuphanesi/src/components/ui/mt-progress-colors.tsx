/**
 * MtProgressColors
 * Renkler (saf React, Mantine kaynaklı).
 * @id 1525
 * @category Yükleme & İlerleme
 * @subcategory MtProgress
 * @source mantine
 */
import { MtProgress } from "@/components/ui/mt-progress"

function MtProgressColors() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <MtProgress value={40} color="blue" />
      <MtProgress value={60} color="teal" />
      <MtProgress value={80} color="green" />
      <MtProgress value={30} color="red" />
      <MtProgress value={55} color="grape" />
      <MtProgress value={90} color="yellow" />
    </div>
  )
}

export { MtProgressColors }
