/**
 * MtTextTextWrap
 * Metin sarma (saf React, Mantine kaynaklı).
 * @id 1485
 * @category Veri Gösterimi
 * @subcategory MtText
 * @source mantine
 */
import { MtText } from "@/components/ui/mt-text"

function MtTextTextWrap() {
  return (
    <div className="flex max-w-md flex-col gap-2">
      <MtText>Normal wrapping — long words like pneumonoultramicroscopicsilicovolcanoconiosis wrap naturally.</MtText>
      <MtText className="whitespace-nowrap overflow-hidden text-ellipsis" c="dimmed">No wrap — this text overflows the container with an ellipsis instead of wrapping to a new line.</MtText>
    </div>
  )
}

export { MtTextTextWrap }
