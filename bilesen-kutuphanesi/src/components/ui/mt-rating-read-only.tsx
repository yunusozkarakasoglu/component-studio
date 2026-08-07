/**
 * MtRatingReadOnly
 * Salt okunur (saf React, Mantine kaynaklı).
 * @id 1279
 * @category Seçim
 * @subcategory MtRating
 * @source mantine
 */
import { MtRating } from "@/components/ui/mt-rating"

function MtRatingReadOnly() {
  return <MtRating value={4} readOnly />
}

export { MtRatingReadOnly }
