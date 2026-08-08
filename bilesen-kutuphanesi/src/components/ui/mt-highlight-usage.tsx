/**
 * MtHighlightUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1572
 * @category Alert & Dialog
 * @subcategory MtHighlight
 * @source mantine
 */
import { MtHighlight } from "@/components/ui/mt-highlight"

function MtHighlightUsage() {
  return (
    <MtHighlight highlight="This" className="max-w-md">
      This can be highlighted in any color you like.
    </MtHighlight>
  )
}

export { MtHighlightUsage }
