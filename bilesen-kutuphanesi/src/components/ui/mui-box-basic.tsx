/**
 * MuiBoxBasic
 * @id 1852
 * @category Genel
 * @subcategory MuiBox
 * @source mui
 */
import { MuiBox } from "@/components/ui/mui-box"

function MuiBoxBasic() {
  return (
    <MuiBox component="section" className="border border-dashed border-gray-400 p-4 text-sm text-gray-700">
      Bu Box bir HTML section elementi olarak render edilir.
    </MuiBox>
  )
}

export { MuiBoxBasic }
