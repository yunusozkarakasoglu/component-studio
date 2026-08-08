/**
 * MtTextLineClamp
 * Satır kırpma (saf React, Mantine kaynaklı).
 * @id 1480
 * @category Veri Gösterimi
 * @subcategory MtText
 * @source mantine
 */
import { MtText } from "@/components/ui/mt-text"

const long = "The Mantine library is a React components library with more than 100 customizable components and hooks covering a wide range of use cases — from simple typography to complex forms and data tables."

function MtTextLineClamp() {
  return (
    <div className="flex max-w-md flex-col gap-3">
      <MtText lineClamp={2}>{long}</MtText>
      <MtText lineClamp={3} c="dimmed">{long}</MtText>
      <MtText lineClamp={1} fw={500}>{long}</MtText>
    </div>
  )
}

export { MtTextLineClamp }
