/**
 * MtListIcon
 * İkonlu liste (saf React, Mantine kaynaklı).
 * @id 1474
 * @category Veri Gösterimi
 * @subcategory MtList
 * @source mantine
 */
import { Check, X } from "@/components/ui/icons"
import { MtList, MtListItem } from "@/components/ui/mt-list"

function MtListIcon() {
  return (
    <div className="flex flex-col gap-4">
      <MtList icon={<Check className="size-3.5 text-green-600" />} className="max-w-sm">
        <MtListItem>React 19 support</MtListItem>
        <MtListItem>Server components</MtListItem>
        <MtListItem>Improved accessibility</MtListItem>
      </MtList>
      <MtList icon={<X className="size-3.5 text-red-600" />} className="max-w-sm">
        <MtListItem>No legacy code</MtListItem>
        <MtListItem>No jQuery</MtListItem>
      </MtList>
    </div>
  )
}

export { MtListIcon }
