/**
 * MuiGridResponsive
 * @id 1863
 * @category Genel
 * @subcategory MuiGrid
 * @source mui
 */
import { MuiGrid } from "@/components/ui/mui-grid"
import { MuiPaper } from "@/components/ui/mui-paper"

function MuiGridResponsive() {
  return (
    <MuiGrid container spacing={2}>
      <MuiGrid item xs={12} sm={6} md={4} lg={3}>
        <MuiPaper className="p-4 text-center text-sm text-gray-600">xs=12 sm=6 md=4</MuiPaper>
      </MuiGrid>
      <MuiGrid item xs={12} sm={6} md={4} lg={3}>
        <MuiPaper className="p-4 text-center text-sm text-gray-600">xs=12 sm=6 md=4</MuiPaper>
      </MuiGrid>
      <MuiGrid item xs={12} sm={6} md={4} lg={3}>
        <MuiPaper className="p-4 text-center text-sm text-gray-600">xs=12 sm=6 md=4</MuiPaper>
      </MuiGrid>
      <MuiGrid item xs={12} sm={6} md={4} lg={3}>
        <MuiPaper className="p-4 text-center text-sm text-gray-600">xs=12 sm=6 md=4</MuiPaper>
      </MuiGrid>
    </MuiGrid>
  )
}

export { MuiGridResponsive }
