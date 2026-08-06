/**
 * ShadcnBadgeVariants
 * Tüm varyantlar (saf React, shadcn kaynaklı).
 * @id 776
 * @category Kartlar
 * @subcategory ShadcnBadge
 * @source shadcn
 */
import { ShadcnBadge } from "@/components/ui/shadcn-badge"

function ShadcnBadgeVariants() {
  return (
    <div className="flex flex-wrap gap-2">
      <ShadcnBadge>Default</ShadcnBadge>
      <ShadcnBadge variant="secondary">Secondary</ShadcnBadge>
      <ShadcnBadge variant="destructive">Destructive</ShadcnBadge>
      <ShadcnBadge variant="outline">Outline</ShadcnBadge>
      <ShadcnBadge variant="ghost">Ghost</ShadcnBadge>
    </div>
  )
}

export { ShadcnBadgeVariants }
