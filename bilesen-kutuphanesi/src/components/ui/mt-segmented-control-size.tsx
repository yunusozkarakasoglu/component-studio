/**
 * MtSegmentedControlSize
 * Boyutlar (saf React, Mantine kaynaklı).
 * @id 1251
 * @category Seçim
 * @subcategory MtSegmentedControl
 * @source mantine
 */
import { MtSegmentedControl } from "@/components/ui/mt-segmented-control"

function MtSegmentedControlSize() {
  return (
    <div className="flex flex-col items-start gap-4">
      <MtSegmentedControl size="xs" data={["xs", "sm", "md"]} defaultValue="xs" />
      <MtSegmentedControl size="sm" data={["xs", "sm", "md"]} defaultValue="sm" />
      <MtSegmentedControl size="lg" data={["xs", "sm", "md"]} defaultValue="lg" />
    </div>
  )
}

export { MtSegmentedControlSize }
