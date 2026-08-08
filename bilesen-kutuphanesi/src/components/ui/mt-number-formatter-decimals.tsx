/**
 * MtNumberFormatterDecimals
 * Ondalık (saf React, Mantine kaynaklı).
 * @id 1561
 * @category Yükleme & İlerleme
 * @subcategory MtNumberFormatter
 * @source mantine
 */
import { MtNumberFormatter } from "@/components/ui/mt-number-formatter"

function MtNumberFormatterDecimals() {
  return (
    <div className="flex flex-col gap-1.5 text-sm text-foreground">
      <span><MtNumberFormatter value={3.14159} decimalScale={0} /> — 0 ondalık</span>
      <span><MtNumberFormatter value={3.14159} decimalScale={2} /> — 2 ondalık</span>
      <span><MtNumberFormatter value={3.14159} decimalScale={4} /> — 4 ondalık</span>
    </div>
  )
}

export { MtNumberFormatterDecimals }
