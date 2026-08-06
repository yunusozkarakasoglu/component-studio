/**
 * ShadcnButtonGroupInput
 * Butonlu arama girişi (saf React, shadcn kaynaklı).
 * @id 762
 * @category Butonlar & Aksiyonlar
 * @subcategory ShadcnButtonGroup
 * @source shadcn
 */
import { Search } from "@/components/ui/icons"
import { ShadcnButton } from "@/components/ui/shadcn-button"
import { ShadcnButtonGroup } from "@/components/ui/shadcn-button-group"
import { ShadcnInput } from "@/components/ui/shadcn-input"

function ShadcnButtonGroupInput() {
  return (
    <ShadcnButtonGroup>
      <ShadcnInput placeholder="Search..." />
      <ShadcnButton variant="outline" aria-label="Search">
        <Search className="size-4" />
      </ShadcnButton>
    </ShadcnButtonGroup>
  )
}

export { ShadcnButtonGroupInput }
