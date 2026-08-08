/**
 * MtTitleTextWrap
 * Sarmalı başlık (saf React, Mantine kaynaklı).
 * @id 1489
 * @category Veri Gösterimi
 * @subcategory MtTitle
 * @source mantine
 */
import { MtTitle } from "@/components/ui/mt-title"

function MtTitleTextWrap() {
  return (
    <div className="flex max-w-sm flex-col gap-2">
      <MtTitle order={3} className="whitespace-nowrap overflow-hidden text-ellipsis">
        This heading never wraps and gets cut off with an ellipsis instead
      </MtTitle>
      <MtTitle order={3} c="dimmed" className="break-words">
        This one wraps normally across multiple lines when space runs out.
      </MtTitle>
    </div>
  )
}

export { MtTitleTextWrap }
