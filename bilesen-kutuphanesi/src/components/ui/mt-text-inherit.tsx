/**
 * MtTextInherit
 * Kalıtım (saf React, Mantine kaynaklı).
 * @id 1483
 * @category Veri Gösterimi
 * @subcategory MtText
 * @source mantine
 */
import { MtText } from "@/components/ui/mt-text"

function MtTextInherit() {
  return (
    <div className="max-w-md">
      <MtText fw={700}>Parent heading</MtText>
      <MtText size="sm" c="dimmed">
        Regular paragraph. <MtText inherit span c="blue">Inline inherited text</MtText> stays on the same line.
      </MtText>
    </div>
  )
}

export { MtTextInherit }
