/**
 * MuiRatingHalf
 * @id 1962
 * @category Seçim
 * @subcategory MuiRating
 * @source mui
 */
import { MuiRating } from "@/components/ui/mui-rating"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiRatingHalf() {
  return (
    <MuiStack spacing={3}>
      <div>
        <p className="mb-1 text-sm text-gray-700">Yarım yıldız</p>
        <MuiRating defaultValue={2.5} half />
      </div>
      <div>
        <p className="mb-1 text-sm text-gray-700">2.5 değer</p>
        <MuiRating value={3.5} half readOnly />
      </div>
    </MuiStack>
  )
}

export { MuiRatingHalf }
