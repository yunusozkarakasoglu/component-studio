/**
 * MtSelectError
 * Hata durumu (saf React, Mantine kaynaklı).
 * @id 1309
 * @category Combobox
 * @subcategory MtSelect
 * @source mantine
 */
import { MtSelect } from "@/components/ui/mt-select"

function MtSelectError() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <MtSelect data={["React", "Vue"]} label="Boolean error" error />
      <MtSelect data={["React", "Vue"]} label="With message" error="Please select a framework" />
    </div>
  )
}

export { MtSelectError }
