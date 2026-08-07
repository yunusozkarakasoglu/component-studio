/**
 * MtGridAuto
 * Otomatik genişlik sütunlar (saf React, Mantine kaynaklı).
 * @id 1053
 * @category Genel
 * @subcategory MtGrid
 * @source mantine
 */
import { MtGrid, MtGridCol } from "@/components/ui/mt-grid"

function MtGridAuto() {
  return (
    <MtGrid>
      <MtGridCol span="auto"><div className="rounded bg-blue-100 p-4 text-center">auto</div></MtGridCol>
      <MtGridCol span={6}><div className="rounded bg-blue-100 p-4 text-center">6</div></MtGridCol>
      <MtGridCol span="auto"><div className="rounded bg-blue-100 p-4 text-center">auto</div></MtGridCol>
    </MtGrid>
  )
}

export { MtGridAuto }
