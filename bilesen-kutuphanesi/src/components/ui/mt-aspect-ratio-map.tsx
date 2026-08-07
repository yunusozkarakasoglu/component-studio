/**
 * MtAspectRatioMap
 * Harita alanı (saf React, Mantine kaynaklı).
 * Not: kaynaktaki Google Maps iframe'i offline ilkesi gereği placeholder ile değiştirildi.
 * @id 1037
 * @category Genel
 * @subcategory MtAspectRatio
 * @source mantine
 */
import { MtAspectRatio } from "@/components/ui/mt-aspect-ratio"

function MtAspectRatioMap() {
  return (
    <MtAspectRatio ratio={16 / 9} className="rounded-lg">
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-lime-500 to-green-700 text-white">
        🗺️ Map
      </div>
    </MtAspectRatio>
  )
}

export { MtAspectRatioMap }
