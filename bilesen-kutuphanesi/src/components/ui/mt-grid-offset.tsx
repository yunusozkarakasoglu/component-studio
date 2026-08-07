/**
 * MtGridOffset
 * Sütun kaydırma (saf React, Mantine kaynaklı).
 * @id 1050
 * @category Genel
 * @subcategory MtGrid
 * @source mantine
 */
import { MtGrid, MtGridCol } from "@/components/ui/mt-grid"

function MtGridOffset() {
  return (
    <MtGrid>
      <MtGridCol span={3}><div className="rounded bg-blue-100 p-4 text-center">1</div></MtGridCol>
      <MtGridCol span={3}><div className="rounded bg-blue-100 p-4 text-center">2</div></MtGridCol>
      <MtGridCol span={3} offset={3}><div className="rounded bg-blue-100 p-4 text-center">3</div></MtGridCol>
    </MtGrid>
  )
}

export { MtGridOffset }
