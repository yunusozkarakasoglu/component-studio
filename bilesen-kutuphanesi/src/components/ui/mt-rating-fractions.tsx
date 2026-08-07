/**
 * MtRatingFractions
 * Kesirli değerler (saf React, Mantine kaynaklı).
 * @id 1280
 * @category Seçim
 * @subcategory MtRating
 * @source mantine
 */
import { MtRating } from "@/components/ui/mt-rating"

function MtRatingFractions() {
  return <MtRating defaultValue={3.5} fractions={2} />
}

export { MtRatingFractions }
