/**
 * ShadcnBadgeDemo
 * Temel örnek — varyantlar (saf React, shadcn kaynaklı).
 * @id 775
 * @category Kartlar
 * @subcategory ShadcnBadge
 * @source shadcn
 */
import { ShadcnBadge } from "@/components/ui/shadcn-badge"

function ShadcnBadgeDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <ShadcnBadge>Badge</ShadcnBadge>
      <ShadcnBadge variant="secondary">Secondary</ShadcnBadge>
      <ShadcnBadge variant="destructive">Destructive</ShadcnBadge>
      <ShadcnBadge variant="outline">Outline</ShadcnBadge>
    </div>
  )
}

export { ShadcnBadgeDemo }
