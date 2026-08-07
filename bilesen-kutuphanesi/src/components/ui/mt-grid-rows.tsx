/**
 * MtGridRows
 * Çok satırlı grid (saf React, Mantine kaynaklı).
 * @id 1052
 * @category Genel
 * @subcategory MtGrid
 * @source mantine
 */
import { MtGrid, MtGridCol } from "@/components/ui/mt-grid"

function MtGridRows() {
  return (
    <MtGrid>
      <MtGridCol span={4}><div className="rounded bg-blue-100 p-4 text-center">1</div></MtGridCol>
      <MtGridCol span={4}><div className="rounded bg-blue-100 p-4 text-center">2</div></MtGridCol>
      <MtGridCol span={4}><div className="rounded bg-blue-100 p-4 text-center">3</div></MtGridCol>
      <MtGridCol span={4}><div className="rounded bg-blue-100 p-4 text-center">4</div></MtGridCol>
    </MtGrid>
  )
}

export { MtGridRows }
