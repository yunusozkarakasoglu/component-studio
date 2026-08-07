/**
 * MtContainerSizes
 * Özel boyut (saf React, Mantine kaynaklı).
 * @id 1016
 * @category Genel
 * @subcategory MtContainer
 * @source mantine
 */
import { MtContainer } from "@/components/ui/mt-container"

function MtContainerSizes() {
  return (
    <MtContainer size={300} className="rounded bg-blue-200 text-center text-sm">
      Container with custom size (300px)
    </MtContainer>
  )
}

export { MtContainerSizes }
