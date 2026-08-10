/**
 * MuiPaperSimple
 * @id 1872
 * @category Genel
 * @subcategory MuiPaper
 * @source mui
 */
import { MuiPaper } from "@/components/ui/mui-paper"

function MuiPaperSimple() {
  return (
    <div className="flex flex-wrap gap-2">
      <MuiPaper elevation={0} className="flex h-32 w-32 items-center justify-center text-xs text-gray-500" />
      <MuiPaper elevation={1} className="flex h-32 w-32 items-center justify-center text-xs text-gray-500" />
      <MuiPaper elevation={3} className="flex h-32 w-32 items-center justify-center text-xs text-gray-500" />
    </div>
  )
}

export { MuiPaperSimple }
