/**
 * MtTableTabularNums
 * Tabular rakamlar (saf React, Mantine kaynaklı).
 * @id 1446
 * @category Veri Gösterimi
 * @subcategory MtTable
 * @source mantine
 */
import { MtTable, MtTableTbody, MtTableTd, MtTableTh, MtTableThead, MtTableTr } from "@/components/ui/mt-table"

function MtTableTabularNums() {
  return (
    <MtTable tabularNums className="max-w-xl">
      <MtTableThead>
        <MtTableTr>
          <MtTableTh>Description</MtTableTh>
          <MtTableTh className="text-right">Qty</MtTableTh>
          <MtTableTh className="text-right">Total</MtTableTh>
        </MtTableTr>
      </MtTableThead>
      <MtTableTbody>
        <MtTableTr>
          <MtTableTd>3x USB-C Cable</MtTableTd>
          <MtTableTd className="text-right">3</MtTableTd>
          <MtTableTd className="text-right">$17.97</MtTableTd>
        </MtTableTr>
        <MtTableTr>
          <MtTableTd>1x Wireless Mouse</MtTableTd>
          <MtTableTd className="text-right">1</MtTableTd>
          <MtTableTd className="text-right">$39.99</MtTableTd>
        </MtTableTr>
      </MtTableTbody>
    </MtTable>
  )
}

export { MtTableTabularNums }
