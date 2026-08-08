/**
 * MtSplitterWithHandle
 * Tutamaçlı (saf React, Mantine kaynaklı).
 * @id 1800
 * @category Özel Komponentler
 * @subcategory MtSplitter
 * @source mantine
 */
import { MtSplitter } from "@/components/ui/mt-splitter"

function MtSplitterWithHandle() {
  return (
    <MtSplitter withHandle>
      <div className="flex h-full items-center justify-center bg-blue-50 text-sm text-blue-700">Panel 1</div>
      <div className="flex h-full items-center justify-center bg-teal-50 text-sm text-teal-700">Panel 2</div>
    </MtSplitter>
  )
}

export { MtSplitterWithHandle }
