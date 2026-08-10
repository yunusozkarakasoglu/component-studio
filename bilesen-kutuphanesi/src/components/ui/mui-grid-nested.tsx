/**
 * MuiGridNested
 * @id 1880
 * @category Genel
 * @subcategory MuiGrid
 * @source mui
 */
import { MuiGrid } from "@/components/ui/mui-grid"
import { MuiPaper } from "@/components/ui/mui-paper"

function MuiGridNested() {
  return (
    <MuiGrid container spacing={2}>
      <MuiGrid item xs={12} md={5} lg={4}>
        <MuiPaper className="p-4 text-sm text-gray-600">Email subscribe section</MuiPaper>
      </MuiGrid>
      <MuiGrid container item xs={12} md={7} lg={8} spacing={4}>
        <MuiGrid item xs={6} lg={3}>
          <MuiPaper className="p-4">
            <p className="mb-2 text-xs font-semibold uppercase text-gray-500">Category A</p>
            <ul className="pl-4 text-sm text-gray-600">
              <li>Link 1.1</li>
              <li>Link 1.2</li>
              <li>Link 1.3</li>
            </ul>
          </MuiPaper>
        </MuiGrid>
        <MuiGrid item xs={6} lg={3}>
          <MuiPaper className="p-4">
            <p className="mb-2 text-xs font-semibold uppercase text-gray-500">Category B</p>
            <ul className="pl-4 text-sm text-gray-600">
              <li>Link 2.1</li>
              <li>Link 2.2</li>
              <li>Link 2.3</li>
            </ul>
          </MuiPaper>
        </MuiGrid>
        <MuiGrid item xs={6} lg={3}>
          <MuiPaper className="p-4">
            <p className="mb-2 text-xs font-semibold uppercase text-gray-500">Category C</p>
            <ul className="pl-4 text-sm text-gray-600">
              <li>Link 3.1</li>
              <li>Link 3.2</li>
              <li>Link 3.3</li>
            </ul>
          </MuiPaper>
        </MuiGrid>
      </MuiGrid>
    </MuiGrid>
  )
}

export { MuiGridNested }
