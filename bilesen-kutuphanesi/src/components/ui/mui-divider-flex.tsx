/**
 * MuiDividerFlex
 * @id 1885
 * @category Genel
 * @subcategory MuiDivider
 * @source mui
 */
import { MuiDivider } from "@/components/ui/mui-divider"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiDividerFlex() {
  return (
    <MuiStack direction="row" spacing={2} className="w-full items-stretch">
      <div className="flex-1 rounded bg-gray-100 p-3 text-sm text-gray-600">
        <p className="font-medium">Solda</p>
        <p className="text-xs">Flex container içinde dikey ayraç.</p>
      </div>
      <MuiDivider orientation="vertical" flexItem />
      <div className="flex-1 rounded bg-gray-100 p-3 text-sm text-gray-600">
        <p className="font-medium">Sağda</p>
        <p className="text-xs">flexItem ile yükseklik esnek.</p>
      </div>
    </MuiStack>
  )
}

export { MuiDividerFlex }
