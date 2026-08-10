/**
 * MuiStackZeroWidth
 * @id 1894
 * @category Genel
 * @subcategory MuiStack
 * @source mui
 */
import { MuiStack } from "@/components/ui/mui-stack"

function MuiStackZeroWidth() {
  return (
    <MuiStack direction="row" spacing={2} className="w-full">
      <div className="flex-1 truncate rounded bg-gray-200 px-3 py-2 text-sm text-gray-700">
        Bu çok uzun bir metin — taşmayı önlemek için zero-width kullanılır, metin kesilir ve üç nokta gösterilir.
      </div>
      <div className="shrink-0 rounded bg-blue-200 px-3 py-2 text-sm text-blue-900">Sabit</div>
    </MuiStack>
  )
}

export { MuiStackZeroWidth }
