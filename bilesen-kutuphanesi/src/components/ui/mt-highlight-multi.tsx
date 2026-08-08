/**
 * MtHighlightMulti
 * Çoklu vurgu (saf React, Mantine kaynaklı).
 * @id 1573
 * @category Alert & Dialog
 * @subcategory MtHighlight
 * @source mantine
 */
import { MtHighlight } from "@/components/ui/mt-highlight"

function MtHighlightMulti() {
  return (
    <MtHighlight highlight={["React", "Vue", "Svelte"]} className="max-w-md">
      React, Vue and Svelte are all popular frontend frameworks with different approaches.
    </MtHighlight>
  )
}

export { MtHighlightMulti }
