/**
 * MtButtonDisabledStyles
 * Özel devre dışı stilleri (saf React, Mantine kaynaklı).
 * @id 1068
 * @category Butonlar & Aksiyonlar
 * @subcategory MtButton
 * @source mantine
 */
import { MtButton } from "@/components/ui/mt-button"

function MtButtonDisabledStyles() {
  return (
    <div className="flex flex-wrap gap-3">
      <MtButton disabled className="disabled:bg-gray-200 disabled:text-gray-400 disabled:opacity-100">
        Custom disabled styles
      </MtButton>
      <MtButton variant="outline" disabled className="disabled:border-dashed disabled:opacity-100 disabled:text-muted-foreground">
        Outline disabled
      </MtButton>
    </div>
  )
}

export { MtButtonDisabledStyles }
