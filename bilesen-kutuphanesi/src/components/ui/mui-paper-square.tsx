/**
 * MuiPaperSquare
 * @id 1874
 * @category Genel
 * @subcategory MuiPaper
 * @source mui
 */
import { MuiStack } from "@/components/ui/mui-stack"
import { MuiPaper } from "@/components/ui/mui-paper"

function MuiPaperSquare() {
  return (
    <MuiStack direction="row" spacing={2}>
      <MuiPaper square={false} className="flex h-28 w-32 items-center justify-center text-center text-xs text-gray-600">
        rounded corners
      </MuiPaper>
      <MuiPaper square className="flex h-28 w-32 items-center justify-center text-center text-xs text-gray-600">
        square corners
      </MuiPaper>
    </MuiStack>
  )
}

export { MuiPaperSquare }
