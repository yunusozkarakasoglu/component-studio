/**
 * ShadcnToggleText
 * Metinli anahtar (saf React, shadcn kaynaklı).
 * @id 728
 * @category Toggle
 * @subcategory ShadcnToggle
 * @source shadcn
 */
import { Italic } from "@/components/ui/icons"
import { ShadcnToggle } from "@/components/ui/shadcn-toggle"

function ShadcnToggleText() {
  return (
    <ShadcnToggle aria-label="Toggle italic">
      <Italic className="size-4" />
      Italic
    </ShadcnToggle>
  )
}

export { ShadcnToggleText }
