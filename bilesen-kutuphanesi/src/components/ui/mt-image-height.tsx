/**
 * MtImageHeight
 * Yükseklikli görsel (saf React, Mantine kaynaklı).
 * @id 1500
 * @category Veri Gösterimi
 * @subcategory MtImage
 * @source mantine
 */
import { MtImage } from "@/components/ui/mt-image"

function MtImageHeight() {
  return (
    <div className="flex gap-4">
      <MtImage src="https://picsum.photos/seed/lake/400/400" h={180} radius="lg" className="w-1/2" />
      <MtImage src="https://picsum.photos/seed/desert/400/400" h={180} radius="xl" className="w-1/2" />
    </div>
  )
}

export { MtImageHeight }
