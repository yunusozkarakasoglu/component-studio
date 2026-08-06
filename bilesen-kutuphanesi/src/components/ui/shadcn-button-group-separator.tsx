/**
 * ShadcnButtonGroupSeparatorDemo
 * Ayraçlı grup — kopyala/yapıştır (saf React, shadcn kaynaklı).
 * @id 760
 * @category Butonlar & Aksiyonlar
 * @subcategory ShadcnButtonGroup
 * @source shadcn
 */
import { ShadcnButton } from "@/components/ui/shadcn-button"
import { ShadcnButtonGroup, ShadcnButtonGroupSeparator } from "@/components/ui/shadcn-button-group"

function ShadcnButtonGroupSeparatorDemo() {
  return (
    <ShadcnButtonGroup>
      <ShadcnButton variant="secondary" size="sm">Copy</ShadcnButton>
      <ShadcnButtonGroupSeparator />
      <ShadcnButton variant="secondary" size="sm">Paste</ShadcnButton>
    </ShadcnButtonGroup>
  )
}

export { ShadcnButtonGroupSeparatorDemo }
