/**
 * MuiStackDirection
 * @id 1856
 * @category Genel
 * @subcategory MuiStack
 * @source mui
 */
import { MuiStack } from "@/components/ui/mui-stack"

function MuiStackDirection() {
  return (
    <MuiStack direction="row" spacing={2}>
      <div className="rounded bg-purple-200 px-4 py-2 text-sm">Yatay 1</div>
      <div className="rounded bg-purple-200 px-4 py-2 text-sm">Yatay 2</div>
      <div className="rounded bg-purple-200 px-4 py-2 text-sm">Yatay 3</div>
    </MuiStack>
  )
}

export { MuiStackDirection }
