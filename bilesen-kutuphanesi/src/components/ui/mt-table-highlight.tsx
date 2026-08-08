/**
 * MtTableHighlight
 * Satır vurgulu tablo (saf React, Mantine kaynaklı).
 * @id 1439
 * @category Veri Gösterimi
 * @subcategory MtTable
 * @source mantine
 */
import { MtTable, MtTableTbody, MtTableTd, MtTableTh, MtTableThead, MtTableTr } from "@/components/ui/mt-table"

function MtTableHighlight() {
  return (
    <MtTable highlightOnHover className="max-w-xl">
      <MtTableThead>
        <MtTableTr>
          <MtTableTh>Framework</MtTableTh>
          <MtTableTh>Stars</MtTableTh>
          <MtTableTh>Type</MtTableTh>
        </MtTableTr>
      </MtTableThead>
      <MtTableTbody>
        <MtTableTr className="transition-colors hover:bg-muted/60"><MtTableTd>React</MtTableTd><MtTableTd>220k</MtTableTd><MtTableTd>Library</MtTableTd></MtTableTr>
        <MtTableTr className="transition-colors hover:bg-muted/60"><MtTableTd>Vue</MtTableTd><MtTableTd>207k</MtTableTd><MtTableTd>Framework</MtTableTd></MtTableTr>
        <MtTableTr className="transition-colors hover:bg-muted/60"><MtTableTd>Svelte</MtTableTd><MtTableTd>78k</MtTableTd><MtTableTd>Compiler</MtTableTd></MtTableTr>
      </MtTableTbody>
    </MtTable>
  )
}

export { MtTableHighlight }
