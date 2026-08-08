/**
 * MtTableStriped
 * Çizgili tablo (saf React, Mantine kaynaklı).
 * @id 1438
 * @category Veri Gösterimi
 * @subcategory MtTable
 * @source mantine
 */
import { MtTable, MtTableTbody, MtTableTd, MtTableTh, MtTableThead, MtTableTr } from "@/components/ui/mt-table"

function MtTableStriped() {
  return (
    <MtTable striped className="max-w-xl">
      <MtTableThead>
        <MtTableTr>
          <MtTableTh>Project</MtTableTh>
          <MtTableTh>Status</MtTableTh>
          <MtTableTh>Owner</MtTableTh>
        </MtTableTr>
      </MtTableThead>
      <MtTableTbody>
        <MtTableTr><MtTableTd className="bg-transparent">Website redesign</MtTableTd><MtTableTd className="bg-transparent">In progress</MtTableTd><MtTableTd className="bg-transparent">Jane</MtTableTd></MtTableTr>
        <MtTableTr><MtTableTd className="bg-transparent">Mobile app</MtTableTd><MtTableTd className="bg-transparent">Done</MtTableTd><MtTableTd className="bg-transparent">John</MtTableTd></MtTableTr>
        <MtTableTr><MtTableTd className="bg-transparent">API migration</MtTableTd><MtTableTd className="bg-transparent">Planning</MtTableTd><MtTableTd className="bg-transparent">Ana</MtTableTd></MtTableTr>
      </MtTableTbody>
    </MtTable>
  )
}

export { MtTableStriped }
