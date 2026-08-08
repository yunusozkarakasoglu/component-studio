/**
 * MtHighlightPattern
 * Desen eşleme (saf React, Mantine kaynaklı).
 * @id 1577
 * @category Alert & Dialog
 * @subcategory MtHighlight
 * @source mantine
 */
import { MtHighlight } from "@/components/ui/mt-highlight"

function MtHighlightPattern() {
  return (
    <MtHighlight highlight={["mt-", "px-"]} className="max-w-md font-mono text-xs">
      mt-4, px-2, py-1 — tailwind sınıfları önekle vurgulanır: mt-2, px-4, mt-auto.
    </MtHighlight>
  )
}

export { MtHighlightPattern }
