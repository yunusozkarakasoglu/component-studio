/**
 * MtFlexDemo
 * Flex düzenleyici (saf React, Mantine kaynaklı).
 * @id 1026
 * @category Genel
 * @subcategory MtFlex
 * @source mantine
 */
import { MtFlex } from "@/components/ui/mt-flex"
import { ShadcnButton } from "@/components/ui/shadcn-button"

function MtFlexDemo() {
  return (
    <MtFlex gap="md" justify="center" className="rounded-lg bg-gray-100 p-3">
      <ShadcnButton>Button 1</ShadcnButton>
      <ShadcnButton>Button 2</ShadcnButton>
      <ShadcnButton>Button 3</ShadcnButton>
    </MtFlex>
  )
}

export { MtFlexDemo }
