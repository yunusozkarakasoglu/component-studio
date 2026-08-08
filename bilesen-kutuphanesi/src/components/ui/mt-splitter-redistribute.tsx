/**
 * MtSplitterRedistribute
 * Yeniden dağıt (saf React, Mantine kaynaklı).
 * @id 1797
 * @category Özel Komponentler
 * @subcategory MtSplitter
 * @source mantine
 */
import { MtSplitter } from "@/components/ui/mt-splitter"

function MtSplitterRedistribute() {
  return (
    <MtSplitter initialSize={60}>
      <div className="flex h-full items-center justify-center bg-blue-50 text-sm text-blue-700">%60</div>
      <div className="flex h-full items-center justify-center bg-teal-50 text-sm text-teal-700">%40</div>
    </MtSplitter>
  )
}

export { MtSplitterRedistribute }
