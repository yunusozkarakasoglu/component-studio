/**
 * MtTableStickyHeader
 * Sabit başlık (saf React, Mantine kaynaklı).
 * @id 1444
 * @category Veri Gösterimi
 * @subcategory MtTable
 * @source mantine
 */
import { MtTable, MtTableTbody, MtTableTd, MtTableTh, MtTableThead, MtTableTr } from "@/components/ui/mt-table"

const rows = Array.from({ length: 20 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}`, value: Math.round(Math.random() * 1000) }))

function MtTableStickyHeader() {
  return (
    <MtTable className="max-h-56 max-w-xl overflow-auto">
      <MtTableThead className="sticky top-0 z-10 bg-muted">
        <MtTableTr>
          <MtTableTh>#</MtTableTh>
          <MtTableTh>Name</MtTableTh>
          <MtTableTh>Value</MtTableTh>
        </MtTableTr>
      </MtTableThead>
      <MtTableTbody>
        {rows.map((r) => (
          <MtTableTr key={r.id}>
            <MtTableTd>{r.id}</MtTableTd>
            <MtTableTd>{r.name}</MtTableTd>
            <MtTableTd>{r.value}</MtTableTd>
          </MtTableTr>
        ))}
      </MtTableTbody>
    </MtTable>
  )
}

export { MtTableStickyHeader }
