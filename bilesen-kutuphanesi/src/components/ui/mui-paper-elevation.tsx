/**
 * MuiPaperElevation
 * @id 1853
 * @category Genel
 * @subcategory MuiPaper
 * @source mui
 */
import { MuiStack } from "@/components/ui/mui-stack"
import { MuiPaper } from "@/components/ui/mui-paper"

function MuiPaperElevation() {
  return (
    <MuiStack direction="row" spacing={2}>
      <MuiPaper elevation={0} className="flex h-32 w-32 items-center justify-center text-xs text-gray-500">elevation=0</MuiPaper>
      <MuiPaper elevation={1} className="flex h-32 w-32 items-center justify-center text-xs text-gray-500">elevation=1</MuiPaper>
      <MuiPaper elevation={3} className="flex h-32 w-32 items-center justify-center text-xs text-gray-500">elevation=3</MuiPaper>
    </MuiStack>
  )
}

export { MuiPaperElevation }
