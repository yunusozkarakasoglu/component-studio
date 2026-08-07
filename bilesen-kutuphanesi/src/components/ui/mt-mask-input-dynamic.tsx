/**
 * MtMaskInputDynamic
 * Dinamik maske (saf React, Mantine kaynaklı).
 * @id 1180
 * @category Form Elemanları
 * @subcategory MtMaskInput
 * @source mantine
 */
import { MtMaskInput } from "@/components/ui/mt-mask-input"

function MtMaskInputDynamic() {
  return (
    <MtMaskInput label="IP address" placeholder="192.168.0.1" mask={(v) => v.replace(/[^0-9.]/g, "").slice(0, 15)} className="max-w-sm" />
  )
}

export { MtMaskInputDynamic }
