/**
 * MtSplitterVertical
 * Dikey (saf React, Mantine kaynaklı).
 * @id 1799
 * @category Özel Komponentler
 * @subcategory MtSplitter
 * @source mantine
 */
import { MtSplitter } from "@/components/ui/mt-splitter"

function MtSplitterVertical() {
  return (
    <MtSplitter orientation="vertical">
      <div className="flex w-full items-center justify-center bg-blue-50 text-sm text-blue-700">Üst</div>
      <div className="flex w-full items-center justify-center bg-teal-50 text-sm text-teal-700">Alt</div>
    </MtSplitter>
  )
}

export { MtSplitterVertical }
