/**
 * MtTitleLineClamp
 * Satır kırpmalı başlık (saf React, Mantine kaynaklı).
 * @id 1487
 * @category Veri Gösterimi
 * @subcategory MtTitle
 * @source mantine
 */
import { MtTitle } from "@/components/ui/mt-title"

function MtTitleLineClamp() {
  return (
    <div className="flex max-w-sm flex-col gap-3">
      <MtTitle order={3} lineClamp={2}>
        A really long title that will be clamped to two lines because it contains way too many words for a single line
      </MtTitle>
      <MtTitle order={4} lineClamp={1} c="dimmed">
        Clamped to a single line — the rest is hidden with an ellipsis at the end
      </MtTitle>
    </div>
  )
}

export { MtTitleLineClamp }
