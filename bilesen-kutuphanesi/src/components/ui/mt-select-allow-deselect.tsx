/**
 * MtSelectAllowDeselect
 * Seçimi kaldırmaya izin ver (saf React, Mantine kaynaklı).
 * @id 1313
 * @category Combobox
 * @subcategory MtSelect
 * @source mantine
 */
import { MtSelect } from "@/components/ui/mt-select"

function MtSelectAllowDeselect() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <MtSelect data={["React", "Vue"]} label="Allow deselect" defaultValue="React" />
      <MtSelect data={["React", "Vue"]} label="No deselect" defaultValue="React" allowDeselect={false} />
    </div>
  )
}

export { MtSelectAllowDeselect }
