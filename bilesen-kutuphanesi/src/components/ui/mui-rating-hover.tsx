/**
 * MuiRatingHover
 * @id 2055
 * @category Seçim
 * @subcategory MuiRating
 * @source mui
 */
import { useState } from "react"
import { MuiRating } from "@/components/ui/mui-rating"

function MuiRatingHover() {
  const [value, setValue] = useState<number | null>(3)
  const labels: Record<number, string> = { 1: "Çok Kötü", 2: "Kötü", 3: "Orta", 4: "İyi", 5: "Mükemmel" }
  return (
    <div className="flex items-center gap-3">
      <MuiRating value={value} onChange={setValue} />
      <span className="text-sm text-gray-600">{value ? labels[value] : "Puanlayın"}</span>
    </div>
  )
}

export { MuiRatingHover }
