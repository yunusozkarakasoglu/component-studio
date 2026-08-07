/**
 * MtStackDemo
 * Temel dikey düzen (saf React, Mantine kaynaklı).
 * @id 1010
 * @category Genel
 * @subcategory MtStack
 * @source mantine
 */
import { MtStack } from "@/components/ui/mt-stack"
import { ShadcnButton } from "@/components/ui/shadcn-button"

function MtStackDemo() {
  return (
    <MtStack gap="sm" className="w-40">
      <ShadcnButton variant="outline">1</ShadcnButton>
      <ShadcnButton variant="outline">2</ShadcnButton>
      <ShadcnButton variant="outline">3</ShadcnButton>
    </MtStack>
  )
}

export { MtStackDemo }
