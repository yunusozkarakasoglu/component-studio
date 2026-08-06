/**
 * ShadcnToggleSizes
 * Boyutlar — küçük, varsayılan, büyük (saf React, shadcn kaynaklı).
 * @id 729
 * @category Toggle
 * @subcategory ShadcnToggle
 * @source shadcn
 */
import { ShadcnToggle } from "@/components/ui/shadcn-toggle"

function ShadcnToggleSizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <ShadcnToggle variant="outline" aria-label="Toggle small" size="sm">
        Small
      </ShadcnToggle>
      <ShadcnToggle variant="outline" aria-label="Toggle default" size="default">
        Default
      </ShadcnToggle>
      <ShadcnToggle variant="outline" aria-label="Toggle large" size="lg">
        Large
      </ShadcnToggle>
    </div>
  )
}

export { ShadcnToggleSizes }
