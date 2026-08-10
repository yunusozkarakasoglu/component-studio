/**
 * MuiRatingSizes
 * @id 1963
 * @category Seçim
 * @subcategory MuiRating
 * @source mui
 */
import { MuiRating } from "@/components/ui/mui-rating"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiRatingSizes() {
  return (
    <MuiStack spacing={2} className="items-start">
      <MuiRating defaultValue={4} size="small" />
      <MuiRating defaultValue={4} size="medium" />
      <MuiRating defaultValue={4} size="large" />
    </MuiStack>
  )
}

export { MuiRatingSizes }
