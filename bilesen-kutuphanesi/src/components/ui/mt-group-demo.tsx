/**
 * MtGroupDemo
 * Temel grup — yatay düzen (saf React, Mantine kaynaklı).
 * @id 1007
 * @category Genel
 * @subcategory MtGroup
 * @source mantine
 */
import { MtGroup } from "@/components/ui/mt-group"
import { ShadcnButton } from "@/components/ui/shadcn-button"

function MtGroupDemo() {
  return (
    <MtGroup gap="md">
      <ShadcnButton variant="outline">First</ShadcnButton>
      <ShadcnButton variant="outline">Second</ShadcnButton>
      <ShadcnButton variant="outline">Third</ShadcnButton>
    </MtGroup>
  )
}

export { MtGroupDemo }
