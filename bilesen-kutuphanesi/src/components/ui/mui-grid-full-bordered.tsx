/**
 * MuiGridFullBordered
 * @id 1884
 * @category Genel
 * @subcategory MuiGrid
 * @source mui
 */
import { MuiGrid } from "@/components/ui/mui-grid"

function MuiGridFullBordered() {
  return (
    <MuiGrid container spacing={2}>
      <MuiGrid item xs={12}>
        <div className="border border-gray-400 p-3 text-center text-sm text-gray-700">1</div>
      </MuiGrid>
      <MuiGrid item xs={6}>
        <div className="border border-gray-400 p-3 text-center text-sm text-gray-700">2</div>
      </MuiGrid>
      <MuiGrid item xs={6}>
        <div className="border border-gray-400 p-3 text-center text-sm text-gray-700">3</div>
      </MuiGrid>
    </MuiGrid>
  )
}

export { MuiGridFullBordered }
