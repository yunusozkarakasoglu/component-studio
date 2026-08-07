/**
 * MtButtonGradient
 * Gradyan buton (saf React, Mantine kaynaklı).
 * @id 1066
 * @category Butonlar & Aksiyonlar
 * @subcategory MtButton
 * @source mantine
 */
import { MtButton } from "@/components/ui/mt-button"

function MtButtonGradient() {
  return (
    <MtButton variant="gradient" gradient={{ from: "#38bdf8", to: "#6366f1", deg: 90 }}>
      Gradient button
    </MtButton>
  )
}

export { MtButtonGradient }
