/**
 * MtDataListDivider
 * Ayraçlı veri listesi (saf React, Mantine kaynaklı).
 * @id 1467
 * @category Veri Gösterimi
 * @subcategory MtDataList
 * @source mantine
 */
import { MtDataList, MtDataListItem, MtDataListLabel, MtDataListView } from "@/components/ui/mt-data-list"

function MtDataListDivider() {
  return (
    <MtDataList withBorder className="max-w-md">
      <MtDataListItem>
        <MtDataListLabel>Status</MtDataListLabel>
        <MtDataListView><span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">Active</span></MtDataListView>
      </MtDataListItem>
      <MtDataListItem>
        <MtDataListLabel>Plan</MtDataListLabel>
        <MtDataListView>Enterprise</MtDataListView>
      </MtDataListItem>
      <MtDataListItem>
        <MtDataListLabel>Renewal</MtDataListLabel>
        <MtDataListView>2026-01-15</MtDataListView>
      </MtDataListItem>
    </MtDataList>
  )
}

export { MtDataListDivider }
