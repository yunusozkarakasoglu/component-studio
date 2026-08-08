/**
 * MtSplitterNested
 * İç içe (saf React, Mantine kaynaklı).
 * @id 1796
 * @category Özel Komponentler
 * @subcategory MtSplitter
 * @source mantine
 */
import { MtSplitter } from "@/components/ui/mt-splitter"

function MtSplitterNested() {
  return (
    <MtSplitter initialSize={40} orientation="vertical">
      <div className="flex w-full items-center justify-center bg-blue-50 text-sm text-blue-700">Üst</div>
      <MtSplitter initialSize={50}>
        <div className="flex h-full items-center justify-center bg-teal-50 text-sm text-teal-700">Alt sol</div>
        <div className="flex h-full items-center justify-center bg-orange-50 text-sm text-orange-700">Alt sağ</div>
      </MtSplitter>
    </MtSplitter>
  )
}

export { MtSplitterNested }
