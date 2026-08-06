/**
 * ShadcnBadgeAsLink
 * Bağlantı rozeti (saf React, shadcn kaynaklı).
 * @id 779
 * @category Kartlar
 * @subcategory ShadcnBadge
 * @source shadcn
 */
import { ArrowUpRight } from "@/components/ui/icons"
import { ShadcnBadge } from "@/components/ui/shadcn-badge"

function ShadcnBadgeAsLink() {
  return (
    <a href="#link" className="cursor-pointer">
      <ShadcnBadge variant="outline">
        Open Link <ArrowUpRight data-icon="inline-end" className="size-3.5" />
      </ShadcnBadge>
    </a>
  )
}

export { ShadcnBadgeAsLink }
