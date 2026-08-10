/**
 * MuiGridSpacing
 * @id 1878
 * @category Genel
 * @subcategory MuiGrid
 * @source mui
 */
import { MuiGrid } from "@/components/ui/mui-grid"
import { MuiPaper } from "@/components/ui/mui-paper"

function MuiGridSpacing() {
  return (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-xs text-gray-500">spacing=2 (16px)</p>
        <MuiGrid container spacing={2}>
          <MuiGrid item xs={4}><MuiPaper className="p-4 text-center text-sm text-gray-600">1</MuiPaper></MuiGrid>
          <MuiGrid item xs={4}><MuiPaper className="p-4 text-center text-sm text-gray-600">2</MuiPaper></MuiGrid>
          <MuiGrid item xs={4}><MuiPaper className="p-4 text-center text-sm text-gray-600">3</MuiPaper></MuiGrid>
        </MuiGrid>
      </div>
      <div>
        <p className="mb-2 text-xs text-gray-500">spacing=4 (32px)</p>
        <MuiGrid container spacing={4}>
          <MuiGrid item xs={4}><MuiPaper className="p-4 text-center text-sm text-gray-600">1</MuiPaper></MuiGrid>
          <MuiGrid item xs={4}><MuiPaper className="p-4 text-center text-sm text-gray-600">2</MuiPaper></MuiGrid>
          <MuiGrid item xs={4}><MuiPaper className="p-4 text-center text-sm text-gray-600">3</MuiPaper></MuiGrid>
        </MuiGrid>
      </div>
    </div>
  )
}

export { MuiGridSpacing }
