/**
 * MtTextGradient
 * Gradyan metin (saf React, Mantine kaynaklı).
 * @id 1482
 * @category Veri Gösterimi
 * @subcategory MtText
 * @source mantine
 */
import { MtText } from "@/components/ui/mt-text"

function MtTextGradient() {
  return (
    <div className="flex flex-col gap-2">
      <MtText fw={800} size="xl" gradient={{ from: "blue", to: "cyan" }}>Gradient from blue to cyan</MtText>
      <MtText fw={800} size="xl" gradient={{ from: "grape", to: "pink", deg: 135 }}>Gradient from grape to pink</MtText>
      <MtText fw={800} size="xl" gradient={{ from: "orange", to: "red" }}>Gradient from orange to red</MtText>
    </div>
  )
}

export { MtTextGradient }
