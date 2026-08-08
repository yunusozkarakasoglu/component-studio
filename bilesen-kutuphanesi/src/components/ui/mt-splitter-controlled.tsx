/**
 * MtSplitterControlled
 * Kontrollü (saf React, Mantine kaynaklı).
 * @id 1792
 * @category Özel Komponentler
 * @subcategory MtSplitter
 * @source mantine
 */
import { MtSplitter } from "@/components/ui/mt-splitter"

function MtSplitterControlled() {
  return (
    <MtSplitter initialSize={40}>
      <div className="flex h-full items-center justify-center bg-blue-50 text-sm text-blue-700">%40</div>
      <div className="flex h-full items-center justify-center bg-teal-50 text-sm text-teal-700">%60</div>
    </MtSplitter>
  )
}

export { MtSplitterControlled }
