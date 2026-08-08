/**
 * MtTableConfigurator
 * Yapılandırılabilir tablo (saf React, Mantine kaynaklı).
 * @id 1449
 * @category Veri Gösterimi
 * @subcategory MtTable
 * @source mantine
 */
import { useState } from "react"
import { MtTable, MtTableTbody, MtTableTd, MtTableTh, MtTableThead, MtTableTr } from "@/components/ui/mt-table"

function MtTableConfigurator() {
  const [striped, setStriped] = useState(true)
  const [hover, setHover] = useState(true)
  const [bordered, setBordered] = useState(true)

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
        <label className="flex cursor-pointer items-center gap-1.5"><input type="checkbox" checked={striped} onChange={(e) => setStriped(e.target.checked)} /> Striped</label>
        <label className="flex cursor-pointer items-center gap-1.5"><input type="checkbox" checked={hover} onChange={(e) => setHover(e.target.checked)} /> Hover</label>
        <label className="flex cursor-pointer items-center gap-1.5"><input type="checkbox" checked={bordered} onChange={(e) => setBordered(e.target.checked)} /> Border</label>
      </div>
      <MtTable striped={striped} highlightOnHover={hover} withTableBorder={bordered} className="max-w-xl">
        <MtTableThead>
          <MtTableTr>
            <MtTableTh>Task</MtTableTh>
            <MtTableTh>Progress</MtTableTh>
          </MtTableTr>
        </MtTableThead>
        <MtTableTbody>
          <MtTableTr><MtTableTd>Design</MtTableTd><MtTableTd>80%</MtTableTd></MtTableTr>
          <MtTableTr><MtTableTd>Development</MtTableTd><MtTableTd>45%</MtTableTd></MtTableTr>
          <MtTableTr><MtTableTd>Testing</MtTableTd><MtTableTd>20%</MtTableTd></MtTableTr>
        </MtTableTbody>
      </MtTable>
    </div>
  )
}

export { MtTableConfigurator }
