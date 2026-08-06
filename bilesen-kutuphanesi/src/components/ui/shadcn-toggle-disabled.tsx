/**
 * ShadcnToggleDisabled
 * Devre dışı anahtarlar (saf React, shadcn kaynaklı).
 * @id 730
 * @category Toggle
 * @subcategory ShadcnToggle
 * @source shadcn
 */
import { ShadcnToggle } from "@/components/ui/shadcn-toggle"

function ShadcnToggleDisabled() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <ShadcnToggle aria-label="Toggle disabled" isDisabled>
        Disabled
      </ShadcnToggle>
      <ShadcnToggle variant="outline" aria-label="Toggle disabled outline" isDisabled>
        Disabled
      </ShadcnToggle>
    </div>
  )
}

export { ShadcnToggleDisabled }
