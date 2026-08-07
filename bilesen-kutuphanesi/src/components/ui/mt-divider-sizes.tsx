/**
 * MtDividerSizes
 * Ayraç boyutları (saf React, Mantine kaynaklı).
 * @id 1032
 * @category Genel
 * @subcategory MtDivider
 * @source mantine
 */
import { MtDivider } from "@/components/ui/mt-divider"

function MtDividerSizes() {
  return (
    <div className="flex w-64 flex-col gap-3">
      <MtDivider size="xs" />
      <MtDivider size="sm" />
      <MtDivider size="md" />
      <MtDivider size="lg" />
      <MtDivider size="xl" />
      <MtDivider size={10} />
    </div>
  )
}

export { MtDividerSizes }
