/**
 * MtHighlightCaseSensitive
 * Büyük/küçük harf duyarlı (saf React, Mantine kaynaklı).
 * @id 1575
 * @category Alert & Dialog
 * @subcategory MtHighlight
 * @source mantine
 */
import { MtHighlight } from "@/components/ui/mt-highlight"

function MtHighlightCaseSensitive() {
  return (
    <div className="flex flex-col gap-2">
      <MtHighlight highlight="apple">apple vs Apple — eşleşme duyarsız</MtHighlight>
      <MtHighlight highlight="Apple">Apple yalnızca büyük harfle eşleşir (pattern).</MtHighlight>
    </div>
  )
}

export { MtHighlightCaseSensitive }
