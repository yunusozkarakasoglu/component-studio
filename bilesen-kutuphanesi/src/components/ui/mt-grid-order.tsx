/**
 * MtGridOrder
 * Sütun sıralaması (saf React, Mantine kaynaklı).
 * @id 1051
 * @category Genel
 * @subcategory MtGrid
 * @source mantine
 */
import { MtGrid, MtGridCol } from "@/components/ui/mt-grid"

function MtGridOrder() {
  return (
    <MtGrid>
      <MtGridCol span={3} order={2}><div className="rounded bg-blue-100 p-4 text-center">2</div></MtGridCol>
      <MtGridCol span={3} order={3}><div className="rounded bg-blue-100 p-4 text-center">3</div></MtGridCol>
      <MtGridCol span={3} order={1}><div className="rounded bg-blue-100 p-4 text-center">1</div></MtGridCol>
    </MtGrid>
  )
}

export { MtGridOrder }
