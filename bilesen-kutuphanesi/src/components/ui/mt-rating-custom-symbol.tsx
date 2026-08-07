/**
 * MtRatingCustomSymbol
 * Özel sembol (saf React, Mantine kaynaklı).
 * @id 1283
 * @category Seçim
 * @subcategory MtRating
 * @source mantine
 */
import { Heart } from "@/components/ui/icons"
import { MtRating } from "@/components/ui/mt-rating"

function MtRatingCustomSymbol() {
  return <MtRating defaultValue={3} fullSymbol={<Heart className="size-5 fill-rose-500 text-rose-500" />} emptySymbol={<Heart className="size-5 text-gray-300" />} />
}

export { MtRatingCustomSymbol }
