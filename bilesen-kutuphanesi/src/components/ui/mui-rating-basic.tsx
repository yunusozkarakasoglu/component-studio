/**
 * MuiRatingBasic
 * @id 1961
 * @category Seçim
 * @subcategory MuiRating
 * @source mui
 */
import { useState } from "react"
import { MuiRating } from "@/components/ui/mui-rating"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiRatingBasic() {
  const [value, setValue] = useState<number | null>(2)
  return (
    <MuiStack spacing={3}>
      <div>
        <p className="mb-1 text-sm text-gray-700">Kontrollü</p>
        <MuiRating value={value} onChange={setValue} />
      </div>
      <div>
        <p className="mb-1 text-sm text-gray-700">Kontrolsüz</p>
        <MuiRating defaultValue={2} />
      </div>
      <div>
        <p className="mb-1 text-sm text-gray-700">Salt okunur</p>
        <MuiRating value={3.5} readOnly />
      </div>
    </MuiStack>
  )
}

export { MuiRatingBasic }
