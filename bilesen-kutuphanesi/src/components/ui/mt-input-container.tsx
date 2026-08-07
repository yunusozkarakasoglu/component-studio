/**
 * MtInputContainer
 * Giriş konteyneri (saf React, Mantine kaynaklı).
 * @id 1205
 * @category Form Elemanları
 * @subcategory MtInput
 * @source mantine
 */
import { MtInput } from "@/components/ui/mt-input"

function MtInputContainer() {
  return (
    <div className="max-w-sm rounded-lg border border-dashed border-border p-3">
      <MtInput placeholder="Inside a container" />
    </div>
  )
}

export { MtInputContainer }
