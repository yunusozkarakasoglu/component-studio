/**
 * MuiPaperVariants
 * @id 1873
 * @category Genel
 * @subcategory MuiPaper
 * @source mui
 */
import { MuiStack } from "@/components/ui/mui-stack"
import { MuiPaper } from "@/components/ui/mui-paper"

function MuiPaperVariants() {
  return (
    <MuiStack direction="row" spacing={2}>
      <MuiPaper variant="elevation" className="flex h-32 w-36 items-center justify-center p-4 text-center text-xs text-gray-600">
        default variant
      </MuiPaper>
      <MuiPaper variant="outlined" className="flex h-32 w-36 items-center justify-center p-4 text-center text-xs text-gray-600">
        outlined variant
      </MuiPaper>
    </MuiStack>
  )
}

export { MuiPaperVariants }
