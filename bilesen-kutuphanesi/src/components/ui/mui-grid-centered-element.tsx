/**
 * MuiGridCenteredElement
 * @id 1891
 * @category Genel
 * @subcategory MuiGrid
 * @source mui
 */
import { MuiGrid } from "@/components/ui/mui-grid"

function MuiGridCenteredElement() {
  return (
    <MuiGrid container spacing={2}>
      <MuiGrid item xs={4} className="flex items-center justify-center">
        <span className="flex size-10 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">A</span>
      </MuiGrid>
      <MuiGrid item xs={4} className="flex items-center justify-center">
        <span className="flex size-10 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white">B</span>
      </MuiGrid>
      <MuiGrid item xs={4} className="flex items-center justify-center">
        <span className="flex size-10 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">C</span>
      </MuiGrid>
    </MuiGrid>
  )
}

export { MuiGridCenteredElement }
