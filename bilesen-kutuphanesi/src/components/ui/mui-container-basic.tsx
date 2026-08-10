/**
 * MuiContainerBasic
 * @id 1854
 * @category Genel
 * @subcategory MuiContainer
 * @source mui
 */
import { MuiContainer } from "@/components/ui/mui-container"
import { MuiBox } from "@/components/ui/mui-box"

function MuiContainerBasic() {
  return (
    <div className="space-y-3">
      <MuiContainer maxWidth="sm">
        <MuiBox className="bg-blue-100 p-3 text-center text-sm text-blue-900">maxWidth="sm"</MuiBox>
      </MuiContainer>
      <MuiContainer maxWidth="md">
        <MuiBox className="bg-green-100 p-3 text-center text-sm text-green-900">maxWidth="md"</MuiBox>
      </MuiContainer>
    </div>
  )
}

export { MuiContainerBasic }
