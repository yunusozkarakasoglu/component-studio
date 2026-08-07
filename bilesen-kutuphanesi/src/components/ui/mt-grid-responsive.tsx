/**
 * MtGridResponsive
 * Duyarlı grid (saf React, Mantine kaynaklı).
 * @id 1057
 * @category Genel
 * @subcategory MtGrid
 * @source mantine
 */
import { MtGrid, MtGridCol } from "@/components/ui/mt-grid"

function MtGridResponsive() {
  return (
    <MtGrid>
      <MtGridCol span={12} className="sm:col-span-6 lg:col-span-4">
        <div className="rounded bg-blue-100 p-4 text-center">1</div>
      </MtGridCol>
      <MtGridCol span={12} className="sm:col-span-6 lg:col-span-4">
        <div className="rounded bg-blue-100 p-4 text-center">2</div>
      </MtGridCol>
      <MtGridCol span={12} className="sm:col-span-12 lg:col-span-4">
        <div className="rounded bg-blue-100 p-4 text-center">3</div>
      </MtGridCol>
    </MtGrid>
  )
}

export { MtGridResponsive }
