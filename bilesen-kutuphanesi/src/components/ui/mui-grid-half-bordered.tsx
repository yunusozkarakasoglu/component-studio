/**
 * MuiGridHalfBordered
 * @id 1890
 * @category Genel
 * @subcategory MuiGrid
 * @source mui
 */
import { MuiGrid } from "@/components/ui/mui-grid"

function MuiGridHalfBordered() {
  return (
    <MuiGrid container spacing={2}>
      <MuiGrid item xs={6}>
        <div className="border-r border-b border-gray-300 p-3 text-center text-sm text-gray-700">1</div>
      </MuiGrid>
      <MuiGrid item xs={6}>
        <div className="border-b border-gray-300 p-3 text-center text-sm text-gray-700">2</div>
      </MuiGrid>
      <MuiGrid item xs={6}>
        <div className="border-r border-gray-300 p-3 text-center text-sm text-gray-700">3</div>
      </MuiGrid>
      <MuiGrid item xs={6}>
        <div className="p-3 text-center text-sm text-gray-700">4</div>
      </MuiGrid>
    </MuiGrid>
  )
}

export { MuiGridHalfBordered }
