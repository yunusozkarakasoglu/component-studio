/**
 * MtAspectRatioVideo
 * 16/9 video alanı (saf React, Mantine kaynaklı).
 * Not: kaynaktaki YouTube iframe'i offline ilkesi gereği placeholder ile değiştirildi.
 * @id 1035
 * @category Genel
 * @subcategory MtAspectRatio
 * @source mantine
 */
import { MtAspectRatio } from "@/components/ui/mt-aspect-ratio"

function MtAspectRatioVideo() {
  return (
    <MtAspectRatio ratio={16 / 9} className="rounded-lg bg-muted">
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-red-500 to-rose-700 text-white">
        ▶ Video
      </div>
    </MtAspectRatio>
  )
}

export { MtAspectRatioVideo }
