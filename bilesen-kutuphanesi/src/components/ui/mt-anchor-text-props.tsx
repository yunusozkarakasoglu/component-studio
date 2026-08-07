/**
 * MtAnchorTextProps
 * Metin özellikleri — gradyan (saf React, Mantine kaynaklı).
 * @id 1101
 * @category Butonlar & Aksiyonlar
 * @subcategory MtAnchor
 * @source mantine
 */
import { MtAnchor } from "@/components/ui/mt-anchor"

function MtAnchorTextProps() {
  return (
    <MtAnchor
      href="#"
      variant="gradient"
      gradient={{ from: "#ec4899", to: "#f59e0b" }}
      className="text-lg font-medium"
    >
      A link with pink to yellow gradient
    </MtAnchor>
  )
}

export { MtAnchorTextProps }
