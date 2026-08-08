/**
 * MtTableCaptions
 * Başlık (caption) (saf React, Mantine kaynaklı).
 * @id 1443
 * @category Veri Gösterimi
 * @subcategory MtTable
 * @source mantine
 */
import { MtTable, MtTableCaption, MtTableTbody, MtTableTd, MtTableTh, MtTableThead, MtTableTr } from "@/components/ui/mt-table"

function MtTableCaptions() {
  return (
    <MtTable className="max-w-xl">
      <MtTableCaption>Monthly sales report — Q3 2025</MtTableCaption>
      <MtTableThead>
        <MtTableTr>
          <MtTableTh>Month</MtTableTh>
          <MtTableTh>Revenue</MtTableTh>
          <MtTableTh>Growth</MtTableTh>
        </MtTableTr>
      </MtTableThead>
      <MtTableTbody>
        <MtTableTr><MtTableTd>July</MtTableTd><MtTableTd>$24k</MtTableTd><MtTableTd className="text-green-600">+12%</MtTableTd></MtTableTr>
        <MtTableTr><MtTableTd>August</MtTableTd><MtTableTd>$28k</MtTableTd><MtTableTd className="text-green-600">+16%</MtTableTd></MtTableTr>
        <MtTableTr><MtTableTd>September</MtTableTd><MtTableTd>$31k</MtTableTd><MtTableTd className="text-green-600">+11%</MtTableTd></MtTableTr>
      </MtTableTbody>
    </MtTable>
  )
}

export { MtTableCaptions }
