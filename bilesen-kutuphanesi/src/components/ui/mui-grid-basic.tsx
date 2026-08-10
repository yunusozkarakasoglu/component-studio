/**
 * MuiGridBasic
 * @id 1859
 * @category Genel
 * @subcategory MuiGrid
 * @source mui
 */
import { MuiGrid } from "@/components/ui/mui-grid"
import { MuiPaper } from "@/components/ui/mui-paper"

function MuiGridBasic() {
  return (
    <MuiGrid container spacing={2}>
      <MuiGrid item xs={8}>
        <MuiPaper className="p-4 text-center text-sm text-gray-600">xs=8</MuiPaper>
      </MuiGrid>
      <MuiGrid item xs={4}>
        <MuiPaper className="p-4 text-center text-sm text-gray-600">xs=4</MuiPaper>
      </MuiGrid>
      <MuiGrid item xs={4}>
        <MuiPaper className="p-4 text-center text-sm text-gray-600">xs=4</MuiPaper>
      </MuiGrid>
      <MuiGrid item xs={8}>
        <MuiPaper className="p-4 text-center text-sm text-gray-600">xs=8</MuiPaper>
      </MuiGrid>
    </MuiGrid>
  )
}

export { MuiGridBasic }
