/**
 * MtNumberFormatterPrefixSuffix
 * Önek/sonek (saf React, Mantine kaynaklı).
 * @id 1560
 * @category Yükleme & İlerleme
 * @subcategory MtNumberFormatter
 * @source mantine
 */
import { MtNumberFormatter } from "@/components/ui/mt-number-formatter"

function MtNumberFormatterPrefixSuffix() {
  return (
    <div className="flex flex-col gap-1.5 text-sm text-foreground">
      <span>Para birimi: <MtNumberFormatter value={199.99} prefix="$" /></span>
      <span>Yüzde: <MtNumberFormatter value={0.5} suffix="%" decimalScale={1} /></span>
      <span>Ağırlık: <MtNumberFormatter value={5} prefix="+" suffix=" kg" /></span>
    </div>
  )
}

export { MtNumberFormatterPrefixSuffix }
