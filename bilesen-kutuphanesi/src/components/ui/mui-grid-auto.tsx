/**
 * MuiGridAuto
 * @id 1877
 * @category Genel
 * @subcategory MuiGrid
 * @source mui
 */
import { MuiGrid } from "@/components/ui/mui-grid"
import { MuiPaper } from "@/components/ui/mui-paper"

function MuiGridAuto() {
  return (
    <MuiGrid container spacing={2}>
      <MuiGrid item xs={6}><MuiPaper className="p-4 text-center text-sm text-gray-600">xs=6</MuiPaper></MuiGrid>
      <MuiGrid item xs={6}><MuiPaper className="p-4 text-center text-sm text-gray-600">xs=6</MuiPaper></MuiGrid>
      <MuiGrid item xs={3}><MuiPaper className="p-4 text-center text-sm text-gray-600">xs=3</MuiPaper></MuiGrid>
      <MuiGrid item xs={3}><MuiPaper className="p-4 text-center text-sm text-gray-600">xs=3</MuiPaper></MuiGrid>
      <MuiGrid item xs={3}><MuiPaper className="p-4 text-center text-sm text-gray-600">xs=3</MuiPaper></MuiGrid>
      <MuiGrid item xs={3}><MuiPaper className="p-4 text-center text-sm text-gray-600">xs=3</MuiPaper></MuiGrid>
    </MuiGrid>
  )
}

export { MuiGridAuto }
