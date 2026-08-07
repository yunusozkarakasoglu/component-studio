/**
 * MtButtonDisabledLink
 * Bağlantı olarak devre dışı buton (saf React, Mantine kaynaklı).
 * Not: kaynakta data-disabled + preventDefault kullanılır — aynı yaklaşım.
 * @id 1067
 * @category Butonlar & Aksiyonlar
 * @subcategory MtButton
 * @source mantine
 */
import { MtAnchor } from "@/components/ui/mt-anchor"

function MtButtonDisabledLink() {
  return (
    <MtAnchor
      href="#"
      data-disabled
      className="pointer-events-none opacity-50"
      onClick={(e) => e.preventDefault()}
    >
      Disabled link button
    </MtAnchor>
  )
}

export { MtButtonDisabledLink }
