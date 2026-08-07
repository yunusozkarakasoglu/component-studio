/**
 * MtSimpleGridAutoRows
 * Otomatik satır yüksekliği (saf React, Mantine kaynaklı).
 * @id 1044
 * @category Genel
 * @subcategory MtSimpleGrid
 * @source mantine
 */
import { MtSimpleGrid } from "@/components/ui/mt-simple-grid"

function MtSimpleGridAutoRows() {
  return (
    <MtSimpleGrid cols={3} autoRows="minmax(100px, auto)">
      {[1, 2, 3, 4, 5].map((n) => (
        <div key={n} className="rounded bg-blue-100 p-4 text-center">{n}</div>
      ))}
    </MtSimpleGrid>
  )
}

export { MtSimpleGridAutoRows }
