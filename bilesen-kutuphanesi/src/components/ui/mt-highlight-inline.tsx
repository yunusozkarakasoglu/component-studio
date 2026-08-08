/**
 * MtHighlightInline
 * Satır içi vurgu (saf React, Mantine kaynaklı).
 * @id 1579
 * @category Alert & Dialog
 * @subcategory MtHighlight
 * @source mantine
 */
import { MtHighlight } from "@/components/ui/mt-highlight"

function MtHighlightInline() {
  return (
    <p className="max-w-md text-sm text-foreground">
      Sonuçlar: <MtHighlight highlight="3" color="green">3 hata</MtHighlight> ve{" "}
      <MtHighlight highlight="7" color="blue">7 uyarı</MtHighlight> — tümü giderildiğinde sürüm hazır.
    </p>
  )
}

export { MtHighlightInline }
