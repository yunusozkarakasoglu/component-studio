/**
 * MtSplitterCollapsible
 * Katlanabilir (saf React, Mantine kaynaklı).
 * @id 1791
 * @category Özel Komponentler
 * @subcategory MtSplitter
 * @source mantine
 */
import { MtSplitter } from "@/components/ui/mt-splitter"

function MtSplitterCollapsible() {
  return (
    <MtSplitter initialSize={30}>
      <div className="flex h-full items-center justify-center bg-blue-50 text-sm text-blue-700">Küçük panel</div>
      <div className="flex h-full items-center justify-center bg-teal-50 text-sm text-teal-700">Geniş panel</div>
    </MtSplitter>
  )
}

export { MtSplitterCollapsible }
