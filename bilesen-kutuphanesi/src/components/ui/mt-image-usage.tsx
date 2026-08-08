/**
 * MtImageUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1497
 * @category Veri Gösterimi
 * @subcategory MtImage
 * @source mantine
 */
import { MtImage } from "@/components/ui/mt-image"

function MtImageUsage() {
  return (
    <MtImage
      src="https://picsum.photos/seed/mountain/600/300"
      alt="Mountain landscape"
      radius="md"
      caption="Norway fjord landscape"
      className="max-w-md"
    />
  )
}

export { MtImageUsage }
