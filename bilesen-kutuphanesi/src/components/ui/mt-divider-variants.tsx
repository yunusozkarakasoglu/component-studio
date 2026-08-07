/**
 * MtDividerVariants
 * Ayraç varyantları (saf React, Mantine kaynaklı).
 * @id 1033
 * @category Genel
 * @subcategory MtDivider
 * @source mantine
 */
import { MtDivider } from "@/components/ui/mt-divider"

function MtDividerVariants() {
  return (
    <div className="flex w-64 flex-col gap-4">
      <MtDivider />
      <MtDivider variant="dashed" />
      <MtDivider variant="dotted" />
    </div>
  )
}

export { MtDividerVariants }
