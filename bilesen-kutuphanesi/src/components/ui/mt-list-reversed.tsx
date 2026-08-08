/**
 * MtListReversed
 * Ters liste (saf React, Mantine kaynaklı).
 * @id 1476
 * @category Veri Gösterimi
 * @subcategory MtList
 * @source mantine
 */
import { MtList, MtListItem } from "@/components/ui/mt-list"

function MtListReversed() {
  return (
    <MtList className="max-w-sm">
      <MtListItem>Ship the feature</MtListItem>
      <MtListItem>Review pull request</MtListItem>
      <MtListItem>Write tests</MtListItem>
      <MtListItem>Implement the code</MtListItem>
    </MtList>
  )
}

export { MtListReversed }
