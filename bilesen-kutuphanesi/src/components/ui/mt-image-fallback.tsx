/**
 * MtImageFallback
 * Yedek görsel (saf React, Mantine kaynaklı).
 * @id 1498
 * @category Veri Gösterimi
 * @subcategory MtImage
 * @source mantine
 */
import { MtImage } from "@/components/ui/mt-image"

function MtImageFallback() {
  return (
    <div className="flex flex-col gap-4">
      <MtImage src="https://picsum.photos/seed/forest/600/300" radius="md" className="max-w-md" />
      <MtImage src="https://invalid-url.example.com/missing.png" fallbackSrc="https://picsum.photos/seed/fallback/600/300" radius="md" caption="Fallback after error" className="max-w-md" />
    </div>
  )
}

export { MtImageFallback }
