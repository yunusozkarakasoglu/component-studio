/**
 * MuiCheckboxIcon
 * @id 2057
 * @category Seçim
 * @subcategory MuiCheckbox
 * @source mui
 */
import { useState } from "react"
import { MuiStack } from "@/components/ui/mui-stack"
import { Star, Heart } from "@/components/ui/icons"

function MuiCheckboxIcon() {
  const [fav, setFav] = useState(true)
  const [star, setStar] = useState(false)
  return (
    <MuiStack direction="row" spacing={4} className="items-center">
      <button type="button" onClick={() => setFav((v) => !v)} aria-pressed={fav} className="cursor-pointer">
        <Heart className={fav ? "size-7 fill-red-500 text-red-500" : "size-7 text-gray-300"} />
      </button>
      <button type="button" onClick={() => setStar((v) => !v)} aria-pressed={star} className="cursor-pointer">
        <Star className={star ? "size-7 fill-amber-400 text-amber-400" : "size-7 text-gray-300"} />
      </button>
    </MuiStack>
  )
}

export { MuiCheckboxIcon }
