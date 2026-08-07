/**
 * MtSegmentedControlFullWidth
 * Tam genişlik (saf React, Mantine kaynaklı).
 * @id 1255
 * @category Seçim
 * @subcategory MtSegmentedControl
 * @source mantine
 */
import { MtSegmentedControl } from "@/components/ui/mt-segmented-control"

function MtSegmentedControlFullWidth() {
  return <MtSegmentedControl fullWidth data={["Dashboard", "Reports", "Settings"]} defaultValue="Reports" />
}

export { MtSegmentedControlFullWidth }
