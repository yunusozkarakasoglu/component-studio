/**
 * MtTableScrollContainer
 * Kaydırmalı tablo (saf React, Mantine kaynaklı).
 * @id 1445
 * @category Veri Gösterimi
 * @subcategory MtTable
 * @source mantine
 */
import { MtTable, MtTableTbody, MtTableTd, MtTableTh, MtTableThead, MtTableTr } from "@/components/ui/mt-table"

const rows = Array.from({ length: 15 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}`, price: (i * 3.5 + 10).toFixed(2) }))

function MtTableScrollContainer() {
  return (
    <MtTable className="max-h-48 max-w-xl">
      <MtTableThead>
        <MtTableTr>
          <MtTableTh>ID</MtTableTh>
          <MtTableTh>Name</MtTableTh>
          <MtTableTh>Price</MtTableTh>
        </MtTableTr>
      </MtTableThead>
      <MtTableTbody>
        {rows.map((r) => (
          <MtTableTr key={r.id}>
            <MtTableTd>{r.id}</MtTableTd>
            <MtTableTd>{r.name}</MtTableTd>
            <MtTableTd>${r.price}</MtTableTd>
          </MtTableTr>
        ))}
      </MtTableTbody>
    </MtTable>
  )
}

export { MtTableScrollContainer }
