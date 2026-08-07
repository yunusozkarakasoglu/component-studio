/**
 * MtSelectLoading
 * Yükleniyor durumu (saf React, Mantine kaynaklı).
 * @id 1312
 * @category Combobox
 * @subcategory MtSelect
 * @source mantine
 */
import { MtSelect } from "@/components/ui/mt-select"

function MtSelectLoading() {
  return <MtSelect data={["React", "Vue"]} label="Loading" loading disabled className="max-w-sm" />
}

export { MtSelectLoading }
