/**
 * MtGridColumns
 * Özel sütun sayısı — 24 (saf React, Mantine kaynaklı).
 * @id 1048
 * @category Genel
 * @subcategory MtGrid
 * @source mantine
 */
import { MtGrid, MtGridCol } from "@/components/ui/mt-grid"

function MtGridColumns() {
  return (
    <MtGrid columns={24}>
      <MtGridCol span={12}><div className="rounded bg-blue-100 p-4 text-center">12</div></MtGridCol>
      <MtGridCol span={6}><div className="rounded bg-blue-100 p-4 text-center">6</div></MtGridCol>
      <MtGridCol span={6}><div className="rounded bg-blue-100 p-4 text-center">6</div></MtGridCol>
    </MtGrid>
  )
}

export { MtGridColumns }
