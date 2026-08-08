/**
 * MtDataListHorizontal
 * Yatay veri listesi (saf React, Mantine kaynaklı).
 * @id 1465
 * @category Veri Gösterimi
 * @subcategory MtDataList
 * @source mantine
 */
import { MtDataList, MtDataListItem, MtDataListLabel, MtDataListView } from "@/components/ui/mt-data-list"

function MtDataListHorizontal() {
  return (
    <MtDataList orientation="horizontal" withBorder>
      <MtDataListItem>
        <MtDataListLabel>CPU</MtDataListLabel>
        <MtDataListView>M3</MtDataListView>
      </MtDataListItem>
      <MtDataListItem>
        <MtDataListLabel>RAM</MtDataListLabel>
        <MtDataListView>16 GB</MtDataListView>
      </MtDataListItem>
      <MtDataListItem>
        <MtDataListLabel>Storage</MtDataListLabel>
        <MtDataListView>512 GB</MtDataListView>
      </MtDataListItem>
    </MtDataList>
  )
}

export { MtDataListHorizontal }
