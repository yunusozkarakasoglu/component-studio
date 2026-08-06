/**
 * ShadcnBadgeWithIcon
 * İkonlu rozetler — inline-start/end (saf React, shadcn kaynaklı).
 * @id 777
 * @category Kartlar
 * @subcategory ShadcnBadge
 * @source shadcn
 */
import { BadgeCheck, Bookmark } from "@/components/ui/icons"
import { ShadcnBadge } from "@/components/ui/shadcn-badge"

function ShadcnBadgeWithIcon() {
  return (
    <div className="flex flex-wrap gap-2">
      <ShadcnBadge variant="secondary">
        <BadgeCheck data-icon="inline-start" className="size-3.5" />
        Verified
      </ShadcnBadge>
      <ShadcnBadge variant="outline">
        Bookmark
        <Bookmark data-icon="inline-end" className="size-3.5" />
      </ShadcnBadge>
    </div>
  )
}

export { ShadcnBadgeWithIcon }
