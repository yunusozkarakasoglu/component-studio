/**
 * MuiStackBasic
 * @id 1855
 * @category Genel
 * @subcategory MuiStack
 * @source mui
 */
import { MuiStack } from "@/components/ui/mui-stack"

function MuiStackBasic() {
  return (
    <MuiStack spacing={2} className="w-48">
      <div className="rounded bg-gray-200 px-3 py-2 text-sm">Öğe 1</div>
      <div className="rounded bg-gray-200 px-3 py-2 text-sm">Öğe 2</div>
      <div className="rounded bg-gray-200 px-3 py-2 text-sm">Öğe 3</div>
    </MuiStack>
  )
}

export { MuiStackBasic }
