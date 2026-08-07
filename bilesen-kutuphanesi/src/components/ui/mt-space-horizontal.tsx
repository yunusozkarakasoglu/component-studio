/**
 * MtSpaceHorizontal
 * Dikey boşluk (saf React, Mantine kaynaklı).
 * @id 1023
 * @category Genel
 * @subcategory MtSpace
 * @source mantine
 */
import { MtSpace } from "@/components/ui/mt-space"

function MtSpaceHorizontal() {
  return (
    <div className="max-w-sm">
      <p>First line</p>
      <MtSpace h={24} />
      <p>Second line</p>
    </div>
  )
}

export { MtSpaceHorizontal }
