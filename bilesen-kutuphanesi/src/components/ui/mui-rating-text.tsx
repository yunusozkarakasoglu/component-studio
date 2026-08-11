/**
 * MuiRatingText
 * @id 2063
 * @category Seçim
 * @subcategory MuiRating
 * @source mui
 */
import { useState } from "react"
import { MuiRating } from "@/components/ui/mui-rating"

function MuiRatingText() {
  const [value, setValue] = useState<number | null>(4)
  const texts = ["", "Kötü", "Zayıf", "Orta", "İyi", "Mükemmel"]
  return (
    <div className="flex flex-col gap-1">
      <MuiRating value={value} onChange={setValue} max={5} />
      <span className="text-xs text-gray-500">{value ? texts[value] : "—"}</span>
    </div>
  )
}

export { MuiRatingText }
