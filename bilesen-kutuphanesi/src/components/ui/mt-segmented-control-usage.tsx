/**
 * MtSegmentedControlUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1250
 * @category Seçim
 * @subcategory MtSegmentedControl
 * @source mantine
 */
import { MtSegmentedControl } from "@/components/ui/mt-segmented-control"

function MtSegmentedControlUsage() {
  return <MtSegmentedControl data={["React", "Vue", "Angular"]} defaultValue="React" />
}

export { MtSegmentedControlUsage }
