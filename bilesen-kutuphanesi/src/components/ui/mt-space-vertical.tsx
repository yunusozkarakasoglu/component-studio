/**
 * MtSpaceVertical
 * Yatay boşluk (saf React, Mantine kaynaklı).
 * @id 1024
 * @category Genel
 * @subcategory MtSpace
 * @source mantine
 */
import { MtSpace } from "@/components/ui/mt-space"

function MtSpaceVertical() {
  return (
    <div className="flex">
      <p>First line</p>
      <MtSpace w={24} />
      <p>Second line</p>
    </div>
  )
}

export { MtSpaceVertical }
