/**
 * MuiGridOffset
 * @id 1879
 * @category Genel
 * @subcategory MuiGrid
 * @source mui
 */
import { MuiGrid } from "@/components/ui/mui-grid"
import { MuiPaper } from "@/components/ui/mui-paper"

function MuiGridOffset() {
  return (
    <MuiGrid container spacing={3}>
      <MuiGrid item xs={6} md={2} offset={{ xs: 3, md: 0 }}>
        <MuiPaper className="p-4 text-center text-sm text-gray-600">1</MuiPaper>
      </MuiGrid>
      <MuiGrid item xs={4} md={2}>
        <MuiPaper className="p-4 text-center text-sm text-gray-600">2</MuiPaper>
      </MuiGrid>
      <MuiGrid item xs={4} md={2} offset={{ xs: 4, md: 0 }}>
        <MuiPaper className="p-4 text-center text-sm text-gray-600">3</MuiPaper>
      </MuiGrid>
      <MuiGrid item xs={6} md={2} offset={{ md: 2 }}>
        <MuiPaper className="p-4 text-center text-sm text-gray-600">4</MuiPaper>
      </MuiGrid>
    </MuiGrid>
  )
}

export { MuiGridOffset }
