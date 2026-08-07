/**
 * MtButtonLoaderProps
 * Özel loader (saf React, Mantine kaynaklı).
 * @id 1073
 * @category Butonlar & Aksiyonlar
 * @subcategory MtButton
 * @source mantine
 */
import { MtButton } from "@/components/ui/mt-button"

function MtButtonLoaderProps() {
  return (
    <div className="flex flex-wrap gap-3">
      <MtButton loading className="[&_span]:bg-red-400">
        Custom loader color
      </MtButton>
      <MtButton loading variant="outline">
        Loading outline
      </MtButton>
    </div>
  )
}

export { MtButtonLoaderProps }
