/**
 * MuiGridColumnLayout
 * @id 1883
 * @category Genel
 * @subcategory MuiGrid
 * @source mui
 */
import { MuiGrid } from "@/components/ui/mui-grid"
import { MuiPaper } from "@/components/ui/mui-paper"

function MuiGridColumnLayout() {
  return (
    <MuiGrid container spacing={2} direction="row">
      <MuiGrid item xs={12} md={4}>
        <MuiPaper className="flex h-24 items-center justify-center bg-blue-100 p-4 text-sm text-blue-900">Sütun 1</MuiPaper>
      </MuiGrid>
      <MuiGrid item xs={12} md={4}>
        <MuiPaper className="flex h-24 items-center justify-center bg-green-100 p-4 text-sm text-green-900">Sütun 2</MuiPaper>
      </MuiGrid>
      <MuiGrid item xs={12} md={4}>
        <MuiPaper className="flex h-24 items-center justify-center bg-orange-100 p-4 text-sm text-orange-900">Sütun 3</MuiPaper>
      </MuiGrid>
    </MuiGrid>
  )
}

export { MuiGridColumnLayout }
