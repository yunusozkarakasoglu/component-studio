/**
 * MtSplitterMultiple
 * Çoklu bölücü (saf React, Mantine kaynaklı).
 * @id 1795
 * @category Özel Komponentler
 * @subcategory MtSplitter
 * @source mantine
 */
import { MtSplitter } from "@/components/ui/mt-splitter"

function MtSplitterMultiple() {
  return (
    <div className="flex h-48 flex-col gap-2">
      <MtSplitter initialSize={30}>
        <div className="flex h-full items-center justify-center bg-blue-50 text-sm text-blue-700">A</div>
        <MtSplitter initialSize={50}>
          <div className="flex h-full items-center justify-center bg-teal-50 text-sm text-teal-700">B</div>
          <div className="flex h-full items-center justify-center bg-orange-50 text-sm text-orange-700">C</div>
        </MtSplitter>
      </MtSplitter>
    </div>
  )
}

export { MtSplitterMultiple }
