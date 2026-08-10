/**
 * MuiStackDivider
 * @id 1860
 * @category Genel
 * @subcategory MuiStack
 * @source mui
 */
import { MuiStack } from "@/components/ui/mui-stack"
import { MuiDivider } from "@/components/ui/mui-divider"

function MuiStackDivider() {
  return (
    <MuiStack direction="row" spacing={2} divider={<MuiDivider orientation="vertical" className="h-auto" />} className="w-64">
      <div className="rounded bg-gray-200 px-3 py-2 text-sm">Öğe 1</div>
      <div className="rounded bg-gray-200 px-3 py-2 text-sm">Öğe 2</div>
      <div className="rounded bg-gray-200 px-3 py-2 text-sm">Öğe 3</div>
    </MuiStack>
  )
}

export { MuiStackDivider }
