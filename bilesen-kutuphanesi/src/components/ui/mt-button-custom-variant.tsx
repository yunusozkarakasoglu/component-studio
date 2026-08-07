/**
 * MtButtonCustomVariant
 * Özel varyant — sınıf tabanlı (saf React, Mantine kaynaklı).
 * Not: kaynakta Styles API ile custom variant tanımlanır; burada sınıf ile uyarlandı.
 * @id 1069
 * @category Butonlar & Aksiyonlar
 * @subcategory MtButton
 * @source mantine
 */
import { MtButton } from "@/components/ui/mt-button"

function MtButtonCustomVariant() {
  return (
    <MtButton className="bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-md hover:from-amber-500 hover:to-orange-600">
      Custom variant
    </MtButton>
  )
}

export { MtButtonCustomVariant }
