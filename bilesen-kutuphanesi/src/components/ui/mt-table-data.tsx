/**
 * MtTableData
 * Veri tablosu (saf React, Mantine kaynaklı).
 * @id 1441
 * @category Veri Gösterimi
 * @subcategory MtTable
 * @source mantine
 */
import { MtTable, MtTableTbody, MtTableTd, MtTableTh, MtTableThead, MtTableTr } from "@/components/ui/mt-table"

const data = [
  { country: "Norway", flag: "🇳🇴", population: "5.4M", area: "385K km²" },
  { country: "Japan", flag: "🇯🇵", population: "125M", area: "378K km²" },
  { country: "Brazil", flag: "🇧🇷", population: "216M", area: "8.5M km²" },
]

function MtTableData() {
  return (
    <MtTable className="max-w-xl">
      <MtTableThead>
        <MtTableTr>
          <MtTableTh>Country</MtTableTh>
          <MtTableTh>Flag</MtTableTh>
          <MtTableTh>Population</MtTableTh>
          <MtTableTh>Area</MtTableTh>
        </MtTableTr>
      </MtTableThead>
      <MtTableTbody>
        {data.map((d) => (
          <MtTableTr key={d.country}>
            <MtTableTd>{d.country}</MtTableTd>
            <MtTableTd>{d.flag}</MtTableTd>
            <MtTableTd>{d.population}</MtTableTd>
            <MtTableTd>{d.area}</MtTableTd>
          </MtTableTr>
        ))}
      </MtTableTbody>
    </MtTable>
  )
}

export { MtTableData }
