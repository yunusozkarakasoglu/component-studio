/**
 * MtSimpleGridAutoFlow
 * auto-fill / auto-fit akışı (saf React, Mantine kaynaklı).
 * @id 1043
 * @category Genel
 * @subcategory MtSimpleGrid
 * @source mantine
 */
import { MtSimpleGrid } from "@/components/ui/mt-simple-grid"

function MtSimpleGridAutoFlow() {
  return (
    <div className="flex flex-col gap-4">
      <MtSimpleGrid minColWidth="200px">
        {[1, 2, 3].map((n) => (
          <div key={n} className="rounded bg-blue-100 p-4 text-center">auto-fill {n}</div>
        ))}
      </MtSimpleGrid>
      <MtSimpleGrid minColWidth="200px">
        {[1, 2, 3].map((n) => (
          <div key={n} className="rounded bg-indigo-100 p-4 text-center">auto-fit {n}</div>
        ))}
      </MtSimpleGrid>
    </div>
  )
}

export { MtSimpleGridAutoFlow }
