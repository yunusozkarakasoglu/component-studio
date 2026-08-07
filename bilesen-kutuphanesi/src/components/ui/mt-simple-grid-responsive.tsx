/**
 * MtSimpleGridResponsive
 * Duyarlı grid (saf React, Mantine kaynaklı).
 * @id 1042
 * @category Genel
 * @subcategory MtSimpleGrid
 * @source mantine
 */
import { MtSimpleGrid } from "@/components/ui/mt-simple-grid"

function MtSimpleGridResponsive() {
  return (
    <MtSimpleGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-5" cols={1}>
      {[1, 2, 3, 4, 5].map((n) => (
        <div key={n} className="rounded bg-blue-100 p-4 text-center">{n}</div>
      ))}
    </MtSimpleGrid>
  )
}

export { MtSimpleGridResponsive }
