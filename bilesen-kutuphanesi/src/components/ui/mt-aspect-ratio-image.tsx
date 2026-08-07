/**
 * MtAspectRatioImage
 * Görsel oranı (saf React, Mantine kaynaklı).
 * Not: kaynaktaki uzak görsel offline ilkesi gereği gradient ile değiştirildi.
 * @id 1036
 * @category Genel
 * @subcategory MtAspectRatio
 * @source mantine
 */
import { MtAspectRatio } from "@/components/ui/mt-aspect-ratio"

function MtAspectRatioImage() {
  return (
    <MtAspectRatio ratio={1080 / 720} className="mx-auto max-w-[300px] rounded-lg">
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-700 text-4xl">
        🐼
      </div>
    </MtAspectRatio>
  )
}

export { MtAspectRatioImage }
