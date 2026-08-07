/**
 * MtMultiSelectError
 * Hata durumu (saf React, Mantine kaynaklı).
 * @id 1320
 * @category Combobox
 * @subcategory MtMultiSelect
 * @source mantine
 */
import { MtMultiSelect } from "@/components/ui/mt-multi-select"

function MtMultiSelectError() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <MtMultiSelect data={["React", "Vue"]} label="Boolean error" error />
      <MtMultiSelect data={["React", "Vue"]} label="With message" error="Select at least one" />
    </div>
  )
}

export { MtMultiSelectError }
