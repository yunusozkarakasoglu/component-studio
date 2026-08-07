/**
 * MtCloseButtonUsage
 * Temel kapatma butonu (saf React, Mantine kaynaklı).
 * @id 1091
 * @category Butonlar & Aksiyonlar
 * @subcategory MtCloseButton
 * @source mantine
 */
import { MtCloseButton } from "@/components/ui/mt-close-button"

function MtCloseButtonUsage() {
  return (
    <div className="flex items-center gap-3">
      <MtCloseButton aria-label="Close" />
      <MtCloseButton size="xs" aria-label="Close" />
      <MtCloseButton size="lg" aria-label="Close" />
      <MtCloseButton size="xl" aria-label="Close" />
    </div>
  )
}

export { MtCloseButtonUsage }
