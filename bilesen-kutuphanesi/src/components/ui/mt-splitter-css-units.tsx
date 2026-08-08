/**
 * MtSplitterCssUnits
 * CSS birimleri (saf React, Mantine kaynaklı).
 * @id 1793
 * @category Özel Komponentler
 * @subcategory MtSplitter
 * @source mantine
 */
import { MtSplitter } from "@/components/ui/mt-splitter"

function MtSplitterCssUnits() {
  return (
    <MtSplitter initialSize={35}>
      <div className="flex h-full items-center justify-center bg-blue-50 text-sm text-blue-700">%35</div>
      <div className="flex h-full items-center justify-center bg-teal-50 text-sm text-teal-700">%65</div>
    </MtSplitter>
  )
}

export { MtSplitterCssUnits }
