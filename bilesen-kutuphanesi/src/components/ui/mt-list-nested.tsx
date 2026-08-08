/**
 * MtListNested
 * İç içe liste (saf React, Mantine kaynaklı).
 * @id 1475
 * @category Veri Gösterimi
 * @subcategory MtList
 * @source mantine
 */
import { CircleDot } from "@/components/ui/icons"
import { MtList, MtListItem } from "@/components/ui/mt-list"

function MtListNested() {
  return (
    <MtList icon={<CircleDot className="size-3.5 text-blue-600" />} className="max-w-sm">
      <MtListItem>Frontend</MtListItem>
      <MtListItem>
        Backend
        <MtList withPadding className="mt-2">
          <MtListItem>Node.js API</MtListItem>
          <MtListItem>PostgreSQL database</MtListItem>
          <MtListItem>Redis cache</MtListItem>
        </MtList>
      </MtListItem>
      <MtListItem>DevOps</MtListItem>
    </MtList>
  )
}

export { MtListNested }
