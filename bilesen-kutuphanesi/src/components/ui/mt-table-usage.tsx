/**
 * MtTableUsage
 * Temel tablo (saf React, Mantine kaynaklı).
 * @id 1437
 * @category Veri Gösterimi
 * @subcategory MtTable
 * @source mantine
 */
import { MtTable, MtTableTbody, MtTableTd, MtTableTh, MtTableThead, MtTableTr } from "@/components/ui/mt-table"

const elements = [
  { position: 6, name: "Carbon", symbol: "C", mass: 12.011 },
  { position: 7, name: "Nitrogen", symbol: "N", mass: 14.007 },
  { position: 39, name: "Yttrium", symbol: "Y", mass: 88.906 },
  { position: 56, name: "Barium", symbol: "Ba", mass: 137.33 },
]

function MtTableUsage() {
  const rows = elements.map((e) => (
    <MtTableTr key={e.name}>
      <MtTableTd>{e.position}</MtTableTd>
      <MtTableTd>{e.name}</MtTableTd>
      <MtTableTd>{e.symbol}</MtTableTd>
      <MtTableTd>{e.mass}</MtTableTd>
    </MtTableTr>
  ))

  return (
    <MtTable className="max-w-xl">
      <MtTableThead>
        <MtTableTr>
          <MtTableTh>Element position</MtTableTh>
          <MtTableTh>Element name</MtTableTh>
          <MtTableTh>Symbol</MtTableTh>
          <MtTableTh>Atomic mass</MtTableTh>
        </MtTableTr>
      </MtTableThead>
      <MtTableTbody>{rows}</MtTableTbody>
    </MtTable>
  )
}

export { MtTableUsage }
