/**
 * MtDataListVertical
 * Dikey veri listesi (saf React, Mantine kaynaklı).
 * @id 1466
 * @category Veri Gösterimi
 * @subcategory MtDataList
 * @source mantine
 */
import { MtDataList, MtDataListItem, MtDataListLabel, MtDataListView } from "@/components/ui/mt-data-list"

function MtDataListVertical() {
  return (
    <MtDataList orientation="vertical" withBorder className="max-w-md">
      <MtDataListItem>
        <MtDataListLabel>Package</MtDataListLabel>
        <MtDataListView>Pro Plus</MtDataListView>
      </MtDataListItem>
      <MtDataListItem>
        <MtDataListLabel>Users</MtDataListLabel>
        <MtDataListView>5 seats</MtDataListView>
      </MtDataListItem>
      <MtDataListItem>
        <MtDataListLabel>Billing</MtDataListLabel>
        <MtDataListView>$49/mo</MtDataListView>
      </MtDataListItem>
    </MtDataList>
  )
}

export { MtDataListVertical }
