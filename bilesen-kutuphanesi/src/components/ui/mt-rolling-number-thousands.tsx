/**
 * MtRollingNumberThousands
 * Binlik ayraç (saf React, Mantine kaynaklı).
 * @id 1557
 * @category Yükleme & İlerleme
 * @subcategory MtRollingNumber
 * @source mantine
 */
import { MtRollingNumber } from "@/components/ui/mt-rolling-number"

function MtRollingNumberThousands() {
  return (
    <div className="flex flex-col gap-1.5">
      <MtRollingNumber value={1234567} className="text-xl font-semibold" />
      <MtRollingNumber value={9876543.21} decimalScale={2} className="text-xl font-semibold" />
      <MtRollingNumber value={42} prefix="₺" suffix=",00" className="text-xl font-semibold" />
    </div>
  )
}

export { MtRollingNumberThousands }
