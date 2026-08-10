/**
 * MuiGridFullWidth
 * @id 1881
 * @category Genel
 * @subcategory MuiGrid
 * @source mui
 */
import { MuiGrid } from "@/components/ui/mui-grid"
import { MuiPaper } from "@/components/ui/mui-paper"

function MuiGridFullWidth() {
  return (
    <MuiGrid container spacing={2}>
      <MuiGrid item xs={12}>
        <MuiPaper className="p-3 text-center text-sm text-gray-600">xs=12 (tam genişlik)</MuiPaper>
      </MuiGrid>
      <MuiGrid item xs={12}>
        <MuiPaper className="p-3 text-center text-sm text-gray-600">xs=12 (tam genişlik)</MuiPaper>
      </MuiGrid>
      <MuiGrid item xs={12}>
        <MuiPaper className="p-3 text-center text-sm text-gray-600">xs=12 (tam genişlik)</MuiPaper>
      </MuiGrid>
    </MuiGrid>
  )
}

export { MuiGridFullWidth }
