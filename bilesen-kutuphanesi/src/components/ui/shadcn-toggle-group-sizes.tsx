/**
 * ShadcnToggleGroupSizes
 * Boyutlar — küçük ve varsayılan (saf React, shadcn kaynaklı).
 * @id 735
 * @category Toggle
 * @subcategory ShadcnToggleGroup
 * @source shadcn
 */
import { ShadcnToggleGroup, ShadcnToggleGroupItem } from "@/components/ui/shadcn-toggle-group"

function ShadcnToggleGroupSizes() {
  return (
    <div className="flex flex-col gap-4">
      <ShadcnToggleGroup size="sm" defaultValue={["top"]} variant="outline">
        <ShadcnToggleGroupItem value="top" aria-label="Toggle top">Top</ShadcnToggleGroupItem>
        <ShadcnToggleGroupItem value="bottom" aria-label="Toggle bottom">Bottom</ShadcnToggleGroupItem>
        <ShadcnToggleGroupItem value="left" aria-label="Toggle left">Left</ShadcnToggleGroupItem>
        <ShadcnToggleGroupItem value="right" aria-label="Toggle right">Right</ShadcnToggleGroupItem>
      </ShadcnToggleGroup>
      <ShadcnToggleGroup defaultValue={["top"]} variant="outline">
        <ShadcnToggleGroupItem value="top" aria-label="Toggle top">Top</ShadcnToggleGroupItem>
        <ShadcnToggleGroupItem value="bottom" aria-label="Toggle bottom">Bottom</ShadcnToggleGroupItem>
        <ShadcnToggleGroupItem value="left" aria-label="Toggle left">Left</ShadcnToggleGroupItem>
        <ShadcnToggleGroupItem value="right" aria-label="Toggle right">Right</ShadcnToggleGroupItem>
      </ShadcnToggleGroup>
    </div>
  )
}

export { ShadcnToggleGroupSizes }
