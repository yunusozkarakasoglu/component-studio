/**
 * ShadcnToggleGroupSpacing
 * Aralıklı grup (saf React, shadcn kaynaklı).
 * @id 736
 * @category Toggle
 * @subcategory ShadcnToggleGroup
 * @source shadcn
 */
import { ShadcnToggleGroup, ShadcnToggleGroupItem } from "@/components/ui/shadcn-toggle-group"

function ShadcnToggleGroupSpacing() {
  return (
    <ShadcnToggleGroup size="sm" defaultValue={["top"]} variant="outline" spacing={2}>
      <ShadcnToggleGroupItem value="top" aria-label="Toggle top">Top</ShadcnToggleGroupItem>
      <ShadcnToggleGroupItem value="bottom" aria-label="Toggle bottom">Bottom</ShadcnToggleGroupItem>
      <ShadcnToggleGroupItem value="left" aria-label="Toggle left">Left</ShadcnToggleGroupItem>
      <ShadcnToggleGroupItem value="right" aria-label="Toggle right">Right</ShadcnToggleGroupItem>
    </ShadcnToggleGroup>
  )
}

export { ShadcnToggleGroupSpacing }
