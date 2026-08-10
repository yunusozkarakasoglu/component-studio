/**
 * MuiGridVariableWidth
 * @id 1882
 * @category Genel
 * @subcategory MuiGrid
 * @source mui
 */
import { MuiGrid } from "@/components/ui/mui-grid"
import { MuiPaper } from "@/components/ui/mui-paper"

function MuiGridVariableWidth() {
  return (
    <MuiGrid container spacing={2}>
      <MuiGrid item xs={2}><MuiPaper className="p-3 text-center text-sm text-gray-600">xs=2</MuiPaper></MuiGrid>
      <MuiGrid item xs={6}><MuiPaper className="p-3 text-center text-sm text-gray-600">xs=6</MuiPaper></MuiGrid>
      <MuiGrid item xs={4}><MuiPaper className="p-3 text-center text-sm text-gray-600">xs=4</MuiPaper></MuiGrid>
      <MuiGrid item xs={4}><MuiPaper className="p-3 text-center text-sm text-gray-600">xs=4</MuiPaper></MuiGrid>
      <MuiGrid item xs={4}><MuiPaper className="p-3 text-center text-sm text-gray-600">xs=4</MuiPaper></MuiGrid>
      <MuiGrid item xs={4}><MuiPaper className="p-3 text-center text-sm text-gray-600">xs=4</MuiPaper></MuiGrid>
      <MuiGrid item xs={4}><MuiPaper className="p-3 text-center text-sm text-gray-600">xs=4</MuiPaper></MuiGrid>
      <MuiGrid item xs={4}><MuiPaper className="p-3 text-center text-sm text-gray-600">xs=4</MuiPaper></MuiGrid>
    </MuiGrid>
  )
}

export { MuiGridVariableWidth }
