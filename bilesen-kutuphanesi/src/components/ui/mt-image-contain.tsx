/**
 * MtImageContain
 * Sığdırma (saf React, Mantine kaynaklı).
 * @id 1499
 * @category Veri Gösterimi
 * @subcategory MtImage
 * @source mantine
 */
import { MtImage } from "@/components/ui/mt-image"

function MtImageContain() {
  return (
    <div className="flex flex-col gap-4">
      <MtImage src="https://picsum.photos/seed/city/600/400" fit="cover" h={160} radius="md" caption="Fit: cover (kırpılır)" className="max-w-md" />
      <MtImage src="https://picsum.photos/seed/ocean/600/400" fit="contain" h={160} radius="md" caption="Fit: contain (sığar)" className="max-w-md bg-muted/40" />
    </div>
  )
}

export { MtImageContain }
