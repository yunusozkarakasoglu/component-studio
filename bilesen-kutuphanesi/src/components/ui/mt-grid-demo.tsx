/**
 * MtGridDemo
 * Temel grid — 4+4+4 (saf React, Mantine kaynaklı).
 * @id 1047
 * @category Genel
 * @subcategory MtGrid
 * @source mantine
 */
import { MtGrid, MtGridCol } from "@/components/ui/mt-grid"

function MtGridDemo() {
  return (
    <MtGrid>
      <MtGridCol span={4}><div className="rounded bg-blue-100 p-4 text-center">1</div></MtGridCol>
      <MtGridCol span={4}><div className="rounded bg-blue-100 p-4 text-center">2</div></MtGridCol>
      <MtGridCol span={4}><div className="rounded bg-blue-100 p-4 text-center">3</div></MtGridCol>
    </MtGrid>
  )
}

export { MtGridDemo }
