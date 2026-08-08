/**
 * MtNumberFormatterUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1559
 * @category Yükleme & İlerleme
 * @subcategory MtNumberFormatter
 * @source mantine
 */
import { MtNumberFormatter } from "@/components/ui/mt-number-formatter"

function MtNumberFormatterUsage() {
  return (
    <div className="flex flex-col gap-1.5 text-sm text-foreground">
      <span>Binlik: <MtNumberFormatter value={1234567} thousandSeparator /></span>
      <span>Düz: <MtNumberFormatter value={1234} /></span>
      <span>Ondalık: <MtNumberFormatter value={12.3456} decimalScale={2} /></span>
    </div>
  )
}

export { MtNumberFormatterUsage }
