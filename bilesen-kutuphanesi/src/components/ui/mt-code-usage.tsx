/**
 * MtCodeUsage
 * Satır içi kod (saf React, Mantine kaynaklı).
 * @id 1567
 * @category Alert & Dialog
 * @subcategory MtCode
 * @source mantine
 */
import { MtCode } from "@/components/ui/mt-code"

function MtCodeUsage() {
  return (
    <p className="text-sm text-foreground">
      React bileşenlerini <MtCode>npm run dev</MtCode> ile çalıştır, <MtCode>tsc</MtCode> ile tip kontrol et.
    </p>
  )
}

export { MtCodeUsage }
