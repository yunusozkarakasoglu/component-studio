/**
 * MtCloseButtonIcon
 * Özel ikonlu kapatma butonu (saf React, Mantine kaynaklı).
 * @id 1092
 * @category Butonlar & Aksiyonlar
 * @subcategory MtCloseButton
 * @source mantine
 */
import { X } from "@/components/ui/icons"
import { MtCloseButton } from "@/components/ui/mt-close-button"

function MtCloseButtonIcon() {
  return (
    <div className="flex items-center gap-3">
      <MtCloseButton icon={<X className="size-5 text-red-500" />} aria-label="Close with icon" size="lg" />
      <MtCloseButton className="bg-blue-600 text-white hover:bg-blue-700 hover:text-white" aria-label="Filled close" />
    </div>
  )
}

export { MtCloseButtonIcon }
