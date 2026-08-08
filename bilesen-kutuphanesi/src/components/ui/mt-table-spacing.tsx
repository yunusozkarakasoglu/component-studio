/**
 * MtTableSpacing
 * Boşluk yapılandırma (saf React, Mantine kaynaklı).
 * @id 1442
 * @category Veri Gösterimi
 * @subcategory MtTable
 * @source mantine
 */
import { MtTable, MtTableTbody, MtTableTd, MtTableTh, MtTableThead, MtTableTr } from "@/components/ui/mt-table"

function MtTableSpacing() {
  return (
    <MtTable className="max-w-xl">
      <MtTableThead>
        <MtTableTr>
          <MtTableTh horizontalSpacing="xl" verticalSpacing="lg">Product</MtTableTh>
          <MtTableTh horizontalSpacing="xl" verticalSpacing="lg">Price</MtTableTh>
        </MtTableTr>
      </MtTableThead>
      <MtTableTbody>
        <MtTableTr>
          <MtTableTd horizontalSpacing="xl" verticalSpacing="lg">Headphones</MtTableTd>
          <MtTableTd horizontalSpacing="xl" verticalSpacing="lg">$129</MtTableTd>
        </MtTableTr>
        <MtTableTr>
          <MtTableTd horizontalSpacing="xl" verticalSpacing="lg">Keyboard</MtTableTd>
          <MtTableTd horizontalSpacing="xl" verticalSpacing="lg">$89</MtTableTd>
        </MtTableTr>
      </MtTableTbody>
    </MtTable>
  )
}

export { MtTableSpacing }
