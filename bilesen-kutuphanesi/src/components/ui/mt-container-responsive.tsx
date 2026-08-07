/**
 * MtContainerResponsive
 * Duyarlı kap (saf React, Mantine kaynaklı).
 * Not: kaynaktaki tema genişletmesi basitleştirildi — max-w-sm + %100.
 * @id 1018
 * @category Genel
 * @subcategory MtContainer
 * @source mantine
 */
import { MtContainer } from "@/components/ui/mt-container"

function MtContainerResponsive() {
  return (
    <MtContainer size="sm" className="rounded bg-blue-200 text-center text-sm">
      Container with responsive size
    </MtContainer>
  )
}

export { MtContainerResponsive }
