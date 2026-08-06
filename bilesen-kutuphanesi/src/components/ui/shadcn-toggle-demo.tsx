/**
 * ShadcnToggleDemo
 * Temel örnek — yer imi anahtarı (saf React, shadcn kaynaklı).
 * @id 726
 * @category Toggle
 * @subcategory ShadcnToggle
 * @source shadcn
 */
import { Bookmark } from "@/components/ui/icons"
import { ShadcnToggle } from "@/components/ui/shadcn-toggle"

function ShadcnToggleDemo() {
  return (
    <ShadcnToggle aria-label="Toggle bookmark" size="sm" variant="outline">
      <Bookmark className="size-4 group-aria-pressed/toggle:fill-foreground" />
      Bookmark
    </ShadcnToggle>
  )
}

export { ShadcnToggleDemo }
