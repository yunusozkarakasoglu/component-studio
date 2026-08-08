/**
 * MtHighlightVariant
 * Vurgu varyantları (saf React, Mantine kaynaklı).
 * @id 1576
 * @category Alert & Dialog
 * @subcategory MtHighlight
 * @source mantine
 */
import { MtHighlight } from "@/components/ui/mt-highlight"

function MtHighlightVariant() {
  return (
    <div className="flex flex-col gap-2">
      <MtHighlight highlight="term">Sıradan metin içinde term vurgusu</MtHighlight>
      <MtHighlight highlight="bir">Bir cümle, bir kelime, bir de sayı: 42</MtHighlight>
    </div>
  )
}

export { MtHighlightVariant }
