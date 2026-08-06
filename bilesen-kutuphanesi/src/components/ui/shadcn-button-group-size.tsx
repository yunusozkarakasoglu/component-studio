/**
 * ShadcnButtonGroupSize
 * Boyutlu gruplar — sm, default, lg (saf React, shadcn kaynaklı).
 * @id 758
 * @category Butonlar & Aksiyonlar
 * @subcategory ShadcnButtonGroup
 * @source shadcn
 */
import { Plus } from "@/components/ui/icons"
import { ShadcnButton } from "@/components/ui/shadcn-button"
import { ShadcnButtonGroup } from "@/components/ui/shadcn-button-group"

function ShadcnButtonGroupSize() {
  return (
    <div className="flex flex-col items-start gap-8">
      <ShadcnButtonGroup>
        <ShadcnButton variant="outline" size="sm">Small</ShadcnButton>
        <ShadcnButton variant="outline" size="sm">Button</ShadcnButton>
        <ShadcnButton variant="outline" size="sm">Group</ShadcnButton>
        <ShadcnButton variant="outline" size="icon-sm" aria-label="Plus"><Plus className="size-4" /></ShadcnButton>
      </ShadcnButtonGroup>
      <ShadcnButtonGroup>
        <ShadcnButton variant="outline">Default</ShadcnButton>
        <ShadcnButton variant="outline">Button</ShadcnButton>
        <ShadcnButton variant="outline">Group</ShadcnButton>
        <ShadcnButton variant="outline" size="icon" aria-label="Plus"><Plus className="size-4" /></ShadcnButton>
      </ShadcnButtonGroup>
      <ShadcnButtonGroup>
        <ShadcnButton variant="outline" size="lg">Large</ShadcnButton>
        <ShadcnButton variant="outline" size="lg">Button</ShadcnButton>
        <ShadcnButton variant="outline" size="lg">Group</ShadcnButton>
        <ShadcnButton variant="outline" size="icon-lg" aria-label="Plus"><Plus className="size-5" /></ShadcnButton>
      </ShadcnButtonGroup>
    </div>
  )
}

export { ShadcnButtonGroupSize }
