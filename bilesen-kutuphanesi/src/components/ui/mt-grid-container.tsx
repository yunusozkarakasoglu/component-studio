/**
 * MtGridContainer
 * Kap içinde grid (saf React, Mantine kaynaklı).
 * @id 1055
 * @category Genel
 * @subcategory MtGrid
 * @source mantine
 */
import { MtContainer } from "@/components/ui/mt-container"
import { MtGrid, MtGridCol } from "@/components/ui/mt-grid"

function MtGridContainer() {
  return (
    <MtContainer size="sm">
      <MtGrid>
        <MtGridCol span={6}><div className="rounded bg-blue-100 p-4 text-center">1</div></MtGridCol>
        <MtGridCol span={6}><div className="rounded bg-blue-100 p-4 text-center">2</div></MtGridCol>
      </MtGrid>
    </MtContainer>
  )
}

export { MtGridContainer }
