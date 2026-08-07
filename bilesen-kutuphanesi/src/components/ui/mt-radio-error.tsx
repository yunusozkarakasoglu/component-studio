/**
 * MtRadioError
 * Hata durumu (saf React, Mantine kaynaklı).
 * @id 1231
 * @category Seçim
 * @subcategory MtRadio
 * @source mantine
 */
import { MtRadio, MtRadioGroup } from "@/components/ui/mt-radio"

function MtRadioError() {
  return (
    <MtRadioGroup defaultValue="">
      <div className="rounded-md border border-red-300 bg-red-50 p-3">
        <p className="mb-2 text-sm font-medium text-red-600">Please select a plan</p>
        <MtRadio value="basic" label="Basic" />
        <MtRadio value="pro" label="Pro" />
      </div>
    </MtRadioGroup>
  )
}

export { MtRadioError }
