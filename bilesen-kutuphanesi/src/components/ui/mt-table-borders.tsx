/**
 * MtTableBorders
 * Kenarlıklı tablo (saf React, Mantine kaynaklı).
 * @id 1440
 * @category Veri Gösterimi
 * @subcategory MtTable
 * @source mantine
 */
import { MtTable, MtTableTbody, MtTableTd, MtTableTh, MtTableThead, MtTableTr } from "@/components/ui/mt-table"

function MtTableBorders() {
  return (
    <MtTable withTableBorder withColumnBorders className="max-w-xl">
      <MtTableThead>
        <MtTableTr>
          <MtTableTh>Name</MtTableTh>
          <MtTableTh>Email</MtTableTh>
          <MtTableTh>Role</MtTableTh>
        </MtTableTr>
      </MtTableThead>
      <MtTableTbody>
        <MtTableTr><MtTableTd>Alice</MtTableTd><MtTableTd>alice@example.com</MtTableTd><MtTableTd>Admin</MtTableTd></MtTableTr>
        <MtTableTr><MtTableTd>Bob</MtTableTd><MtTableTd>bob@example.com</MtTableTd><MtTableTd>Editor</MtTableTd></MtTableTr>
      </MtTableTbody>
    </MtTable>
  )
}

export { MtTableBorders }
