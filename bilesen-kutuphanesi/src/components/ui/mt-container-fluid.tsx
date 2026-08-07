/**
 * MtContainerFluid
 * Tam genişlik kap (saf React, Mantine kaynaklı).
 * @id 1017
 * @category Genel
 * @subcategory MtContainer
 * @source mantine
 */
import { MtContainer } from "@/components/ui/mt-container"

function MtContainerFluid() {
  return (
    <MtContainer fluid className="rounded bg-blue-200 text-center text-sm">
      Fluid container has 100% max-width
    </MtContainer>
  )
}

export { MtContainerFluid }
