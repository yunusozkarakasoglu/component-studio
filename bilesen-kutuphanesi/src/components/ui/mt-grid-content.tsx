/**
 * MtGridContent
 * İçerik yerleşimli grid (saf React, Mantine kaynaklı).
 * @id 1054
 * @category Genel
 * @subcategory MtGrid
 * @source mantine
 */
import { MtGrid, MtGridCol } from "@/components/ui/mt-grid"

function MtGridContent() {
  return (
    <MtGrid>
      <MtGridCol span={8}>
        <div className="rounded bg-blue-100 p-4">
          <p className="font-medium">Main content</p>
          <p className="text-sm text-muted-foreground">Spans 8 of 12 columns</p>
        </div>
      </MtGridCol>
      <MtGridCol span={4}>
        <div className="rounded bg-indigo-100 p-4">
          <p className="font-medium">Sidebar</p>
          <p className="text-sm text-muted-foreground">Spans 4 of 12 columns</p>
        </div>
      </MtGridCol>
    </MtGrid>
  )
}

export { MtGridContent }
