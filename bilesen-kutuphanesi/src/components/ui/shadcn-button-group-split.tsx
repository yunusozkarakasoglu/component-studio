/**
 * ShadcnButtonGroupSplit
 * Bölünmüş buton — ana + ikon (saf React, shadcn kaynaklı).
 * @id 761
 * @category Butonlar & Aksiyonlar
 * @subcategory ShadcnButtonGroup
 * @source shadcn
 */
import { Plus } from "@/components/ui/icons"
import { ShadcnButton } from "@/components/ui/shadcn-button"
import { ShadcnButtonGroup, ShadcnButtonGroupSeparator } from "@/components/ui/shadcn-button-group"

function ShadcnButtonGroupSplit() {
  return (
    <ShadcnButtonGroup>
      <ShadcnButton variant="secondary">Button</ShadcnButton>
      <ShadcnButtonGroupSeparator />
      <ShadcnButton size="icon" variant="secondary" aria-label="Add">
        <Plus className="size-4" />
      </ShadcnButton>
    </ShadcnButtonGroup>
  )
}

export { ShadcnButtonGroupSplit }
