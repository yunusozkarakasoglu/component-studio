/**
 * MtRatingSize
 * Boyutlar (saf React, Mantine kaynaklı).
 * @id 1281
 * @category Seçim
 * @subcategory MtRating
 * @source mantine
 */
import { MtRating } from "@/components/ui/mt-rating"

function MtRatingSize() {
  return (
    <div className="flex flex-col items-start gap-3">
      <MtRating defaultValue={3} size="xs" />
      <MtRating defaultValue={3} size="sm" />
      <MtRating defaultValue={3} size="md" />
      <MtRating defaultValue={3} size="lg" />
      <MtRating defaultValue={3} size="xl" />
    </div>
  )
}

export { MtRatingSize }
