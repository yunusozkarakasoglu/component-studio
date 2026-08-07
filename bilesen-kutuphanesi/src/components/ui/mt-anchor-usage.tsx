/**
 * MtAnchorUsage
 * Bağlantı — alt çizgi varyantları (saf React, Mantine kaynaklı).
 * @id 1100
 * @category Butonlar & Aksiyonlar
 * @subcategory MtAnchor
 * @source mantine
 */
import { MtAnchor } from "@/components/ui/mt-anchor"
import { MtGroup } from "@/components/ui/mt-group"

function MtAnchorUsage() {
  return (
    <MtGroup gap="lg" justify="center">
      <MtAnchor href="#" underline="always">Underline always</MtAnchor>
      <MtAnchor href="#" underline="hover">Underline hover</MtAnchor>
      <MtAnchor href="#" underline="never">Underline never</MtAnchor>
      <MtAnchor href="#" underline="not-hover">Underline not-hover</MtAnchor>
    </MtGroup>
  )
}

export { MtAnchorUsage }
