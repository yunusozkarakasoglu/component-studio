/**
 * ShadcnButtonGroupOrientation
 * Dikey yönelim — medya kontrolleri (saf React, shadcn kaynaklı).
 * @id 757
 * @category Butonlar & Aksiyonlar
 * @subcategory ShadcnButtonGroup
 * @source shadcn
 */
import { Minus, Plus } from "@/components/ui/icons"
import { ShadcnButton } from "@/components/ui/shadcn-button"
import { ShadcnButtonGroup } from "@/components/ui/shadcn-button-group"

function ShadcnButtonGroupOrientation() {
  return (
    <ShadcnButtonGroup orientation="vertical" aria-label="Media controls" className="h-fit">
      <ShadcnButton variant="outline" size="icon" aria-label="Plus">
        <Plus className="size-4" />
      </ShadcnButton>
      <ShadcnButton variant="outline" size="icon" aria-label="Minus">
        <Minus className="size-4" />
      </ShadcnButton>
    </ShadcnButtonGroup>
  )
}

export { ShadcnButtonGroupOrientation }
