/**
 * MuiStackResponsive
 * @id 1875
 * @category Genel
 * @subcategory MuiStack
 * @source mui
 */
import { MuiStack } from "@/components/ui/mui-stack"

function MuiStackResponsive() {
  return (
    <div className="flex w-full flex-col gap-2 sm:flex-row sm:gap-2">
      <div className="flex-1 rounded bg-gray-200 px-4 py-3 text-center text-sm">Mobilde dikey</div>
      <div className="flex-1 rounded bg-gray-200 px-4 py-3 text-center text-sm">Masaüstünde yatay</div>
      <div className="flex-1 rounded bg-gray-200 px-4 py-3 text-center text-sm">Masaüstünde yatay</div>
    </div>
  )
}

export { MuiStackResponsive }
