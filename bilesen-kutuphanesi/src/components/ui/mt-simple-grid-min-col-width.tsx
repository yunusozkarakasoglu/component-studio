/**
 * MtSimpleGridMinColWidth
 * Minimum sütun genişliği (saf React, Mantine kaynaklı).
 * @id 1041
 * @category Genel
 * @subcategory MtSimpleGrid
 * @source mantine
 */
import { MtSimpleGrid } from "@/components/ui/mt-simple-grid"

function MtSimpleGridMinColWidth() {
  return (
    <MtSimpleGrid minColWidth="200px">
      {[1, 2, 3, 4, 5].map((n) => (
        <div key={n} className="rounded bg-blue-100 p-4 text-center">{n}</div>
      ))}
    </MtSimpleGrid>
  )
}

export { MtSimpleGridMinColWidth }
