/**
 * MtRatingAllowClear
 * Temizlemeye izin ver (saf React, Mantine kaynaklı).
 * @id 1282
 * @category Seçim
 * @subcategory MtRating
 * @source mantine
 */
import { MtRating } from "@/components/ui/mt-rating"

function MtRatingAllowClear() {
  return (
    <div className="flex flex-col items-start gap-3">
      <MtRating defaultValue={3} />
      <span className="text-xs text-muted-foreground">Click the selected star again to clear</span>
    </div>
  )
}

export { MtRatingAllowClear }
