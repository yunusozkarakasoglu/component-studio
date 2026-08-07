/**
 * MtActionIconGradient
 * Gradyan ikon butonu (saf React, Mantine kaynaklı).
 * @id 1087
 * @category Butonlar & Aksiyonlar
 * @subcategory MtActionIcon
 * @source mantine
 */
import { Star } from "@/components/ui/icons"
import { MtActionIcon } from "@/components/ui/mt-action-icon"

function MtActionIconGradient() {
  return (
    <MtActionIcon aria-label="Star" className="bg-gradient-to-br from-pink-500 to-yellow-400 text-white hover:from-pink-600 hover:to-yellow-500">
      <Star className="size-4" />
    </MtActionIcon>
  )
}

export { MtActionIconGradient }
