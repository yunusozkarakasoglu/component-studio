/**
 * MtSegmentedControlVertical
 * Dikey düzen (saf React, Mantine kaynaklı).
 * @id 1253
 * @category Seçim
 * @subcategory MtSegmentedControl
 * @source mantine
 */
import { MtSegmentedControl } from "@/components/ui/mt-segmented-control"

function MtSegmentedControlVertical() {
  return <MtSegmentedControl orientation="vertical" data={["Top", "Middle", "Bottom"]} defaultValue="Middle" />
}

export { MtSegmentedControlVertical }
