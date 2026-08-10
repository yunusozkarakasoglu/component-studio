/**
 * MuiGridRowColumnSpacing
 * @id 1892
 * @category Genel
 * @subcategory MuiGrid
 * @source mui
 */
import { MuiGrid } from "@/components/ui/mui-grid"
import { MuiPaper } from "@/components/ui/mui-paper"

function MuiGridRowColumnSpacing() {
  return (
    <MuiGrid container spacing={3}>
      <MuiGrid item xs={6}><MuiPaper className="p-3 text-center text-sm text-gray-600">1</MuiPaper></MuiGrid>
      <MuiGrid item xs={6}><MuiPaper className="p-3 text-center text-sm text-gray-600">2</MuiPaper></MuiGrid>
      <MuiGrid item xs={6}><MuiPaper className="p-3 text-center text-sm text-gray-600">3</MuiPaper></MuiGrid>
      <MuiGrid item xs={6}><MuiPaper className="p-3 text-center text-sm text-gray-600">4</MuiPaper></MuiGrid>
      <MuiGrid item xs={6}><MuiPaper className="p-3 text-center text-sm text-gray-600">5</MuiPaper></MuiGrid>
      <MuiGrid item xs={6}><MuiPaper className="p-3 text-center text-sm text-gray-600">6</MuiPaper></MuiGrid>
    </MuiGrid>
  )
}

export { MuiGridRowColumnSpacing }
