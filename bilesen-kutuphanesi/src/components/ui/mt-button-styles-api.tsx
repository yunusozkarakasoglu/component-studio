/**
 * MtButtonStylesApi
 * Styles API — özel sınıflar (saf React, Mantine kaynaklı).
 * @id 1074
 * @category Butonlar & Aksiyonlar
 * @subcategory MtButton
 * @source mantine
 */
import { MtButton } from "@/components/ui/mt-button"

function MtButtonStylesApi() {
  return (
    <div className="flex flex-wrap gap-3">
      <MtButton variant="filled" className="rounded-full px-8 shadow-lg">
        Rounded primary
      </MtButton>
      <MtButton variant="light" className="rounded-full px-8">
        Rounded light
      </MtButton>
      <MtButton variant="outline" className="rounded-full px-8">
        Rounded outline
      </MtButton>
    </div>
  )
}

export { MtButtonStylesApi }
