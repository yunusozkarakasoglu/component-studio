/**
 * MtFlexResponsive
 * Duyarlı flex — mobil dikey, masaüstü yatay (saf React, Mantine kaynaklı).
 * @id 1027
 * @category Genel
 * @subcategory MtFlex
 * @source mantine
 */
import { MtFlex } from "@/components/ui/mt-flex"
import { ShadcnButton } from "@/components/ui/shadcn-button"

function MtFlexResponsive() {
  return (
    <MtFlex direction="column" gap="sm" className="items-start sm:flex-row sm:items-center sm:gap-6">
      <ShadcnButton>Button 1</ShadcnButton>
      <ShadcnButton>Button 2</ShadcnButton>
      <ShadcnButton>Button 3</ShadcnButton>
    </MtFlex>
  )
}

export { MtFlexResponsive }
