/**
 * MtDataListUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1464
 * @category Veri Gösterimi
 * @subcategory MtDataList
 * @source mantine
 */
import { MtDataList, MtDataListItem, MtDataListLabel, MtDataListView } from "@/components/ui/mt-data-list"

const data = [
  { label: "Name", value: "Yunus Özkarakaşoğlu" },
  { label: "Email", value: "yunus@example.com" },
  { label: "Location", value: "İstanbul, TR" },
  { label: "Role", value: "Frontend Developer" },
]

function MtDataListUsage() {
  return (
    <MtDataList withBorder className="max-w-md">
      {data.map((item) => (
        <MtDataListItem key={item.label}>
          <MtDataListLabel>{item.label}</MtDataListLabel>
          <MtDataListView>{item.value}</MtDataListView>
        </MtDataListItem>
      ))}
    </MtDataList>
  )
}

export { MtDataListUsage }
