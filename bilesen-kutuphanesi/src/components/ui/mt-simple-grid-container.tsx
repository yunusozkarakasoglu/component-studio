/**
 * MtSimpleGridContainer
 * Konteyner sorgulu grid (saf React, Mantine kaynaklı).
 * @id 1045
 * @category Genel
 * @subcategory MtSimpleGrid
 * @source mantine
 */
import { MtSimpleGrid } from "@/components/ui/mt-simple-grid"

function MtSimpleGridContainer() {
  return (
    <div className="max-w-full overflow-hidden" style={{ resize: "horizontal" }}>
      <MtSimpleGrid cols={1}>
        {[1, 2, 3, 4, 5].map((n) => (
          <div key={n} className="rounded bg-blue-100 p-4 text-center">{n}</div>
        ))}
      </MtSimpleGrid>
    </div>
  )
}

export { MtSimpleGridContainer }
