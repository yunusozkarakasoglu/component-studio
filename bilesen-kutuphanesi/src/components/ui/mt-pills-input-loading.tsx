/**
 * MtPillsInputLoading
 * Yükleniyor durumu (saf React, Mantine kaynaklı).
 * @id 1297
 * @category Seçim
 * @subcategory MtPillsInput
 * @source mantine
 */
import { MtPillsInput } from "@/components/ui/mt-pills-input"

function MtPillsInputLoading() {
  return <MtPillsInput defaultValue={["Loading"]} loading disabled label="Disabled" className="max-w-sm" />
}

export { MtPillsInputLoading }
