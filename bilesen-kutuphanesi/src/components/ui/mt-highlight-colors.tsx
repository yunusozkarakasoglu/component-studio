/**
 * MtHighlightColors
 * Renkler (saf React, Mantine kaynaklı).
 * @id 1574
 * @category Alert & Dialog
 * @subcategory MtHighlight
 * @source mantine
 */
import { MtHighlight } from "@/components/ui/mt-highlight"

function MtHighlightColors() {
  return (
    <div className="flex flex-col gap-2">
      <MtHighlight highlight={["yellow"]} color="yellow">Yellow highlight</MtHighlight>
      <MtHighlight highlight={["blue"]} color="blue">Blue highlight</MtHighlight>
      <MtHighlight highlight={["green"]} color="green">Green highlight</MtHighlight>
      <MtHighlight highlight={["red"]} color="red">Red highlight</MtHighlight>
    </div>
  )
}

export { MtHighlightColors }
