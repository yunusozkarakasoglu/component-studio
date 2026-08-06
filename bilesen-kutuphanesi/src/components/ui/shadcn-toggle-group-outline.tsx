/**
 * ShadcnToggleGroupOutline
 * Outline varyant — tek seçim (saf React, shadcn kaynaklı).
 * @id 734
 * @category Toggle
 * @subcategory ShadcnToggleGroup
 * @source shadcn
 */
import { ShadcnToggleGroup, ShadcnToggleGroupItem } from "@/components/ui/shadcn-toggle-group"

function ShadcnToggleGroupOutline() {
  return (
    <ShadcnToggleGroup variant="outline" defaultValue={["all"]}>
      <ShadcnToggleGroupItem value="all" aria-label="Toggle all">
        All
      </ShadcnToggleGroupItem>
      <ShadcnToggleGroupItem value="missed" aria-label="Toggle missed">
        Missed
      </ShadcnToggleGroupItem>
    </ShadcnToggleGroup>
  )
}

export { ShadcnToggleGroupOutline }
