/**
 * MtSegmentedControlDisabled
 * Devre dışı durum (saf React, Mantine kaynaklı).
 * @id 1252
 * @category Seçim
 * @subcategory MtSegmentedControl
 * @source mantine
 */
import { MtSegmentedControl } from "@/components/ui/mt-segmented-control"

function MtSegmentedControlDisabled() {
  return (
    <div className="flex flex-col gap-4">
      <MtSegmentedControl data={["Enabled", "Options"]} defaultValue="Enabled" />
      <MtSegmentedControl data={["Disabled", "Options"]} defaultValue="Disabled" disabled />
    </div>
  )
}

export { MtSegmentedControlDisabled }
