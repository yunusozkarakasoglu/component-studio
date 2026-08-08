/**
 * MtSplitterLineSize
 * Çizgi kalınlığı (saf React, Mantine kaynaklı).
 * @id 1794
 * @category Özel Komponentler
 * @subcategory MtSplitter
 * @source mantine
 */
import { MtSplitter } from "@/components/ui/mt-splitter"

function MtSplitterLineSize() {
  return (
    <MtSplitter lineSize={2}>
      <div className="flex h-full items-center justify-center bg-blue-50 text-sm text-blue-700">Panel 1</div>
      <div className="flex h-full items-center justify-center bg-teal-50 text-sm text-teal-700">Panel 2</div>
    </MtSplitter>
  )
}

export { MtSplitterLineSize }
